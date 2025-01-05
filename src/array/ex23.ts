// // Exercice 3: Générer un rapport des produits groupés par disponibilité et triés par prixObjectif : Tu veux créer un rapport des produits séparés en deux groupes : en stock et hors stock. Dans chaque groupe, les produits doivent être triés par prix croissant.Utilise Array.reduce (pour grouper les produits en fonction de leur disponibilité, puis appliquer un tri interne sur chaque groupe).

import { Product } from "./type";

export const ArrayFn23 = () => {
    const products: Product[] = [
        { name: 'Laptop', price: 1000, inStock: true },
        { name: 'Mouse', price: 25, inStock: false },
        { name: 'Keyboard', price: 75, inStock: true },
        { name: 'Monitor', price: 200, inStock: false },
    ];

    const groupedProducts = products.reduce((acc: { inStock: Product[], outOfStock: Product[] }, product) => {
        if (product.inStock) {
            acc.inStock.push(product);
        } else {
            acc.outOfStock.push(product);
        }
        return acc;
    }, { inStock: [], outOfStock: [] });

    groupedProducts.inStock.sort((a, b) => a.price - b.price);
    groupedProducts.outOfStock.sort((a, b) => a.price - b.price);

    const report = {
        inStock: groupedProducts.inStock,
        outOfStock: groupedProducts.outOfStock
    };

    console.log("Rapport des produits en stock :", report.inStock);
    console.log("Rapport des produits hors stock :", report.outOfStock);

    return report;
};
