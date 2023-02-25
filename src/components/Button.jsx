import React from 'react';

// Fonction servant à renvoyer les différents btn en éléments HTML.
// L'objet de la fonction contient plusieurs propriétés.
// L'élément HTML renvoyé contient du texte inséré dans le btn.
// Lorsque le btn est clique un évenement se déclanche avec onClick.
const Button = ({ text, color, textColor, onClick}) => {
    return (
        <button className={`w-12 h-12 m-2 ${text === "=" ? 'bg-calc' : `bg-${color}`} ${text === '=' ? 'text-white' : ''} text-${textColor} rounded-xl shadow-xl border-2 border-white border-opacity-20 hover:text-calc hover:bg-gray-400 font-${textColor === 'white' ? 'black' : 'sans'}`} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;