// // Exercice 7: Filtrer les produits par condition et indexUtilise Array.filter (pour garder uniquement les produits en stock).Utilise Array.filterWithIndex (pour garder les produits à des indices pairs).Utilise Array.filterMap (pour appliquer une transformation sur les produits filtrés).

import { Product } from "./type";
import { A } from '@mobily/ts-belt';

export const ArrayFn7 = () => {
    const products: Product[] = [
        { name: 'Laptop', price: 1000, inStock: true },
        { name: 'Mouse', price: 25, inStock: false },
        { name: 'Keyboard', price: 75, inStock: true },
        { name: 'Monitor', price: 200, inStock: true },
        { name: 'Headphones', price: 50, inStock: false },
    ];

    const inStockProducts = A.filter(products, product => product.inStock);

    const evenIndexProducts = products.filter((product, index) => index % 2 === 0);

    const transformedProducts = A.filterMap(products, product => {
        return product.inStock ? { ...product, price: product.price * 2 } : null;
    }).filter(product => product !== null);

    console.log("Produits en stock :", inStockProducts);
    console.log("Produits à des indices pairs :", evenIndexProducts);
    console.log("Produits filtrés et transformés :", transformedProducts);

    return {
        inStockProducts,
        evenIndexProducts,
        transformedProducts
    };
};
