// // Exercice 1: Vérifier et filtrer une option, puis obtenir une valeur par défautFonctions à utiliser : fromNullable, filter, getWithDefaultObjectif : Créer une option à partir de 'Laptop', filtrer les options contenant la lettre 'L', puis obtenir la valeur par défaut 'No Item' si l'option est vide.

// const item = 'Laptop';
import { O } from '@mobily/ts-belt';

export const optionFn1 = () => {
    const item = 'Laptop';

    const option = O.fromNullable(item);

    const filteredOption = O.filter(option, (str) => str.includes('L'));
    const result = O.getWithDefault(filteredOption, 'No Item');
    console.log(result);
    return result;
}
