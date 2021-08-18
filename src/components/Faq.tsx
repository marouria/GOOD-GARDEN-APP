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
    answer:
      "1. Ajoutez des plantes à votre jardin 2. Prenez connaissance des conseils d'entretien de GoodGarden 3. Créez de nouvelles tâches pour en prendre soin tout au long de l'année",
  },
  {
    title: "D'où viennent les plantes ?",
    answer:
      "Toutes les plantes sont soigneusement selectionnées par notre équipe auprès de producteurs locaux et s'assurent d'une production non intensive, respectueuse de l'environnement et durable.",
  },
  {
    title: "Quels sont les niveaux de jardinnage ?",
    answer:
      "1. Débutant : pour ceux qui commande des plantes pour la première fois 2. Intermédiaire: pour ceux qui 3. Expert: pour ceux qui ",
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
