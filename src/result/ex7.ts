// // Exercice 7: Manipuler un Result d'une promesse et récupérer la valeur avec une exceptionFonctions à utiliser : fromPromise, map, getExnObjectif : Transformer une promesse en Result, appliquer une transformation, puis récupérer la valeur avec exception si le Result échoue.

import { R } from "@mobily/ts-belt";

export const resultFn7 = async () => {
    const fetchData = async () => {
        if (Math.random() > 0.5) {
            return "Données";
        }
        throw new Error("Erreur");
    };

    try {
        // Transformer la promesse en Result
        const result = await R.fromPromise(fetchData());

        // Appliquer une transformation
        const transformedResult = R.map(result, (data) => `${data} transformées`);

        // Récupérer une valeur de manière sécurisée
        const value = R.getWithDefault(transformedResult, "Valeur par défaut");

        console.log("Résultat transformé :", transformedResult);
        console.log("Valeur finale :", value);

        return value;
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        return "Erreur récupérée"; // Retourner une valeur par défaut explicite
    }
};

