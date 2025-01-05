// // Exercice 5: Créer une structure imbriquée des produits groupés par disponibilité et nomObjectif : Tu veux organiser les produits dans une structure imbriquée où les produits sont d’abord regroupés par disponibilité (en stock ou non), puis par nom de produit, tout en accumulant la quantité de chaque produit dans chaque groupe.Utilise Array.reduce (pour créer une structure imbriquée qui regroupe d'abord les produits par disponibilité, puis par nom, en additionnant la quantité de chaque produit).

type Product = {
    name: string;
    price: number;
    inStock: boolean;
    quantity: number;
};

export const ArrayFn25 = () => {
    const products: Product[] = [
        { name: 'Laptop', price: 1000, inStock: true, quantity: 2 },
        { name: 'Laptop', price: 950, inStock: true, quantity: 1 },
        { name: 'Mouse', price: 25, inStock: false, quantity: 5 },
        { name: 'Keyboard', price: 75, inStock: true, quantity: 3 },
        { name: 'Mouse', price: 20, inStock: false, quantity: 2 },
    ];

    const groupedProducts = products.reduce((acc: { inStock: { [key: string]: Product }, outOfStock: { [key: string]: Product } }, product) => {
        const availabilityKey = product.inStock ? 'inStock' : 'outOfStock';

        if (!acc[availabilityKey][product.name]) {
            acc[availabilityKey][product.name] = { ...product };
        } else {
            acc[availabilityKey][product.name]!.quantity += product.quantity;
        }

        return acc;
    }, { inStock: {}, outOfStock: {} });

    console.log("Produits groupés par disponibilité et nom :", groupedProducts);

    return groupedProducts;
};
