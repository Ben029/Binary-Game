let board = document.querySelector('#board');
// let goal = document.querySelector('#goal');

let boardHtml = '';
// let goalHtml = '';

boardHtml += `<div class="big-container">`;

for (let i = 0; i < 5; i++) {
    boardHtml += `<div class="row">`;
    for (let j = 0; j < 5; j++) {
        boardHtml += `<div class="box" id="box-${i}-${j}"></div>`;
    }
    boardHtml += `</div>`;
}


for (let i = 0; i < 4; i++) {
    boardHtml += `<div class="ligne-horizontal" id="ligne-horizontal-${i}"></div>`;
}

for (let i = 0; i < 4; i++) {
    boardHtml += `<div class="ligne-vertical" id="ligne-vertical-${i}"></div>`;
}

boardHtml += `</div>`;
board.innerHTML = boardHtml;


for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        // document.querySelector(`.box-${i}-${j}`).innerText = 0;
        let p = document.createElement('p');
        p.innerText = 0;
        document.querySelector(`#box-${i}-${j}`).appendChild(p);
    }
}

// goal.innerHTML = goalHtml;