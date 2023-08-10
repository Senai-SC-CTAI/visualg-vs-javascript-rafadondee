function converter(){
    var nome = (document.getElementById("nome").value)
    var idade = (document.getElementById("idade").value)
    var resultado = 0
    var endereco = (document.getElementById("endereco").value)

    resultado = "Seu nome é: " + nome 
    resultado2 = "Sua idade é: " + idade
    resultado3 = " Seu endereço é: " + endereco  
    document.getElementById("resultado").innerHTML = resultado
    document.getElementById("resultado2").innerHTML = resultado2
    document.getElementById("resultado3").innerHTML = resultado3
}
