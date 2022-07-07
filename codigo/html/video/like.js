const coracao1 = document.getElementById('img1')
const coracao2 = document.getElementById('img2')
const coracao3 = document.getElementById('img3')
const coracao4 = document.getElementById('img4')

const contagem1 = document.getElementById('contagem1')
const contagem2 = document.getElementById('contagem2')
const contagem3 = document.getElementById('contagem3')
const contagem4 = document.getElementById('contagem4')


var valor1 = false
var valor2 = false
var valor3 = false
var valor4 = false

var likes1 = 55
var likes2 = 24
var likes3 = 2
var likes4 = 1


coracao1.addEventListener('click',()=>{
    if(valor1 == false){
        coracao1.classList.remove('inativo')
        coracao1.classList.add('ativo')
        valor1 = true
        likes1++
        contagem1.innerHTML = likes1;
    }
    else{
        coracao1.classList.remove('ativo')
        coracao1.classList.add('inativo')
        valor1 = false
        likes1--
        contagem1.innerHTML = likes1;
    }
})

coracao2.addEventListener('click',()=>{
    if(valor2 == false){
        coracao2.classList.remove('inativo')
        coracao2.classList.add('ativo')
        valor2 = true
        likes2++
        contagem2.innerHTML = likes2;
    }
    else{
        coracao2.classList.remove('ativo')
        coracao2.classList.add('inativo')
        valor2 = false
        likes2--
        contagem2.innerHTML = likes2;
    }
})

coracao3.addEventListener('click',()=>{
    if(valor3 == false){
        coracao3.classList.remove('inativo')
        coracao3.classList.add('ativo')
        valor3 = true
        likes3++
        contagem3.innerHTML = likes3;
    }
    else{
        coracao3.classList.remove('ativo')
        coracao3.classList.add('inativo')
        valor3 = false
        likes3--
        contagem3.innerHTML = likes3;
    }
})

coracao4.addEventListener('click',()=>{
    if(valor4 == false){
        coracao4.classList.remove('inativo')
        coracao4.classList.add('ativo')
        valor4 = true
        likes4++
        contagem4.innerHTML = likes4;
    }
    else{
        coracao4.classList.remove('ativo')
        coracao4.classList.add('inativo')
        valor4 = false
        likes4--
        contagem4.innerHTML = likes4;
    }
})
