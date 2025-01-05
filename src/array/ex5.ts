// // Exercice 5: Supprimer des produits selon des critèresUtilise Array.drop (pour retirer le premier produit de la liste).Utilise Array.dropExactly (pour retirer exactement deux produits depuis le début).Utilise Array.dropWhile (pour retirer les produits tant qu'ils sont en stock)

import { Product } from "./type";
import { A } from '@mobily/ts-belt';
export const ArrayFn5 = () => {
    const products: Product[] = [
        { name: 'Laptop', price: 1000, inStock: true },
        { name: 'Mouse', price: 25, inStock: false },
        { name: 'Keyboard', price: 75, inStock: true },
        { name: 'Monitor', price: 200, inStock: true },
    ];


    const afterDrop = A.drop(products, 1);


    const afterDropExactly = A.drop(products, 2);


    const afterDropWhile = A.dropWhile(products, product => product.inStock);


    console.log("Après avoir retiré le premier produit :", afterDrop);
    console.log("Après avoir retiré exactement deux produits :", afterDropExactly);
    console.log("Après avoir retiré les produits tant qu'ils sont en stock :", afterDropWhile);

    return {
        afterDrop,
        afterDropExactly,
        afterDropWhile
    };
};
