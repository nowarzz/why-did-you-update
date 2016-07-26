const FUNC_WARNING = `Value is a function. Possibly avoidable re-render?`
const AVOIDABLE_WARNING = `Value did not change. Avoidable re-render!`

export const mkDefaultNotifier = ({name, prev, next, type}) => {
  console.log(`Avoidable re-render in ${name}/${type}:`, prev, next);
}