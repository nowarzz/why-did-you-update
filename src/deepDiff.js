import _isEqual from 'lodash/isEqual'
import _isFunction from 'lodash/isFunction'
import _isObject from 'lodash/isObject'
import _keys from 'lodash/keys'
import _union from 'lodash/union'

const isReferenceEntity = o => Array.isArray(o) || _isObject(o)
const addPath = (path, key) => path && key ? `${path}.${key}` : key || path || null;

export const deepDiff = (prev, next, name = null, notes) => {
  const isRefEntity = isReferenceEntity(prev) && isReferenceEntity(next)

  if (!_isEqual(prev, next)) {
    const isFunc = _isFunction(prev) && _isFunction(next)

    if (isFunc) {
      if (prev.name === next.name) {
        return notes.concat(`${name} (fn)`)
      }
    } else if (isRefEntity) {
      const keys = _union(_keys(prev), _keys(next))
      const result = keys.reduce((acc, key) => deepDiff(prev[key], next[key], addPath(name, key), acc), []);
      return notes.concat(result.length == 0 ? name : result)
    }
  } else if (prev !== next) {
    if (isRefEntity) {
      const keys = _union(_keys(prev), _keys(next))
      const result = keys.reduce((acc, key) => deepDiff(prev[key], next[key], addPath(name, key), acc), []);
      return notes.concat(result.length == 0 ? name : result)
    } else {
      return notes.concat(name)
    }
  }

  return notes
}

