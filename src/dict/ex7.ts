// // Exercice 7: Vérifier si un objet est vide après suppression de ses clésFonctions à utiliser : deleteKeys, isEmptyObjectif : Supprimer toutes les clés de l'objet obj et vérifier si l'objet résultant est vide.

import { D } from "@mobily/ts-belt";

export const DictFn7 = () => {
    const obj = { name: "Laptop", price: 1000, stock: true };

    // Récupérer toutes les clés de l'objet
    const allKeys = D.keys(obj);

    // Supprimer toutes les clés de l'objet
    const updatedObj = D.deleteKeys(obj, allKeys);

    // Vérifier si l'objet est vide
    const isEmpty = D.isEmpty(updatedObj);

    console.log("Objet après suppression des clés :", updatedObj);
    console.log("L'objet est-il vide ? :", isEmpty);

    return isEmpty;
};
