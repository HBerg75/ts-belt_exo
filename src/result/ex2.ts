// // Exercice 2: Manipuler une valeur nullable et récupérer une valeur par défautFonctions à utiliser : fromNullable, isOk, getWithDefault, mapObjectif : Créer un Result à partir d'une valeur nullable, vérifier si c'est un succès, appliquer une transformation sur la valeur, puis récupérer une valeur par défaut si l'option est vide.

import { R } from "@mobily/ts-belt";

export const resultFn2 = () => {
    const value = null;

    // Créer un Result à partir d'une valeur nullable
    const result = R.fromNullable(value, "Valeur nulle");

    // Vérifier si c'est un succès
    const isSuccess = R.isOk(result);
    console.log("Le résultat est un succès :", isSuccess);

    // Appliquer une transformation
    const transformedResult = R.map(result, (val) => `Valeur transformée : ${val}`);

    // Récupérer une valeur par défaut
    const finalValue = R.getWithDefault(transformedResult, "Valeur par défaut");

    console.log("Résultat après transformation :", transformedResult);
    console.log("Valeur finale :", finalValue);

    return finalValue;
};
