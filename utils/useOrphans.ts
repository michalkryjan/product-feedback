export function useOrphans (text: string): string {
  return text ? text.replace(/ (a|A|the|The|and) /g, ' $1&nbsp;') : ''
}