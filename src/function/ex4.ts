// // Exercice 4: Appliquer une action seulement si une condition est vraieFonctions à utiliser : ifElse, identity, tapObjectif : Si un nombre est pair, multiplie-le par 2 et affiche 'Nombre pair'. Sinon, retourne 'Non pair' et l'identité.Données :

import { F } from "@mobily/ts-belt";

export const functionFn4 = () => {
    const number = 7;

    // Définir une fonction pour vérifier si un nombre est pair
    const isEven = (n: number) => n % 2 === 0;

    // Appliquer une action si le nombre est pair, sinon retourner l'identité
    const processNumber = F.ifElse(
        isEven,
        F.tap((n) => console.log("Nombre pair:", n * 2)), // Si pair, affiche et multiplie par 2
        F.tap(() => console.log("Non pair")) // Sinon, affiche "Non pair"
    );

    // Applique la fonction au nombre
    const result = processNumber(number);

    console.log("Résultat final :", result);
    return result;
};
