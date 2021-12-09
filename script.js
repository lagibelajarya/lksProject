const box = document.querySelector('.testimonials-container');
const navigasi1 = document.querySelector('#label1');
const navigasi2 = document.querySelector('#label2');
const navigasi3 = document.querySelector('#label3');
const navigasi4 = document.querySelector('#label4');

navigasi1.onclick = function(){
    box.style.transform = 'translateX(0)';
}
navigasi2.onclick = function(){
    box.style.transform = 'translateX(-25%)';
}
navigasi3.onclick = function(){
    box.style.transform = 'translateX(-50%)';
}
navigasi4.onclick = function(){
    box.style.transform = 'translateX(-75%)';
}