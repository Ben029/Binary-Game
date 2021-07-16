//on cache le coins 4-4 car c' est pas utile 
let bx = document.querySelector('.result-4-4');
if (bx.classList) {
    bx.classList.add('none')
}

//On verifie si un ou plusieurs cases resultats ont un resultat 0, si oui on le checked tout de suite
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (i == 4 || j == 4) {
            // console.log(parseInt(document.querySelector(`.result-${i}-${j}`).innerText));
            if (parseInt(document.querySelector(`.result-${i}-${j}`).innerText) === 0) {
                document.querySelector(`.result-${i}-${j}`).classList.add('checked');
                if (document.querySelector(`#ligne-vertical-${j}`) && i == 4) {
                    document.querySelector(`#ligne-vertical-${j}`).classList.add('checked');
                }
                if (document.querySelector(`#ligne-horizontal-${i}`) && j == 4) {
                    document.querySelector(`#ligne-horizontal-${i}`).classList.add('checked');
                }
            }
        }
    }
}

for (let tab of tabs) {
    for (let element of tab) {
        element.onclick = (event) => {
            let a = parseInt(element.id.split('-')[1]);
            let b = parseInt(element.id.split('-')[2]);
            let compt = 0;

            let value = parseInt(element.innerText);
            if (value == 0) {
                element.innerHTML = `<p>1</p>`;
                element.classList.add('checked');
            } else {
                element.innerHTML = `<p>0</p>`;
                element.classList.remove('checked');
            }


            //On fait appel à la fonction checkResult pour verifier si le resultat est correct
            checkResult(a, b);

            //tableau sert à stocker les boxs resultats pour pouvoir tester si on a deja trouvé tous les resultats
            let tableau = [];

            //On affecte dans tableau tous les elements result
            for (let i = 0; i < 4; i++) {
                tableau.push(document.querySelector(`.result-${i}-4`))
                tableau.push(document.querySelector(`.result-4-${i}`));
            }

            //On compte si le nombre de tous les cases checkés sont egal à 8
            for (let element of tableau) {
                if (element.classList && element.classList.contains('checked')) {
                    compt++;
                }
            }

            //si compt est egal à 8, cad on a gagné
            if (compt === 8) {
                alert(`Ok c' est bon, vous avez gagné, votre temps est de ${mn} : ${sec} : ${ms}`);
                compt = 0;
                finished = true;
            } else { //sinon on remet le compteur à zero
                console.log('compteur = ', compt)
                compt = 0;
            }
        }
    }
}