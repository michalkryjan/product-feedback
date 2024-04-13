export function useCapitalized (text: string): string {
  return typeof text === 'string' && text.length > 0 ? text[0].toUpperCase() + text.slice(1) : ''
}