import { Language } from "./Language";

export interface RepositoryNode {
    __typename: string;
    name: string;
    descriptionHTML: string;
    url: string;
    stargazerCount: number;
    primaryLanguage: Language;
}  