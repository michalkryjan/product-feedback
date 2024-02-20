export declare namespace Data {
  namespace Base {
    type Button = {
      label: string
      href?: string
    }
  }

  namespace Components {
    type MainMenuProductInfo = {
      title: string
      content: string
    }

    type MainMenuRoadmapSummary = {
      title: string
      button: Base.Button
      items: Array<{
        labels: string
      }>
    }

    type MainMenuSuggestionsFilters = {
      items: Array<{
        labels: string
      }>
    }
  }
}