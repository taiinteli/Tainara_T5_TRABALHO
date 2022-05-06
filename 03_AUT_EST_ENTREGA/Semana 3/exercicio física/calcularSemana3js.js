
function calcular() {
    var g = 10
    var resultado = document.getElementById("resultado")
    var vO = document.getElementById("velocidade") 
    var valor = vO.value
    var tempo = valor/g
    var hmax = (valor**2)/(2*g)
    resultado.innerHTML = `O resultado é do tempo de subida será de ${tempo} segundos, o resultado da altura máxima será de ${hmax} metros. `
}