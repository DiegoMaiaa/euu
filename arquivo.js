function mostrarMensagem () {
    var teste = document.getElementById("texto").value
    document.getElementById("msg").innerHTML = `Você digitou: ${teste}`
}

function alterarTamanhoFonte () {
    var AoD = document.getElementById("icrFont").value
    alert(AoD)
}