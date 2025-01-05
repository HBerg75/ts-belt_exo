// // Exercice 4: Générer un rapport en regroupant les produits selon des critères définis par l'utilisateurObjectif : Tu dois recevoir une fonction qui définit comment regrouper les produits (par exemple, par nom, prix, ou catégorie). Le rapport doit inclure les produits regroupés avec une somme des quantités par groupe.Utilise Array.reduce (pour grouper les produits en fonction de la fonction passée en argument et calculer la quantité totale pour chaque groupe).

type Product = {
    name: string;
    price: number;
    category: string;
    quantity: number;
};

export const ArrayFn29 = () => {
    const products: Product[] = [
        { name: 'Laptop', price: 1000, category: 'Electronics', quantity: 2 },
        { name: 'Mouse', price: 25, category: 'Accessories', quantity: 5 },
        { name: 'Monitor', price: 200, category: 'Electronics', quantity: 1 },
    ];

    const generateReport = <T>(products: Product[], groupByFn: (product: Product) => T) => {
        return products.reduce((acc: { [key: string]: { totalQuantity: number, products: Product[] } }, product) => {
            const groupKey = groupByFn(product) as unknown as string;

            if (!acc[groupKey]) {
                acc[groupKey] = { totalQuantity: 0, products: [] };
            }

            acc[groupKey].products.push(product);
            acc[groupKey].totalQuantity += product.quantity;

            return acc;
        }, {});
    };

    const groupByCategory = (product: Product) => product.category;
    const report = generateReport(products, groupByCategory);

    console.log("Rapport regroupé par catégorie :", JSON.stringify(report, null, 2));

    return report;
};
