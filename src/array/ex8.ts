// // Exercice 8: Trouver des produits selon des critèresUtilise Array.find (pour trouver le produit dont le nom est Keyboard).Utilise Array.getIndexBy (pour trouver l'indice du produit dont le prix est 1000).Utilise Array.get (pour récupérer le produit à l'indice 2)

import { Product } from "./type";
import { A } from '@mobily/ts-belt';

export const ArrayFn8 = () => {
    const products: Product[] = [
        { name: 'Laptop', price: 1000, inStock: true },
        { name: 'Mouse', price: 25, inStock: false },
        { name: 'Keyboard', price: 75, inStock: true },
    ];

    const foundProduct = A.find(products, product => product.name === 'Keyboard');

    const productIndex = A.getIndexBy(products, product => product.price === 1000);

    const productAtIndex2 = A.get(products, 2);

    console.log("Produit trouvé avec le nom 'Keyboard' :", foundProduct);
    console.log("Indice du produit avec le prix 1000 :", productIndex);
    console.log("Produit à l'indice 2 :", productAtIndex2);

    return {
        foundProduct,
        productIndex,
        productAtIndex2
    };
};
