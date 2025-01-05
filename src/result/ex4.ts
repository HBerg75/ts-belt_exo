// // Exercice 4: Inverser un Result et gérer l'erreurFonctions à utiliser : flip, mapError, recoverObjectif : Inverser les valeurs Ok et Error d'un Result, transformer l'erreur en ajoutant un message personnalisé, puis récupérer une valeur par défaut.

import { R } from "@mobily/ts-belt";

export const resultFn4 = () => {
    // Créer un Result à partir d'une valeur nullable
    const result = R.fromNullable(null, "Erreur");

    // Inverser le Result
    const flippedResult = R.flip(result);

    // Transformer l'erreur avec un message personnalisé
    const mappedError = R.mapError(flippedResult, (error) => `Personnalisé : ${error}`);

    // Récupérer une valeur par défaut en cas de succès ou d'erreur
    const finalValue = R.getWithDefault<string, string>(mappedError, "Valeur par défaut");

    console.log("Résultat inversé :", flippedResult);
    console.log("Résultat avec erreur personnalisée :", mappedError);
    console.log("Valeur finale :", finalValue);

    return finalValue;
};
