// // Exercice 1: Exécuter une fonction après plusieurs appelsFonctions à utiliser : after, always, identityObjectif : Crée une fonction qui retourne toujours 'Appel réussi' après avoir été appelée 3 fois, puis renvoie la valeur d'origine avec identity.

import { F } from "@mobily/ts-belt";

export const functionFn1 = () => {
    const calls = 3;

    // Crée une fonction qui retourne toujours "Appel réussi" après 3 appels
    const executeAfterCalls = F.after(calls, () => "Appel réussi");

    // Fonction qui retourne la valeur d'origine avec `identity`
    const identityFn = F.identity;

    // Exemple d'utilisation
    for (let i = 1; i <= 5; i++) {
        const result = i > calls ? executeAfterCalls() : identityFn(i);
        console.log(`Appel ${i} :`, result);
    }
};
