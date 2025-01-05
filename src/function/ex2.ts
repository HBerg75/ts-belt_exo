// // Exercice 2: Appliquer plusieurs prédicats et vérifier si tous sont satisfaitsFonctions à utiliser : allPass, tap, when, identityObjectif : Vérifie si un nombre est supérieur à 10 et pair. Si oui, affiche 'Validé', sinon retourne simplement la valeur d'origine avec identity.
import { F } from "@mobily/ts-belt";

export const functionFn2 = () => {
    const number = 12;
    const predicates = [
        (n: number) => n > 10, // Vérifie si le nombre est supérieur à 10
        (n: number) => n % 2 === 0, // Vérifie si le nombre est pair
    ];

    // Vérifie si tous les prédicats sont satisfaits
    const isValid = F.allPass(predicates);

    // Fonction qui affiche "Validé" si les conditions sont remplies
    const validateAndLog = F.when(
        isValid,
        F.tap(() => console.log("Validé"))
    );

    // Retourne simplement la valeur d'origine sinon
    const result = validateAndLog(F.identity(number));

    console.log("Résultat final :", result);
    return result;
};
