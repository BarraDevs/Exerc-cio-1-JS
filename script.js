let number1, number2, quest1

number1 = prompt("Digite o primeiro número")
number2 = prompt("Digite o segunto número")

number1 = Number(number1)
number2 = Number(number2)



let sum = number1 + number2
let sub = number1 - number2
let mult = number1 * number2
let div = number1 / number2
let rest = number1 % number2


alert (`
    Soma = ${sum} 
    Subtração = ${sub}
    Multiplicação = ${mult}
    Divisão = ${div}
    Resto da divisão = ${rest}

`)
if(number1 === number2){

    alert("Os números inseridos são iguais, afundou alguma tecla irmão")
    
    }else{
        alert("Gosto de números diferentes")
    }

if(rest != 0){
    alert("Seu número é impar")
}else{
    alert("Seu número é par")
}