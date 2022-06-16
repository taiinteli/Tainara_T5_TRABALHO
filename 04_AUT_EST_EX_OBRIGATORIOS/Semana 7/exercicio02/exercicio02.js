function Trocar() {
    var text1 = document.getElementById('text1')
    var text2 = document.getElementById('text2')
    var guardavalor = text1.value; 
    text1.value = text2.value; 
    text2.value = guardavalor;
}