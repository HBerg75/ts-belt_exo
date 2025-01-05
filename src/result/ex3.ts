// // Exercice 3: Aplatir deux Result, vérifier et récupérer une valeur par défautFonctions à utiliser : flatMap, recover, map, getWithDefaultObjectif : Aplatir deux Result avec flatMap, appliquer une transformation sur la valeur, puis récupérer une valeur par défaut si l'une des valeurs échoue.

import { R } from "@mobily/ts-belt";

export const resultFn3 = () => {
    const result1 = R.fromNullable(100, "Erreur dans result1");
    const result2 = R.fromNullable(200, "Erreur dans result2");

    // Aplatir les deux Result avec flatMap
    const combinedResult = R.flatMap(result1, (val1) =>
        R.map(result2, (val2) => val1 + val2)
    );

    // Gérer les échecs avec une valeur par défaut
    const recoveredResult = R.recover(combinedResult, 0); // Fournir une valeur par défaut directement

    // Appliquer une transformation finale
    const transformedResult = R.map(recoveredResult, (val) => `Résultat final : ${val}`);

    // Récupérer une valeur par défaut si tout échoue
    const finalValue = R.getWithDefault(transformedResult, "Valeur par défaut");

    console.log("Résultat combiné :", combinedResult);
    console.log("Résultat après récupération :", recoveredResult);
    console.log("Valeur finale :", finalValue);

    return finalValue;
};

