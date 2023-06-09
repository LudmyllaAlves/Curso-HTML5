function mudaFoto(foto){
    document.getElementById("icone").src = foto;
}

function calTotal(){
    var qtd = parseInt(document.getElementById("cquant").value);
    tot = qtd *1500;
    document.getElementById("cpreco").value = tot;
}