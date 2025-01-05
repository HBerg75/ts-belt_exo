import { O } from "@mobily/ts-belt";

export const optionFn5 = () => {
    const riskyFunction = () => {
        if (Math.random() > 0.5) {
            return 150;
        }
        throw new Error("Erreur");
    };

    // 1. Transformer une exécution risquée en option
    const option = O.fromExecution(riskyFunction);

    // 2. Filtrer les résultats pour ne conserver que les valeurs supérieures à 100
    const filteredOption = O.filter(option, (value) => value > 100);

    // 3. Extraire la valeur avec exception si l'option est vide
    try {
        const result = O.getExn(filteredOption);
        console.log("Résultat extrait :", result);
        return result;
    } catch (error) {
        // Gérer l'erreur spécifique de ts-belt
        if (error && typeof error === "object" && "RE_EXN_ID" in error) {
            console.error("Erreur ts-belt : Option vide ou non trouvée", error);
        } else if (error instanceof Error) {
            console.error("Erreur standard :", error.message);
        } else {
            console.error("Erreur inconnue :", error);
        }
        // Ne pas relancer l'exception pour éviter un crash
        return null; // Retourne une valeur par défaut
    }
};
