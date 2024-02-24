export declare namespace Data {
  namespace Base {
    type Button = {
      label: string
      href?: string
    }
  }

  namespace Components {
    type FormFieldSelectOption = {
      label: string
      value: string
    }

    type ListSummaryItem = {
      label: string
      count: number
      markerColor: 'orange' | 'purple' | 'lightBlue'
    }

    type MainMenuProductInfo = {
      title: string
      content: string
    }

    type MainMenuRoadmapSummary = {
      title: string
      button: Base.Button
      items: ListSummaryItem[]
    }

    type MainMenuSuggestionsFilters = {
      items: Array<{
        label: string
      }>
    }
  }
}