const FUNC_WARNING = `Value is a function. Possibly avoidable re-render?`
const AVOIDABLE_WARNING = `Value did not change. Avoidable re-render!`

let i = 0;

export const mkDefaultNotifier = limit => ({name, prev, next, type}) => {
  if (type === 'avoidable' && i++ < limit) {
    console.log(`Avoidable re-render in ${name}: ${prev} => ${next}`);
  }
}