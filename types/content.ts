import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import type { Data } from './data'

export declare namespace Content {
  type Global = ParsedContent & {
    defaultSeoTitle: string
    goBack: string
  }

  type Homepage = ParsedContent & {
    title: string
    productInfo: Data.Components.MainMenuProductInfo
    filters: Data.Components.MainMenuSuggestionsFilters
    roadmapSummary: Data.Components.MainMenuRoadmapSummary
  }
}