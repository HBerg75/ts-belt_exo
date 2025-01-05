// // Exercice 4: Créer un tableau d’objets résumant la quantité totale et le prix moyen par catégorieObjectif : Chaque produit appartient à une catégorie, tu veux calculer la quantité totale et le prix moyen pour chaque catégorie.Utilise Array.reduce (pour accumuler les produits par catégorie, calculer la somme des prix et des quantités, puis retourner le prix moyen et la quantité totale pour chaque catégorie).

type Product = {
    name: string;
    price: number;
    category: string;
    quantity: number;
};

export const ArrayFn24 = () => {
    const products: Product[] = [
        { name: 'Laptop', price: 1000, category: 'Electronics', quantity: 2 },
        { name: 'Mouse', price: 25, category: 'Accessories', quantity: 5 },
        { name: 'Monitor', price: 200, category: 'Electronics', quantity: 1 },
        { name: 'Keyboard', price: 75, category: 'Accessories', quantity: 3 },
    ];

    const summaryByCategory = products.reduce((acc: { [key: string]: { totalQuantity: number, totalPrice: number } }, product) => {
        if (!acc[product.category]) {
            acc[product.category] = { totalQuantity: 0, totalPrice: 0 };
        }
        const categoryData = acc[product.category]!;
        categoryData.totalQuantity += product.quantity;
        categoryData.totalPrice += product.price * product.quantity;

        return acc;
    }, {});

    const result = Object.keys(summaryByCategory).map(category => {
        const { totalQuantity, totalPrice } = summaryByCategory[category]!;
        const averagePrice = totalPrice / totalQuantity;
        return {
            category,
            totalQuantity,
            averagePrice
        };
    });

    console.log("Résumé par catégorie :", result);

    return result;
};
