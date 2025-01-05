// // Exercice 7: Transformer une option falsy en valeur par défaut et l'utiliser avec un tupleFonctions à utiliser : fromFalsy, getWithDefault, zipObjectif : Créer une option à partir d'une valeur falsy, récupérer la valeur par défaut 'Inconnu', puis l'associer à une autre option pour former un tuple.

import { O } from "@mobily/ts-belt";

export const optionFn7 = () => {
    const value: string = ''; // Typage explicite
    const option2 = O.fromNullable('Validé');

    // 1. Créer une option à partir d'une valeur falsy
    const option1: O.Option<string> = O.fromFalsy(value);

    // 2. Récupérer une valeur par défaut pour l'option falsy
    const option1WithDefault = O.getWithDefault(option1, 'Inconnu');

    // 3. Associer option1 avec une autre option (option2) pour former un tuple
    const zippedOption = O.zip(O.fromNullable(option1WithDefault), option2);

    console.log("Option 1 avec valeur par défaut :", option1WithDefault);
    console.log("Option combinée (tuple) :", zippedOption);

    return zippedOption;
};
