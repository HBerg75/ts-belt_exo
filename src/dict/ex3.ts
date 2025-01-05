// // Exercice 3: Filtrer les propriétés numériques d'un objetFonctions à utiliser : filter, valuesObjectif : Filtrer l'objet obj pour ne garder que les propriétés dont la valeur est un nombre, puis récupérer les valeurs des propriétés restantes.

import { D } from "@mobily/ts-belt";

export const DictFn3 = () => {
    const obj = { name: "Laptop", price: 1000, stock: true, category: "Electronics" };

    // Filtrer les propriétés dont la valeur est un nombre
    const filteredObj = D.filter(obj, (value) => typeof value === "number") as Record<string, number>;

    // Récupérer les valeurs des propriétés restantes
    const numericValues = D.values(filteredObj);

    console.log("Objet filtré (propriétés numériques) :", filteredObj);
    console.log("Valeurs des propriétés numériques :", numericValues);

    return numericValues;
};
