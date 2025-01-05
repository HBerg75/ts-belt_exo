// // Exercice 1: Supprimer une clé d'un objetFonctions à utiliser : deleteKey, getObjectif : Supprimer la clé 'price' de l'objet obj et vérifier que la valeur associée n'est plus accessible.

import { D } from "@mobily/ts-belt";

export const DictFn1 = () => {
    const objf = { name: "Laptop", price: 1000, stock: true };

    // Supprimer la clé 'price' de l'objet
    const updatedObj = D.deleteKey(objf, "price");

    // Vérifier que la clé 'price' n'est plus accessible
    const hasPrice = D.get(updatedObj as Record<string, unknown>, "price");

    console.log("Objet mis à jour :", updatedObj);
    console.log("Valeur associée à 'price' :", hasPrice ?? "Clé supprimée");

    return updatedObj;
};
