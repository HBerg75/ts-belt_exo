// // Exercice 3: Limiter le nombre d'appels d'une fonctionFonctions à utiliser : before, always, identityObjectif : Crée une fonction qui ne peut être appelée que deux fois, renvoyant toujours 'Fonction limitée' pendant ces deux appels, puis renvoie l'identité après cela.Données :

import { F } from "@mobily/ts-belt";

export const functionFn3 = () => {
    const limit = 2;

    // Crée une fonction qui renvoie toujours "Fonction limitée"
    const limitedFunction = F.before(
        limit,
        F.always("Fonction limitée")
    );

    // Fonction principale qui applique l'identité après la limite
    const mainFunction = (input: string | number) => {
        const result = limitedFunction() || F.identity(input);
        console.log("Résultat :", result);
        return result;
    };

    // Test de la fonction
    mainFunction("Appel 1");
    mainFunction("Appel 2");
    mainFunction("Appel 3");
    mainFunction("Appel 4");
};
