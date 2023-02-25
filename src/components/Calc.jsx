import React, { useState } from 'react';
import Row from './Row';

//tableau multidimentionnel pour afficher les différentes lignes de la calculatrice avec 4 objets dans chaques lignes. 
const buttonData = [
    ['%', 'CE', 'CA', '/'],
    ['7', '8', '9', '*'], 
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    [' ', '0', '.', '=']
];

// Fonction servant à renvoyer une section HTML pour créer la calculatrice.    
const Calc = () => {

    // La fonction useState est appelée deuc fois pour créer deuc états (operation et rsult). 
    // La valeur initiale de ces états est une chaine de caractères vide.
    // La fonction useState renvoie un tableau contenant le valeur actuelle de l'état et une fonction qui permet de modifier la valeur de l'état.
    const [operation, setOperation] = useState('');
    const [result, setResult] = useState('');

    // La fonction est définie pour gérer les événements de clic sur les btn.
    // Elle prend en argument button qui représente le texte du btn cliqué. 
    // Une fonction conditionnelle est utilisée pour déterminer l'action appropriée en fonction de la valeur cliquée.
    const handleButtonClick = (button) => { 
        // Si btn = 'CE' alors chaine de caractères d'"operation" et "result" sont réinitialisée.
        if (button === 'CE') {
            setOperation('');
            setResult('');
        } 
        // Si btn = 'CA' alors la dernière entrée dans "operation" est supprimée.
        else if (button === 'CA') {
            setOperation(operation.slice(0, -1));
        } 
        // Si btn = '=' alors l'expression mathématique stockée dans l'état operation est évaluée à l'aide de la fonction eval().
        // Si l'évaluation est réussie, le résultat est stocké dans l'état result, et l'état operation est réinitialisé à une chaîne de caractères vide.
        else if (button === '=') {
            try {
                setResult(eval(operation));
                setOperation(operation);
            } 
            //Si l'évaluation échoue (par exemple, en raison d'une erreur de syntaxe), le texte 'Error' est stocké dans l'état result, et l'état operation est également réinitialisé à une chaîne de caractères vide.
            catch (error) {
                setResult('Error');
                setOperation('');
            }
        }
        // Si btn = autre chose alors le texte du btn est ajouté à l'état 'operation'.
        else {
            setOperation(operation + button);
        }
    };
// Une section
    // Une div.
        // Une deuxième div.
            // Le premier p affiche le texte contenu dans 'operation'.
            // Le deuxième p affiche le texte contenu dans 'resut'. 
        // Plusieurs div qui affichent les btn générés avec la fonction .map.

// La fonction .map() itère sur l'array buttonData, qui contient des tableaux représentant chaque rangée de boutons de la calculatrice.
// Pour chaque tableau, la fonction <Row> est appelée avec; 
    // les propriétés row (le tableau de boutons)
    // firstRow (un booléen qui est vrai pour la première rangée de boutons)
    // onButtonClick (la fonction handleButtonClick définie précédemment).
// Chaque appel à la fonction <Row> renvoie un élément HTML <div> qui contient les boutons de la rangée actuelle.
    return (
        <section className='w-screen h-screen flex justify-center items-center bg-gray-200'>
            <div className='w-80 shadow-xl rounded-xl'>
                <div className="h-48 flex flex-col items-end pt-20 pb-10 bg-black rounded-t-xl">
                    <p className="pt-2 pr-5 pb-2 pl-4 text-calc">{operation}</p>
                    <p className="font-sans font-light text-5xl text-white pr-5">{result}</p>
                </div>
                {buttonData.map((row, index) => (
                    <Row key={index} row={row} firstRow={index === 0} onButtonClick={handleButtonClick}/>
                ))}
            </div>
        </section>
    );
};

export default Calc;