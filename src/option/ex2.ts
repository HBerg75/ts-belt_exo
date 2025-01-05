// // Exercice 2: Transformer une option à partir d'un prédicat, puis extraire une valeurFonctions à utiliser : fromPredicate, map, getWithDefaultObjectif : Créer une option à partir d'un prédicat (valeur > 50), transformer cette option en multipliant la valeur par 2, puis obtenir une valeur par défaut de 0 si l'option est vide.

import { O } from '@mobily/ts-belt';

export const optionFn2 = () => {
    
    const value: number = 75;

    const option = O.fromPredicate(value, (x: number) => x > 50);

    const mappedOption = O.map(option, (x: number) => x * 2);

    const result = O.getWithDefault(mappedOption, 0);

    console.log('result =>', result);

    return result;
};
