function adicionarInformacoes() {
    var inputText = document.getElementById('conquistas').value
    var box = document.getElementById('box')
    var getDBResDiv = "#getDB";

    box.innerHTML += inputText
}

$(document).ready(function() {
    $("#update_data").click(function () {
        let url = "http://127.0.0.1:3001/"; 
        
        console.log("conquistas")
        
        {  
            $.ajax({
                url: url,
                type: 'POST',
                data: {
                   titulo: $('#titulo').val(),
                    instituicao: $('#update_conquistas').val(),
                    termino: $('#update_termino').val(),

                },
            })
        }});
    });

/* Função que faz uma requisição GET */
function TestGETDB(){
    var url = "http://127.0.0.1:3001/";
    var resposta;

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor

    resposta = JSON.parse(xhttp.responseText);
    
    $(getDBResDiv).append("<br /><br />" + JSON.stringify(resposta));
    $(getDBResDiv).append("<br /><br />* Seleção do atributo 'title' do primeiro usuario:<br />" + resposta[0].title);
    //console.log(xhttp.responseText);
}
