export interface CompetitionItem {
  _id: string;
  name: string;
  score: number;
  category: string;
  file: string;
}

export interface Category {
  pictures: string;
  recipes: string; 
  exams: string;
}
export type CategoryKeys = keyof Category;
