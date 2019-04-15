const FUNC_WARNING = `Value is a function. Possibly avoidable re-render?`
const AVOIDABLE_WARNING = `Value did not change. Avoidable re-render!`

export const defaultNotifier = (displayName, diff) => {
  if (diff.length == 0) {
    if(Reactotron){
      Reactotron.log( `Avoidable re-render in ${displayName}, no changes`);
    }
    console.log(`Avoidable re-render in ${displayName}, no changes`);
  } else {
    if(Reactotron){
      Reactotron.log(`Avoidable re-render in ${displayName}`, diff);
    }
    console.log(`Avoidable re-render in ${displayName}`, diff);
  }
}
