"use strict";
let userImputs = [];
const numberOfQuestions = 6;
const questionArray = ["Ingrese un nombre para el protagonista" , "Ingrese un país" , "Ingrese un sustantivo (ejm. 'animal')" , "Ingrese un verbo (ejm. 'golpear'" , "Ingrese un nombre para el antagonista" , "Ingrese un sustantivo (ejm. 'felino')"];
let questionCounter = 0;
for (let i = questionArray.length ; i > 0 ; i--){
userImputs.push(prompt(questionArray[questionCounter] + ` ; ${i - 1} preguntas restantes`));
questionCounter++;
}
let originalstory = `Había una vez un enorme ${userImputs [0]} que cazaba en los bosques de ${userImputs [1]}. El poderoso ${userImputs [2]} se topó y empezó a ${userImputs [3]} a un pequeño ${userImputs [4]}, el cual ante el peligro únicamente tuvo como opción recurrir a la astucia. Así, el ${userImputs [4]} le increpó y le indicó que no sabía hacerle daño puesto que él era el rey de los animales por designio del emperador del cielo.

Asimismo le indicó que si no le creía le acompañara: así vería como todos los animales huían atemorizados al verle llegar. El ${userImputs [0]} así lo hizo, observando en efecto como a su paso los animales escapaban. Lo que no sabía era que esto no era debido a que estuvieran confirmando las palabras del ${userImputs [4]} (algo que el ${userImputs [0]} acabó por creer), sino que de hecho huían de la presencia del ${userImputs [5]}.`;
console.log(userImputs);
console.log(originalstory);
/* Había una vez un enorme tigre que cazaba en los bosques de China. El poderoso animal se topó y empezó a atacar a un pequeño zorro, el cual ante el peligro únicamente tuvo como opción recurrir a la astucia. Así, el zorro le increpó y le indicó que no sabía hacerle daño puesto que él era el rey de los animales por designio del emperador del cielo.

Asimismo le indicó que si no le creía le acompañara: así vería como todos los animales huían atemorizados al verle llegar. El tigre así lo hizo, observando en efecto como a su paso los animales escapaban. Lo que no sabía era que esto no era debido a que estuvieran confirmando las palabras del zorro (algo que el tigre acabó por creer), sino que de hecho huían de la presencia del felino.*/