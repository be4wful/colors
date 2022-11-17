let backs = [
    'background: url(./static/123.jpg)',
    'background: url(./static/1234.jpg)',
    'background: url(./static/1234567.jpg)'
]

function find(curr_back) {
    let choice = 0;
    for (iitem in backs) {
        if (backs[iitem] == curr_back.getAttribute('style')) {
            choice = Number(iitem)+1;
        }
    }

    if (choice >= backs.length) {
        choice = 0;
    }
    return choice;
}

function save(choice) {
    localStorage.setItem('backgorund_number', choice)
}

function load() {
    let curr_back = document.querySelector('body');
    let choice = localStorage.getItem('backgorund_number');

    setBack(curr_back, choice);
}

function setBack(back, choice) {
    back.setAttribute('style', backs[choice]);
}

function go(){
    let curr_back = document.querySelector('body');

    let choice = find(curr_back);
    save(choice);

    setBack(curr_back, choice);
}

let text_result = document.getElementById('non__find');
let block_result = document.getElementById('non');
console.log(text_result);
if (text_result == null) {
    block_result.style.display = 'none'
}

load()