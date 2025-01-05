// // Exercice 9: Aplatir des listes imbriquéesUtilise Array.flat (pour aplatir la liste imbriquée de profondeur 1).Utilise Array.deepFlat (pour aplatir la liste imbriquée de profondeur variable).typescriptCopy code

import { Product } from "./type";
import { A } from '@mobily/ts-belt';  // Importation des méthodes Array de ts-belt

export const ArrayFn9 = () => {
    const nestedProducts: Product[][] = [
        [
            { name: "Laptop", price: 1000, inStock: true },
            { name: "Mouse", price: 25, inStock: false },
        ],
        [
            { name: "Keyboard", price: 75, inStock: true },
            { name: "Monitor", price: 200, inStock: true },
        ],
    ];

    const flatProducts = A.flat(nestedProducts);

    const deepFlatProducts = (arr: any[]): any[] => {
        return arr.reduce((acc, val) =>
            Array.isArray(val) ? acc.concat(deepFlatProducts(val)) : acc.concat(val), []
        );
    };

    const fullyFlatProducts = deepFlatProducts(nestedProducts);

    console.log("Liste aplatie (profondeur 1) :", flatProducts);
    console.log("Liste complètement aplatie :", fullyFlatProducts);

    return {
        flatProducts,
        fullyFlatProducts
    };
};
