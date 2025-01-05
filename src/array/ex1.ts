// // Exercice 1: Vérifier si tous les produits sont en stock et leur nombreUtilise Array.all (pour vérifier si tous les produits sont en stock).Utilise Array.any (pour vérifier si au moins un produit n’est pas en stock).Utilise Array.length (pour obtenir le nombre total de produits).

import { Product } from "./type";

const products: Product[] = [
    { name: "Laptop", price: 1000, inStock: true },
    { name: "Mouse", price: 25, inStock: false },
    { name: "Keyboard", price: 75, inStock: true },
];

export const ArrayFn1 = () => {
    const allInStock = products.every(product => product.inStock);

    const anyOutOfStock = products.some(product => !product.inStock);

    const totalProducts = products.length;

    console.log("Tous les produits sont en stock :", allInStock);
    console.log("Au moins un produit n'est pas en stock :", anyOutOfStock);
    console.log("Nombre total de produits :", totalProducts);
};

