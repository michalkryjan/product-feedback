export interface ISortByOption {
  id: `${keyof Omit<IFeedback, 'id'>}-${'asc'|'desc'}`
  name: string
}

export interface IFilterBy {
  categoryId: ICategory['id'] | undefined
}

export const useFiltersStore = defineStore('filters', () => {
  const availableSortOptions: ISortByOption[] = [
    {
      id: 'upvotes-desc',
      name: 'Most Upvotes'
    },
    {
      id: 'upvotes-asc',
      name: 'Least Upvotes'
    },
    {
      id: 'comments-desc',
      name: 'Most Comments'
    },
    {
      id: 'comments-asc',
      name: 'Least Comments'
    }
  ]

  const sortBy = ref<ISortByOption>(availableSortOptions[0])
  const filterBy = reactive<IFilterBy>({
    categoryId: undefined
  })

  return {
    availableSortOptions,
    sortBy,
    filterBy
  }
})