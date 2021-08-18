import React from "react";
import { View } from "react-native";
import { Headline, List } from "react-native-paper";

interface FaqItemsProps {
  question: {
    title: string;
    answer: string;
  };
}

const allQuestions = [
  {
    title: "Comment ça marche ?",
    answer: "Ça marche comme ça",
  },
  {
    title: "Comment ça va ?",
    answer: "Ça va comme ça",
  },
];

const Faq = () => {
  const FaqItem = ({ question }: FaqItemsProps) => {
    return (
      <List.AccordionGroup>
        <List.Accordion title={question.title} id="1">
          <List.Item title={question.answer} />
        </List.Accordion>
      </List.AccordionGroup>
    );
  };

  return (
    <View>
      <Headline>FAQ</Headline>
      {allQuestions.map((question, index) => {
        return <FaqItem question={question} />;
      })}
    </View>
  );
};

export default Faq;
