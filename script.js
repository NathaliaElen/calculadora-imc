const calcular = document.getElementById('calcular')

function imc() {
const nome = document.getElementById('nome').value
const altura = document.getElementById('altura').value
const peso = document.getElementById('peso').value
const resultado = document.getElementById('resultado')

if (nome !== '' && altura !== '' && peso !== '') {
    
    const valorImc = (peso /(altura * altura)).toFixed(1)

    let classificacao = ''

    if (valorImc < 18) {
        classificacao = 'Abaixo do peso!'
    } else if (valorImc < 25) {
        classificacao = 'Com peso normal!'
    } else if (valorImc < 30) {
        classificacao = 'Levemente acima do peso!'
    } else if (valorImc < 35 ) {
        classificacao = 'Com obesidade grau I!'
    } else if (valorImc < 40) {
        classificacao = 'Com obesidade grau II!'
    } else {
        classificacao = 'Com obesidade mórbida!'
    }

    resultado.textContent = `${nome}, seu IMC é: ${valorImc}. E você está ${classificacao}`

} else {
    alert('Preencha todos os valores!')
}
}

calcular.addEventListener('click', imc)

/*
Comentários importantes: 
1. O melhor é chamar pelo id dos elementos
2. Quando usamos um . podemos acessar uma propriedade
3. A variável global é a que está fora da function
4. usar o evento addEventListener
5. Criar a function imc
6. Fazer a validação
7. calcular o imc
*/