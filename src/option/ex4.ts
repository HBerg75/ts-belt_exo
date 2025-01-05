// // Exercice 4: Vérifier une option, appliquer une transformation, puis obtenir le résultat sous forme nullableFonctions à utiliser : fromNullable, isSome, map, toNullableObjectif : Créer une option à partir d'une valeur, vérifier si elle est présente, appliquer une transformation en augmentant de 10%, puis retourner cette option sous forme nullable.

import { O } from "@mobily/ts-belt";

export const optionFn4 = () => {
    const value = 1000;

    // 1. Créer une option à partir de la valeur
    const option = O.fromNullable(value);

    // 2. Vérifier si l'option est présente
    if (O.isSome(option)) {
        console.log("Option is present:", option);
    } else {
        console.log("Option is not present");
    }

    // 3. Appliquer une transformation en augmentant de 10%
    const transformedOption = O.map(option, (val) => val * 1.1);

    // 4. Convertir en nullable
    const resultNullable = O.toNullable(transformedOption);

    // Afficher le résultat final
    console.log("Result as nullable:", resultNullable);

    return resultNullable;
};
