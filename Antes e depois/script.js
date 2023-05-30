function antesedepois(){

    var x
    var r

    var numero=prompt("Digite um número inteiro")
    numero= parseFloat(numero)
    x = numero-1 + "--" + "seu ANTECESSOR";
    document.getElementById("demo").innerHTML=x
    r = numero +1 + "--" + "seu SUCESSOR";
    document.getElementById("demo2").innerHTML=r
}