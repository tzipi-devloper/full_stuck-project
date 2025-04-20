export interface CompetitionItem {
    id: number;
    name: string;
    score: number;
    category: string;
    file: string;
}

export const Category = {
    Pictures: "pictures",
    Recipes: "recipes",
    Exams: "exams"
} as const;

export type CategoryKeys = keyof typeof Category;