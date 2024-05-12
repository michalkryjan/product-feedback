type VariantId = number

export function useAccentColor (variant: VariantId, type: 'textClass' | 'bgClass'): string | undefined {
  let config: Record<VariantId, string> | undefined = undefined

  if (type === 'textClass') {
    config = {
      1: 'text-yellow-1',
      2: 'text-orange-1',
      3: 'text-purple-1',
      4: 'text-lightBlue-1'
    }
  } else if (type === 'bgClass') {
    config = {
      1: 'bg-yellow-1',
      2: 'bg-orange-1',
      3: 'bg-purple-1',
      4: 'bg-lightBlue-1'
    }
  }

  if (config && Object.keys(config).includes(variant.toString())) {
    return config[variant]
  } else {
    return undefined
  }
}