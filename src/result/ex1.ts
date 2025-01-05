// // Exercice 1: Transformer une exécution en Result, appliquer une transformation, puis obtenir la valeur par défautFonctions à utiliser : fromExecution, map, getWithDefaultObjectif : Transformer une exécution en Result, appliquer une transformation qui multiplie la valeur par 2, puis récupérer une valeur par défaut si l'exécution échoue.

import { R } from "@mobily/ts-belt";

export const resultFn1 = () => {
    const riskyFunction = () => {
        if (Math.random() > 0.5) {
            return 100;
        }
        throw new Error("Erreur");
    };

    // Transformer l'exécution en un Result
    const result = R.fromExecution(riskyFunction);

    // Appliquer une transformation : multiplier par 2
    const transformedResult = R.map(result, (value) => value * 2);

    // Obtenir une valeur par défaut en cas d'erreur
    const finalValue = R.getWithDefault(transformedResult, 0);

    console.log("Résultat après transformation :", transformedResult);
    console.log("Valeur finale :", finalValue);

    return finalValue;
};
