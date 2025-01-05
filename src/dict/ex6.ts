import { D, O } from "@mobily/ts-belt";

export const DictFn6 = () => {
    const obj = { name: "Laptop", price: 1000, stock: true };

    // Récupérer la valeur de la clé 'price' de manière sécurisée
    const price = D.get(obj, "price");

    // Tenter de récupérer la valeur de la clé 'stock' sans sécurité
    try {
        const stock = D.getUnsafe(obj, "stock");
        console.log("Valeur de 'stock' (non sécurisé) :", stock);
    } catch (error) {
        console.error("Erreur lors de l'accès à 'stock' :", error);
    }

    // Afficher la valeur sécurisée de 'price'
    console.log(
        "Valeur de 'price' (sécurisé) :",
        O.isSome(price) ? O.getExn(price) : "Clé introuvable"
    );

    return { price: O.getWithDefault(price, 0), stock: obj.stock };
};
