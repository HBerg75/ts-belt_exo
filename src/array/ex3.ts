// // Exercice 3: Fusionner et copier des listesUtilise Array.concat (pour combiner deux listes de produits).Utilise Array.concatMany (pour ajouter plusieurs listes de produits).Utilise Array.copy (pour créer une copie de la liste combinée).

import { Product } from "./type";
import { A } from '@mobily/ts-belt';

export const ArrayFn3 = () => {
    const products: Product[] = [
        { name: "Laptop", price: 1000, inStock: true },
        { name: "Mouse", price: 25, inStock: false },
    ];

    const accessories: Product[] = [
        { name: "Keyboard", price: 75, inStock: true },
        { name: "Monitor", price: 200, inStock: true },
    ];

    const combinedList = A.concat(products, accessories);

    const moreAccessories: Product[] = [
        { name: "Headphones", price: 50, inStock: true },
        { name: "Webcam", price: 100, inStock: true },
    ];
    const combinedWithMore = A.concatMany([combinedList, moreAccessories]);

    const copiedList = A.copy(combinedWithMore);

    console.log("Liste fusionnée :", combinedWithMore);
    console.log("Copie de la liste :", copiedList);

    return {
        combinedList: combinedWithMore,
        copiedList
    };
};

