// // Exercice 6: Appliquer une transformation à une erreur et récupérer une optionFonctions à utiliser : fromNullable, mapError, toOptionObjectif : Créer un Result à partir d'une valeur nullable, appliquer une transformation sur l'erreur, puis convertir le résultat en option.

import { R } from "@mobily/ts-belt";

export const resultFn6 = () => {
    const value = null;

    // Créer un Result à partir d'une valeur nullable
    const result = R.fromNullable(value, "Valeur nulle");

    // Appliquer une transformation sur l'erreur
    const transformedError = R.mapError(result, (error) => `Erreur transformée : ${error}`);

    // Convertir le Result en Option
    const option = R.toOption(transformedError);

    // Afficher les résultats
    console.log("Result initial :", result);
    console.log("Result avec erreur transformée :", transformedError);
    console.log("Option convertie :", option);

    // Retourner l'option convertie
    return option;
};
