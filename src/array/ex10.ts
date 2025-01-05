// // Exercice 10: Insérer des produits à des positions spécifiquesUtilise Array.insertAt (pour insérer un produit à l'indice 1).Utilise Array.prependToAll (pour ajouter un produit à chaque élément d'une liste).Utilise Array.append (pour ajouter un produit à la fin de la liste)

import { Product } from "./type";
import { A } from '@mobily/ts-belt';

export const ArrayFn10 = () => {
    const products: Product[] = [
        { name: 'Laptop', price: 1000, inStock: true },
        { name: 'Mouse', price: 25, inStock: false },
        { name: 'Keyboard', price: 75, inStock: true },
    ];

    const newProduct: Product = { name: 'Monitor', price: 200, inStock: true };

    const productsWithInserted = A.insertAt(products, 1, newProduct);

    const productsWithPrepended = A.map(products, product => ({
        ...product,
        name: `New ${product.name}`
    }));

    const productsWithAppended = A.append(products, newProduct);

    // Afficher les résultats
    console.log("Produit inséré à l'indice 1 :", productsWithInserted);
    console.log("Produit ajouté au début de chaque élément :", productsWithPrepended);
    console.log("Produit ajouté à la fin de la liste :", productsWithAppended);

    return {
        productsWithInserted,
        productsWithPrepended,
        productsWithAppended
    };
};

