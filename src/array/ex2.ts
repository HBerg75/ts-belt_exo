import { Product } from "./type";
import { A } from '@mobily/ts-belt';  // Importation des méthodes Array de ts-belt

export const ArrayFn2 = () => {
    const products: Product[] = [
        { name: 'Laptop', price: 1000, inStock: true },
        { name: 'Mouse', price: 25, inStock: false },
        { name: 'Headphones', price: 50, inStock: true },
    ];

    const newProductsPrepend = A.prepend(products, { name: 'Monitor', price: 300, inStock: true });

    const newProductsAppend = A.append(newProductsPrepend, { name: 'Keyboard', price: 75, inStock: true });

    const productAtIndex2 = A.at(newProductsAppend, 2);

    console.log("Liste après ajout au début et à la fin :", newProductsAppend);
    console.log("Produit à l'index 2 :", productAtIndex2);

    return {
        newProducts: newProductsAppend,
        productAtIndex2
    };
};
