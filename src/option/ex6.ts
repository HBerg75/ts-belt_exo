import { O } from "@mobily/ts-belt";

export const optionFn6 = async () => {
    const fetchData = async () => {
        if (Math.random() > 0.5) {
            return "Données";
        }
        throw new Error("Erreur");
    };

    try {
        // Appelle `fetchData` pour obtenir une promesse avant de l'utiliser
        const option = await O.fromPromise(fetchData());

        // Vérifie si l'option est vide
        if (O.isSome(option)) {
            // Applique une transformation si l'option contient une valeur
            const transformedOption = O.map(option, (data) => `${data} reçu`);
            const result = O.getExn(transformedOption); // Extraire la valeur
            console.log("Résultat extrait :", result);
            return result;
        } else {
            console.error("Option vide après l'exécution de fetchData");
            return null; // Retourner une valeur par défaut
        }
    } catch (error) {
        console.error("Erreur lors de l'extraction :", error);
        return null;
    }
};
