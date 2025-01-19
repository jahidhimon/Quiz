import { Text, View, StyleSheet } from "react-native";
import { useState } from "react";
import AnswerOption from "./AnswerOption";
import { QuestionType } from "../types";

interface QuestionCardProps {
  question: QuestionType;
}

export default function QuestionCard({ question }: QuestionCardProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const onOptionSelected = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.questionCard}>
      <Text style={styles.question}>{question.title}</Text>
      <View style={{ gap: 10 }}>
        {question.options.map((option: string) => {
          return (
            <AnswerOption
              key={option}
              option={option}
              onPress={() => onOptionSelected(option)}
              isSelected={selectedOption == option}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  questionCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 40,
    gap: 20,
    padding: 20,

    // shadows
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  question: {
    fontSize: 24,
    fontWeight: "700",
  },
});
