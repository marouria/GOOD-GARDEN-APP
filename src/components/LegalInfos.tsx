import React from "react";
import { View } from "react-native";
import { Headline, List } from "react-native-paper";

interface LegalInfosProps {
  title: string;
  content: string;
}

const allLegalInfos = [
  {
    title: "Conditions générales d'utilisation",
    content:
      "Nouvelle version applicable à partir du 7 juin 2021. La plateforme GOODGARDEN (ci-après le “Site”) est gérée et hébergée par la société GOODGARDEN, UAB (ci-après “GOODGARDEN”), située à Svitrigailos st. 13, 03228 Vilnius en Lituanie, inscrite au Registre des Sociétés de la République de Lituanie sous le numéro 302767152. Avant de naviguer ou de s’inscrire sur le Site, chaque Utilisateur doit lire les présentes Conditions Générales d’Utilisation (ci-après les “Conditions Générales”), la Politique de Confidentialité (telle définie dans l’Article Définitions ci-dessous), ainsi que les autres dispositions obligatoires du Site, rappelées ou non dans les présentes Conditions Générales (y compris les Règles du Catalogue, les Règles du Forum et la Liste des Tarifs), les accepter et s’engager à les respecter.",
  },
  {
    title: "Politiques de confidentialité",
    content:
      "Nous collectons et utilisons vos données à caractère personnel pour vous permettre d’utiliser notre Plateforme, fournir nos services et conclure un contrat (CG) avec vous, et tout particulièrement pour effectuer des transactions commerciales via la Plateforme, utiliser le système de paiement électronique ou laisser des avis et communiquer avec d’autres membres. Afin d'utiliser ces services, vous devez avoir un compte Vinted. À cette fin, vous devez vous inscrire en tant que membre sur le site Web ou l’Application. Nous avons besoin de la plupart de vos données à caractère personnel pour conclure un contrat (CG) avec vous. Dans le cas où vous ne nous fournissez pas ces données à caractère personnel, nous ne serons pas en mesure de conclure et d’exécuter un contrat (CG) avec vous. Nous avons besoin d’une partie de vos données afin de pouvoir satisfaire à nos obligations légales lorsque vous êtes membre de notre Plateforme. Dans le cas où vous ne nous fournissez pas ces données à caractère personnel, nous ne serons pas en mesure de nous conformer aux exigences légales et de fournir nos services. Ces données sont également utilisées pour améliorer la Plateforme afin que nous puissions offrir une meilleure expérience à nos membres (voir 2.2.12). Good Garden collecte vos données à caractère personnel pour vous permettre d’utiliser notre Plateforme, pour fournir ses services et pour conclure un contrat (CG) avec vous, et ces données sont conservées aussi longtemps que nous conservons votre compte Vinted – pendant 3 mois à partir de la date de suppression de votre compte Vinted ou pendant 5 ans et 3 mois à partir du moment où votre compte devient inactif.",
  },
  {
    title: "Copyrights",
    content:
      "Copyright is a form of legal protection that gives you ownership rights to your original works. The moment you create a work of creative expression that falls within the scope of US copyright laws, it is automatically protected by law. Copyright protects your original works, published or unpublished, in the event that they’re stolen or plagiarized.",
  },
];

const LegalInfos = () => {
  return (
    <View>
      {allLegalInfos.map((info) => {
        return (
          <List.Accordion title={info.title}>
            <List.Item title="" description={info.content} />
          </List.Accordion>
        );
      })}
    </View>
  );
};

export default LegalInfos;
