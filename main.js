console.log('Hello World!');

let container = document.querySelector('terra');
console.log(container)

let cols = document.querySelectorAll('.col')
console.log(cols);


let btn = document.querySelector('.clickme');

btn.addEventListener('click', function(event){
    document.querySelector('h1').innerText= 'Yay were back to JAVASCRIPT!!!!!';
})