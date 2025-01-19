export type OptionType = string;

export interface QuestionType {
  title: string;
  options: OptionType[];
  correctAnswer: string;
}
