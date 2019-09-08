let firstName = document.getElementById('firstName');
let secondName = document.querySelector('#firstName').value;

function getInput(){
    let input = document.querySelector('#firstName').value;
    let outPut = document.querySelector('#output');
    outPut.setAttribute('value', input);
}