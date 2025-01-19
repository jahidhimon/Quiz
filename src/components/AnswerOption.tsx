import {
  Pressable,
  Text,
  StyleSheet,
  View,
  GestureResponderEvent,
} from "react-native";
import { OptionType } from "../types";

interface AnswerOptionProps {
  option: OptionType;
  isSelected: boolean;
  onPress: (event: GestureResponderEvent) => void;
}

export default function AnswerOption({
  option,
  isSelected,
  onPress,
}: AnswerOptionProps) {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.container, isSelected ? styles.selected : null]}>
        <Text style={styles.answerOptionText}>{option}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,

    padding: 20,
    borderColor: "lightgrey",
    borderRadius: 10,
  },
  answerOptionText: {
    fontSize: 18,
    fontWeight: "500",
  },
  selected: {
    backgroundColor: "#E1F396",
    padding: 20,
    borderColor: "white",
  },
});
