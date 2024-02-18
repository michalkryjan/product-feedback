export async function useGlobalContent (key: string): Promise<string> {
  return Object.values(await queryContent('global').only(key).findOne())[0]
}