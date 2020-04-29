function consultaCep(){
    var cep = document.getElementById('CEP').value
    var url = 'https://viacep.com.br/ws/' + cep + '/json/'
    $.ajax({
        url: url,
        type:'GET',
        success: function(response){
            console.log(response)
            document.getElementById("logradouro").innerHTML = response.logradouro
        }
    })
}