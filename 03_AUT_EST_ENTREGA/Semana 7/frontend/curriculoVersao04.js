function adicionarInformacoes() {
    var inputText = document.getElementById('conquistas').value
    var box = document.getElementById('box')
    
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
