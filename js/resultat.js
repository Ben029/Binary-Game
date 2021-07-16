function checkResult(a, b) { // a(ligne) et b(colonne) sont les positions de l' element clické
    let result = 0; // sert a stcker le resultat du calcul
    let i; // sert de compteur

    //Calcul le resultat le long de la ligne
    for (i = 0; i < 4; i++) {
        result += parseInt(tabs[a][i].innerText) * Math.pow(2, (3 - i));
    }
    //affecte la valeur du resultat dans la case correspondante
    // if (document.querySelector(`.result-${a}-${4}`)) {
    //     document.querySelector(`.result-${a}-${4}`).innerHTML = `<p>${result}</p>`;
    // }

    //test si la valeur de notre resultat est egal à la valeur demandée
    if (result == parseInt(document.querySelector(`.result-${a}-${4}`).innerText)) {
        document.querySelector(`.result-${a}-${4}`).classList.add('checked');
        document.querySelector(`#ligne-horizontal-${a}`).classList.add('checked');
    } else {
        document.querySelector(`.result-${a}-${4}`).classList.remove('checked');
        document.querySelector(`#ligne-horizontal-${a}`).classList.remove('checked');
    }

    //On remet la valeur du variable resultat pour le nouveau calcul
    result = 0;

    //Calcul le resultat le long de la colonne
    for (i = 0; i < 4; i++) {
        result += parseInt(tabs[i][b].innerText) * Math.pow(2, (3 - i));
    }
    //affecte la valeur du resultat dans la case correspondante
    // if (document.querySelector(`.result-${4}-${b}`)) {
    //     document.querySelector(`.result-${4}-${b}`).innerHTML = `<p>${result}</p>`;
    // }

    //test si la valeur de notre resultat est egal à la valeur demandée
    if (result == parseInt(document.querySelector(`.result-${4}-${b}`).innerText)) {
        document.querySelector(`.result-${4}-${b}`).classList.add('checked');
        document.querySelector(`#ligne-vertical-${b}`).classList.add('checked');
    } else {
        document.querySelector(`.result-${4}-${b}`).classList.remove('checked');
        document.querySelector(`#ligne-vertical-${b}`).classList.remove('checked');
    }


}