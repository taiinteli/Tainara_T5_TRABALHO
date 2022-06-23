function calcular(){
    let num = Number(document.getElementById("numero").value)
    let tipo
        if(num % 2 == 0){
        tipo = 'PAR'
        } else {
        tipo = 'ÍMPAR'
        }
    
    let res = document.getElementById("result")
    res.innerHTML = `<p> O digito da centana que foi digitado é ${tipo}!</p>`
    
}