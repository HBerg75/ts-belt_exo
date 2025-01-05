// // Exercice 2: Supprimer plusieurs clés et vérifier leur absenceFonctions à utiliser : deleteKeys, keysObjectif : Supprimer les clés 'price' et 'stock' de l'objet obj, puis vérifier que ces clés ne sont plus présentes dans l'objet.

import { D } from "@mobily/ts-belt";

export const DictFn2 = () => {
    const obj = { name: "Laptop", price: 1000, stock: true, brand: "Dell" };

    // Supprimer les clés 'price' et 'stock'
    const updatedObj = D.deleteKeys(obj, ["price", "stock"]);

    // Vérifier que les clés supprimées ne sont plus présentes
    const remainingKeys = D.keys(updatedObj) as string[]; // Cast explicite pour utiliser includes()
    const keysRemoved = !remainingKeys.includes("price") && !remainingKeys.includes("stock");

    console.log("Objet mis à jour :", updatedObj);
    console.log("Les clés 'price' et 'stock' ont été supprimées :", keysRemoved);

    return updatedObj;
};

