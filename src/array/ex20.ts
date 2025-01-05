// // Exercice 20: Créer une liste répétitive et la transformerUtilise Array.repeat (pour créer une liste en répétant un produit 5 fois).Utilise Array.map (pour appliquer une transformation à chaque produit répété).

import { Product } from "./type";

const repeatProduct = (product: Product, count: number): Product[] => {
    return Array.from({ length: count }, () => ({ ...product }));
};

export const ArrayFn20 = () => {
    const product: Product = { name: 'Mouse', price: 25, inStock: true };

    const repeatedProducts = repeatProduct(product, 5);

    const transformedProducts = repeatedProducts.map(p => ({
        ...p,
        price: p.price * 1.1,
        name: `${p.name} (repeated)`
    }));

    // Afficher les résultats
    console.log("Produits répétés :", repeatedProducts);
    console.log("Produits transformés :", transformedProducts);

    return {
        repeatedProducts,
        transformedProducts
    };
};

