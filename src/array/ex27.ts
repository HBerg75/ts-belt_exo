// // Exercice 2: Créer un tableau de produits répondant à plusieurs critères définis par des fonctionsObjectif : Tu dois recevoir une série de fonctions comme argument qui définissent des critères de sélection. Ensuite, tu dois filtrer et retourner une nouvelle liste de produits qui satisfont tous les critères.Utilise Array.reduce (pour vérifier que chaque produit satisfait à toutes les fonctions de condition passées en argument, et les ajouter à une nouvelle liste).

type Product = {
    name: string;
    price: number;
    inStock: boolean;
};

export const ArrayFn27 = () => {
    const products: Product[] = [
        { name: 'Laptop', price: 1000, inStock: true },
        { name: 'Mouse', price: 25, inStock: false },
        { name: 'Keyboard', price: 75, inStock: true },
    ];

    const filterProducts = (products: Product[], conditions: Array<(product: Product) => boolean>) => {
        return products.filter(product => {
            return conditions.reduce((acc, condition) => acc && condition(product), true);
        });
    };

    const conditions = [
        (product: Product) => product.price > 50,
        (product: Product) => product.inStock
    ];

    const filteredProducts = filterProducts(products, conditions);

    console.log("Produits filtrés :", filteredProducts);

    return filteredProducts;
};
