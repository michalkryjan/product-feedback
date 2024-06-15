import type { Models } from 'types/models'

export interface ISortByOption {
  id: `${keyof Omit<Models.IFeedback, 'id'>}-${'asc'|'desc'}`
  name: string
}

export interface IFilterBy {
  category: Models.ICategory | undefined
}

export const useFiltersStore = defineStore('filters', () => {
  const availableSortOptions: ISortByOption[] = [
    {
      id: 'upvotes_count-desc',
      name: 'Most Upvotes'
    },
    {
      id: 'upvotes_count-asc',
      name: 'Least Upvotes'
    },
    {
      id: 'comments_count-desc',
      name: 'Most Comments'
    },
    {
      id: 'comments_count-asc',
      name: 'Least Comments'
    }
  ]

  const sortBy = ref<ISortByOption>(availableSortOptions[0])
  const filterBy = reactive<IFilterBy>({
    category: undefined
  })

  return {
    availableSortOptions,
    sortBy,
    filterBy
  }
})