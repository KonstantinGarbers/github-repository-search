import { type Language } from './Language'

export interface RepositoryNode {
  name: string
  descriptionHTML: string
  url: string
  stargazerCount: number
  updatedAt: Date
  primaryLanguage: Language
}
