// // Exercice 4: Filtrer les propriétés dont le nom commence par une lettre spécifiqueFonctions à utiliser : filterWithKey, keysObjectif : Filtrer l'objet obj pour ne conserver que les propriétés dont le nom commence par 'p', puis récupérer les clés restantes.

import { D } from "@mobily/ts-belt";

export const DictFn4 = () => {
    const obj = { price: 1000, stock: true, brand: "Dell", processor: "Intel" };

    // Filtrer les propriétés dont le nom commence par 'p'
    const filteredObj = D.filterWithKey(obj, (key, _value) => key.startsWith("p"));

    // Récupérer les clés restantes
    const remainingKeys = D.keys(filteredObj);

    console.log("Objet filtré :", filteredObj);
    console.log("Clés restantes :", remainingKeys);

    return remainingKeys;
};
