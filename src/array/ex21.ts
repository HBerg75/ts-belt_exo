// // Exercice 1: Créer un tableau de produits uniques par prix le plus basObjectif : Tu veux obtenir une liste de produits uniques en fonction de leur nom, en gardant uniquement le produit avec le prix le plus bas pour chaque nom.Utilise Array.reduce (pour accumuler les produits dans un tableau, en vérifiant si un produit avec le même nom existe déjà et en gardant celui avec le prix le plus bas).

import { Product } from "./type";

export const ArrayFn21 = () => {
    const products: Product[] = [
        { name: 'Laptop', price: 1000, inStock: true },
        { name: 'Laptop', price: 950, inStock: true },
        { name: 'Mouse', price: 25, inStock: false },
        { name: 'Keyboard', price: 75, inStock: true },
        { name: 'Mouse', price: 20, inStock: true },
    ];

    const uniqueProductsByPrice = products.reduce((acc: Product[], currentProduct) => {
        const existingProductIndex = acc.findIndex(p => p.name === currentProduct.name);

        if (existingProductIndex === -1) {
            acc.push(currentProduct);
        } else if (acc[existingProductIndex] && currentProduct.price < acc[existingProductIndex].price) {
            acc[existingProductIndex] = currentProduct;
        }
        return acc;
    }, []);

    console.log("Liste de produits uniques avec le prix le plus bas :", uniqueProductsByPrice);

    return uniqueProductsByPrice;
};
