import React, { useState } from "react";
import { PropTypes } from 'prop-types';

export const MockDataContext = React.createContext({
  useMock: false,
  setUseMock: () => {},
});

export const MockDataProvider = ({ children }) => {
  // const [useMock, setUseMock] = useState(false);
  const [useMock, setUseMock] = useState(import.meta.env.VITE_USE_MOCK === 'false'); // Initialise useMock à partir de l'environnement

  return (
    <MockDataContext.Provider value={{ useMock, setUseMock }}>
      {children}
    </MockDataContext.Provider>
  );
};
// PropTypes validation
MockDataProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate that 'children' is required and must be valid React node
};

/**
 *J'ai définit un contexte React appelé MockDataContext, qui permet de partager des données et des fonctionnalités (ici useMock et setUseMock) entre plusieurs composants sans avoir à passer ces données explicitement à travers chaque niveau de composants.
 **
 **C'est un contexte créé à l'aide de React.createContext. Il fournit deux éléments :
useMock : un booléen qui indique si les données fictives (mock data) doivent être utilisées ou non.
setUseMock : une fonction permettant de modifier la valeur de useMock. Par défaut, cette fonction ne fait rien (() => {}).
**
**MockDataProvider :Il s'agit d'un composant fournisseur (provider) qui permet aux composants enfants d'accéder à useMock et setUseMock.
À l'intérieur, il utilise useState pour gérer la valeur de useMock de manière locale et la rendre modifiable avec setUseMock.
**
**MockDataProvider entoure les composants enfants via {children}, leur permettant d'accéder aux valeurs du contexte (useMock et setUseMock).
 */

/**
 * Avantage decontext:
 * Simplifier la gestion des props:Sans le contexte, si plusieurs composants doivent utiliser les mêmes données, il faut passer ces données via les props, souvent à travers plusieurs niveaux de composants, même si certains de ces composants n'en ont pas besoin directement. C'est ce qu'on appelle le prop drilling.
 * 
 * Le contexte permet de centraliser ces données et de les rendre accessibles à tous les composants qui en ont besoin, sans avoir à les transmettre manuellement à chaque niveau de la hiérarchie.
 * *Centraliser les états ou les fonctionnalités partagés
 *  Meilleure organisation et maintenance du code
 * Les composants qui ont besoin de ces données peuvent simplement s'y abonner via le useContext au lieu de se soucier de la manière dont ces données leur sont passées.
 * 
 */

/**
 * Un custom hook permet d'extraire toute la logique liée au contexte dans une fonction réutilisable. Cela permet de masquer la complexité derrière un hook, rendant le code dans les composants plus simple et facile à comprendre.
 * 
 * En créant un custom hook, tu peux réutiliser la logique dans plusieurs composants sans dupliquer le code. Cela améliore la modularité et la maintenabilité.
 * 
 * Avec les custom hooks, la logique métier liée au contexte est séparée de la logique de présentation dans les composants. Cela rend les composants plus centrés sur l'interface utilisateur,
 */

/**
 * définir le contexte pour gérer l'état useMock, qui
 *  permet de basculer entre les données mock et l api.
 * 
 * Ce contexte crée une valeur par défaut pour useMock (qui est false par défaut, signifiant qu'on' utilises des données réelles) et une fonction vide setUseMock, qui sera remplacée par un véritable setter lorsque j'utiliserais dans mon application.
 * 
 * Il me permet de passer cette valeur (useMock) à d'autres composants de mon application sans avoir à les transmettre manuellement à chaque niveau.
 * 
 * permer d'avoir la flexibilité de basculer entre des données simulées (mock) et des données réelles,
 */
// export const MockDataContext = React.createContext({
//   useMock: false,
//   setUseMock: () => {},
// });