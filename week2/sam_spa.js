'use strict'

const gitHubUrl = 'https://api.github.com/orgs/HackYourFuture/repos';

let main = document.getElementById('main');
let button = document.createElement('button');
main.appendChild(button);
button.innerHTML = "Click Me!";

let paragraph = document.createElement('p');
main.appendChild(paragraph);

const responsesContainer = createAndAppend('div', main);
responsesContainer.setAttribute('id', 'responsesContainer');
const reposContainer = createAndAppend('div', responsesContainer);
const reposUl = createAndAppend('ul', reposContainer);
const contributorsContainer = createAndAppend('div', responsesContainer);
const contributorsUl = createAndAppend('ul', contributorsContainer);

button.addEventListener('click', () => {
    console.log('You clicked me!');
    fetchAPI(gitHubUrl, (error, data) => {
        data.forEach(element => {
            console.log(element.name);
            createAndAppend('li', reposUl, element.name);
            const rli = document.getElementsByTagName('li');
            // rli.setAttribute('href', 'https://api.github.com/repos/HackYourFuture/' + element.name);
            fetchAPI(element.contributors_url, (error, data) => {
                data.forEach(item => {
                    console.log(item.login);
                    createAndAppend('li', contributorsUl, item.login);
                });
            });
        });
        console.log('==================');
    });
});



function fetchAPI(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.send();
    xhr.onload = () => callback(null, xhr.response);
    xhr.onerror = () => callback(new Error(xhr.statusText));
}

function createAndAppend(name, parent, innerHTML) {
    const child = document.createElement(name);
    parent.appendChild(child);
    if (innerHTML !== undefined) {
        child.innerHTML = innerHTML;
    }
    return child;
}