'use strict'

const gitHubUrl = 'https://api.github.com/orgs/HackYourFuture/repos';

let main = document.getElementById('main');
let button = document.createElement('button');
main.appendChild(button);
button.innerHTML = "Click Me!";

let paragraph = document.createElement('p');
main.appendChild(paragraph);


button.addEventListener('click', () => {
    console.log('You clicked me!');
    fetchAPIs(gitHubUrl, (error, data) => {
        if (error) {
            console.log('testing');
        } else {
            console.log(data);
            const ul = createAndAppend('ul', main);

            for (let i = 0; i < data.length; i++) {
                const listItem = createAndAppend('li', ul, data[i]);

                Object.keys(data[i]).forEach(function (prop) {
                    const subListItem = createAndAppend('li', listItem, data[i][prop]);
                    // Object.keys(prop).forEach(function (content) {
                    //     createAndAppend('p', subListItem, content);
                    // });
                });

                createAndAppend('p', ul, "=======================");
            }
        }
    });
});

function fetchAPIs(url, cb) {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', url);
    xhttp.responseType = 'json';
    xhttp.send();
    xhttp.onload = () => cb(null, xhttp.response);
    xhttp.onerror = () => cb(new Error(xhttp.statusText));
}

function createAndAppend(name, parent, innerHTML) {
    const child = document.createElement(name);
    parent.appendChild(child);
    if (innerHTML !== undefined) {
        child.innerHTML = innerHTML;
    }
    return child;
}
