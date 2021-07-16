//On recupere tous les elements qui ont une classe box
let boxs = document.querySelectorAll('.box');


let val = 0;

//tableau qui sert à stocker tous les elements de boxs
let tabs = [];

let tabsBin = [];

//declaration du tableau quui sert a stocker les valeurs binaires du nombre qui sera generé (juste pour faire des calculs)
for (let i = 0; i < 4; i++) {
    tabsBin.push(new Array(4).fill(0));
}

//declaration du tableau qui sert a stocker les differentes boxs
for (let i = 0; i < 4; i++) {
    tabs.push(new Array(4).fill(0));
}
//on met tous les elements du boxs dans un tableau pour mieux les manipuler
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        tabs[i][j] = document.querySelector(`#box-${i}-${j}`);
    }
}

//On ajoute une classes supplementaire aux boxs qui rend les resulats cad les derniers cases
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (i == 4 || j == 4) {
            document.querySelector(`#box-${i}-${j}`).classList.add('result');
            document.querySelector(`#box-${i}-${j}`).classList.add(`result-${i}-${j}`);
        }
    }
}

//On choisit au hasard les valuers resultats dans la 4em colonne
for (let i = 0; i < 4; i++) {
    let value = Math.floor(Math.random() * 16);
    console.log('valeur generé  : ', value)
    document.querySelector(`.result-${i}-4`).innerHTML = `<p>${value}</p>`;
}

//On convertit et affecte les valeurs en binaire de chaque valeur resultat dans un tableau appelé tabsBin
for (let i = 0; i < 4; i++) {
    let value = parseInt(document.querySelector(`.result-${i}-4`).innerText);
    for (let j = 0; j < 4; j++) {
        tabsBin[i][3 - j] = value % 2;
        value = Math.floor(value / 2);
        console.log('value', i, ': ', value)
    }
}

//calcul et remplissage des valeurs des cases resultats
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        val += tabsBin[j][i] * Math.pow(2, 3 - j);
    }
    document.querySelector(`.result-4-${i}`).innerHTML = `<p>${val}</p>`;
    val = 0;
}