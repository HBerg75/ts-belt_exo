// // Exercice 6: Comparer des listes et tester l'inclusionUtilise Array.eq (pour comparer deux listes de produits).Utilise Array.includes (pour vérifier si un produit spécifique est inclus dans la liste)

import { Product } from "./type";

const areProductsEqual = (product1: Product, product2: Product): boolean => {
    return product1.name === product2.name &&
        product1.price === product2.price &&
        product1.inStock === product2.inStock;
};

export const ArrayFn6 = () => {
    const products1: Product[] = [
        { name: 'Laptop', price: 1000, inStock: true },
        { name: 'Mouse', price: 25, inStock: false },
    ];

    const products2: Product[] = [
        { name: 'Laptop', price: 1000, inStock: true },
        { name: 'Keyboard', price: 75, inStock: true },
    ];

    const specificProduct: Product = { name: 'Mouse', price: 25, inStock: false };

    const areEqual = products1.length === products2.length &&
        products1.every((product, index) => {
            const productInSecondList = products2[index];
            return productInSecondList !== undefined && areProductsEqual(product, productInSecondList);
        });

    const isProductIncluded = products1.some(product => areProductsEqual(product, specificProduct));

    console.log("Les listes de produits sont-elles égales :", areEqual);
    console.log("Le produit est-il inclus dans la liste :", isProductIncluded);

    return {
        areEqual,
        isProductIncluded
    };
};

