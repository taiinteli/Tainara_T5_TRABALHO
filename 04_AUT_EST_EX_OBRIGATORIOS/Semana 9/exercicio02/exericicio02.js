function calcular(valor) {
    let numero = valor.value;
    let array = numero.split("");
    console.log(numero);
    console.log(array);
    let soma = 0;
    if (numero > 0){
    for (let i = 0; i < array.length; i++) {
        if (Number(array[i]) >= 0 && Number(array[i]) <= 9) {
            soma += Number(array[i]);
        }
    }
    document.getElementById("result").innerHTML ="A soma dos dígitos é: " + soma;
    }
    else
    {
        document.getElementById("result").innerHTML ="Digite um número positivo e inteiro";
    }
}