// // Exercice 4: Comparer deux inventairesUtilise Array.difference (pour obtenir les produits qui sont dans inventory1 mais pas dans inventory2).Utilise Array.intersection (pour obtenir les produits présents dans les deux inventaires).Utilise Array.union (pour obtenir tous les produits des deux inventaires sans doublons)

import { Product } from "./type";

const productExists = (list: Product[], product: Product): boolean => {
    return list.some(item => item.name === product.name);
};

export const ArrayFn4 = () => {
    const inventory1: Product[] = [
        { name: 'Laptop', price: 1000, inStock: true },
        { name: 'Mouse', price: 25, inStock: false },
        { name: 'Keyboard', price: 75, inStock: true },
    ];

    const inventory2: Product[] = [
        { name: 'Keyboard', price: 75, inStock: true },
        { name: 'Monitor', price: 200, inStock: false },
    ];


    const difference = inventory1.filter(product => !productExists(inventory2, product));

    const intersection = inventory1.filter(product => productExists(inventory2, product));

    const union = [...inventory1, ...inventory2.filter(product => !productExists(inventory1, product))];

    console.log("Produits dans inventory1 mais pas dans inventory2 :", difference);
    console.log("Produits dans les deux inventaires :", intersection);
    console.log("Tous les produits sans doublons :", union);

    return {
        difference,
        intersection,
        union
    };
};

