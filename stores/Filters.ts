import type { Models } from 'types/models'

export interface ISortByOption {
  id: `${keyof Omit<Models.IFeedback, 'id'>}-${'asc'|'desc'}`
  name: string
}

export interface IFilterBy {
  category: Models.ICategory | undefined
}

export const useFiltersStore = defineStore('filters', () => {
  const availableSortingOptions: ISortByOption[] = [
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

  const activeSorting = ref<ISortByOption>(availableSortingOptions[0])
  const activeFilters = reactive<IFilterBy>({
    category: undefined
  })

  return {
    availableSortingOptions,
    activeSorting,
    activeFilters
  }
})