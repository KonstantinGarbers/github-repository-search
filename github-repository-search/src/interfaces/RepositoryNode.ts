import { Language } from "./Language";

export interface RepositoryNode {
    name: string;
    descriptionHTML: string;
    url: string;
    stargazerCount: number;
    primaryLanguage: Language;
}  