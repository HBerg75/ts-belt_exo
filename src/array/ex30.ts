// // Exercice 5: Appliquer des réductions de prix en fonction de critères dynamiquesObjectif : Tu reçois une fonction qui définit le critère de réduction, ainsi qu'un pourcentage de réduction. Tu dois appliquer cette réduction aux produits qui répondent aux critères et calculer le total des prix après réduction.Utilise Array.reduce (pour vérifier si un produit satisfait aux critères de réduction, appliquer la réduction et accumuler le prix total).

type Product = {
    name: string;
    price: number;
    inStock: boolean;
};

export const ArrayFn30 = () => {
    const products: Product[] = [
        { name: 'Laptop', price: 1000, inStock: true },
        { name: 'Mouse', price: 25, inStock: false },
        { name: 'Keyboard', price: 75, inStock: true },
    ];

    const applyDiscount = (
        products: Product[],
        discountCriteria: (product: Product) => boolean,
        discountPercentage: number
    ) => {
        return products.reduce((total, product) => {
            let finalPrice = product.price;

            if (discountCriteria(product)) {
                finalPrice = product.price * (1 - discountPercentage / 100);
            }

            return total + finalPrice;
        }, 0);
    };

    const discountCriteria = (product: Product) => product.price > 100;
    const totalPriceAfterDiscount = applyDiscount(products, discountCriteria, 10);

    console.log("Total des prix après réduction :", totalPriceAfterDiscount);

    return totalPriceAfterDiscount;
};
