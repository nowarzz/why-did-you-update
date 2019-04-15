const FUNC_WARNING = `Value is a function. Possibly avoidable re-render?`
const AVOIDABLE_WARNING = `Value did not change. Avoidable re-render!`

export const defaultNotifier = (displayName, diff) => {
  if (diff.length == 0) {
    console.log(`Avoidable re-render in ${displayName}, no changes`);
  } else {
    console.log(`Avoidable re-render in ${displayName}`, diff);
  }
}
