// // Exercice 3: Associer deux options et appliquer une fonctionFonctions à utiliser : fromNullable, zipWith, mapObjectif : Associer deux options, puis utiliser une fonction pour ajouter les deux valeurs ensemble, et enfin transformer le résultat pour afficher une chaîne.

// const value1 = 100;
// const value2 = 50;
import { O } from "@mobily/ts-belt";

export const optionFn3 = () => {
    const value1 = 100;
    const value2 = 50;

    // 1. Créer des options à partir des valeurs
    const option1 = O.fromNullable(value1);
    const option2 = O.fromNullable(value2);

    // 2. Associer les deux options et appliquer une fonction pour ajouter leurs valeurs
    const summedOption = O.zipWith(option1, option2, (a, b) => a + b);

    // 3. Transformer le résultat en une chaîne
    const resultString = O.map(summedOption, (sum) => `The sum is: ${sum}`);

    // 4. Afficher le résultat
    console.log(resultString);

    return resultString;
};

