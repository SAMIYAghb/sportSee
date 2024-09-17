
// import React from "react";
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