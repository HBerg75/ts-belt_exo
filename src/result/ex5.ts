// // Exercice 5: Manipuler un Result à partir d'une exécution et convertir en optionFonctions à utiliser : fromExecution, map, toOptionObjectif : Transformer une exécution en Result, appliquer une transformation, puis convertir le résultat en option.

import { R, O } from "@mobily/ts-belt";

export const resultFn5 = () => {
    const riskyFunction = () => {
        if (Math.random() > 0.5) {
            return 150;
        }
        throw new Error("Erreur");
    };

    // Transformer une exécution en un Result
    const result = R.fromExecution(riskyFunction);

    // Appliquer une transformation sur la valeur
    const transformedResult = R.map(result, (value) => value * 2);

    // Convertir le Result en Option
    const option = R.toOption(transformedResult);

    // Afficher les résultats
    console.log("Result après transformation :", transformedResult);
    console.log("Option convertie :", option);

    // Retourner l'option convertie
    return option;
};
