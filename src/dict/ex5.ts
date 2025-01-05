// // Exercice 5: Créer un objet à partir d'un tableau de pairesFonctions à utiliser : fromPairs, toPairsObjectif : Transformer un tableau de paires [clé, valeur] en un objet, puis vérifier en retournant le tableau des paires.

import { D } from "@mobily/ts-belt";

export const DictFn5 = () => {
    const pairs: [string, unknown][] = [
        ["name", "Laptop"],
        ["price", 1000],
        ["stock", true],
    ];

    // Transformer un tableau de paires en un objet
    const obj = D.fromPairs(pairs);

    // Reconvertir l'objet en tableau de paires
    const reconstructedPairs = D.toPairs(obj);

    console.log("Objet créé à partir des paires :", obj);
    console.log("Tableau des paires reconstruit :", reconstructedPairs);

    return { obj, reconstructedPairs };
};
