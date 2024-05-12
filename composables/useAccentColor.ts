type VariantId = number

export function useAccentColor (variant: VariantId, type: 'textClass' | 'beforeBgClass'): string | undefined {
  let config: Record<VariantId, string> | undefined = undefined

  if (type === 'textClass') {
    config = {
      1: 'text-yellow-1',
      2: 'text-orange-1',
      3: 'text-purple-1',
      4: 'text-lightBlue-1'
    }
  } else if (type === 'beforeBgClass') {
    config = {
      1: 'before:bg-yellow-1',
      2: 'before:bg-orange-1',
      3: 'before:bg-purple-1',
      4: 'before:bg-lightBlue-1'
    }
  }

  if (config && Object.keys(config).includes(variant.toString())) {
    return config[variant]
  } else {
    return undefined
  }
}