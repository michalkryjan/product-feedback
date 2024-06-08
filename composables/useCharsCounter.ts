interface ICharsCounter {
  watch: ComputedRef<string>
  limit: number
}

export function useCharsCounter (options: ICharsCounter) {
  const charsLeft = ref<number>(calcCharsLeft(options))

  watch(options.watch, () => {
    charsLeft.value = calcCharsLeft(options)
  })

  function calcCharsLeft (options: ICharsCounter): number {
    return options.limit - options.watch.value.length
  }

  return {
    charsLeft
  }
}