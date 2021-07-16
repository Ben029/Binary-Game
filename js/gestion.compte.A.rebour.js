let timer = document.querySelector('#timer');

let finished = false;

let mn = 00, //mn minutes
    sec = 00, //sec seconds
    ms = 00; //ms milliseconds

let p = document.createElement('p');
p.classList.add('norm');

window.setInterval(function() {

    if (!finished) {
        ms += 1;
        if (ms == 60) {
            ms = 0;
            sec += 1;
        }
        if (sec == 60) {
            sec = 0;
            mn += 1;
        }

        p.innerHTML = `Votre temps : ${mn} : ${sec} : ${ms}`;
        timer.appendChild(p);
    }
}, 20);