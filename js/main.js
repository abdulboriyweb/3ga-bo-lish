var elTitle = document.querySelector('.title')
var num = prompt('num kirit')

if(num % 3 == 0){
    elTitle.textContent = 'Bu son 3ga bolinadi.'
}else{
    elTitle.textContent = "Bu son 3ga bolinmaydi"
}