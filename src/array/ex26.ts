// // Exercice 1: Filtrer les produits selon une fonction de condition et calculer le prix totalObjectif : Tu dois passer une fonction de filtrage en argument et utiliser cette fonction pour ne conserver que certains produits. Ensuite, tu dois calculer la somme des prix des produits filtrés.Utilise Array.reduce (pour filtrer dynamiquement les produits en fonction de la fonction passée, et calculer la somme des prix).

type Product = {
    name: string;
    price: number;
    inStock: boolean;
};

export const ArrayFn26 = () => {
    const products: Product[] = [
        { name: 'Laptop', price: 1000, inStock: true },
        { name: 'Mouse', price: 25, inStock: false },
        { name: 'Keyboard', price: 75, inStock: true },
    ];

    const calculateTotalPrice = (products: Product[], filterFn: (product: Product) => boolean) => {
        return products.reduce((total, product) => {
            if (filterFn(product)) {
                return total + product.price;
            }
            return total;
        }, 0);
    };

    const filterInStock = (product: Product) => product.inStock;
    const totalInStockPrice = calculateTotalPrice(products, filterInStock);

    console.log("Prix total des produits en stock :", totalInStockPrice);

    return totalInStockPrice;
};
