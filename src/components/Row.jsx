import React from 'react';
import Button from './Button';

// Fonction servant à renvoyer une div HTML contenant 4 btn généré plus haut.
// L'objet de la fonction contient plusieurs propriétés.
// La méthode .map permet de générer une série de btn en utilisant l'array row.
// La méthode .map parcourt chaque élément de l'array row, et renvoie un nouvel array contenant un élément <Button> pour chaque élément de l'array row. 
// La propriété key permet une identification unique de chaque btn 
// La propriété onClick est définie en utilisant une fonction fléchée qui prend l'élément button comme argument, et qui appelle la fonction onButtonClick avec cet argument lorsqu'elle est déclenchée.

const Row = ({ row, firstRow, onButtonClick}) => {
    return (
        <div className={`flex flex-row flex-wrap justify-evenly  bg-gray-200 rounded-b-xl last:pb-6 ${firstRow ? 'pt-6' : ''}`}>
            {row.map((button, index) => (
                <Button key={index} text={button} color={'gray-200'} textColor={'black'} onClick={() => onButtonClick(button)}/>
            ))}
        </div>
    );
};

export default Row;