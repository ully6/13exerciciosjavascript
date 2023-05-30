let btn = document.getElementById("btn")
text= document.getElementById("text")

btn.addEventListener ('click',function(){
    let preco = prompt("Qual era o preço anterior do produto?")
    let precoatu = prompt("Qual é o preço atual do produto?") 

    preco = parseFloat(preco)
    precoatu = parseFloat(precoatu)
    let val=0
    text.innerHTML= `<h3> Analisando os valores informados</h3>`

    if(precoatu > preco){
        text.innerHTML+= `<p> O produto custava R$ ${preco} e agora custa R$ ${precoatu}.<br>
        Hoje o produto está mais caro.<br>
        O preço subiu R$ ${precoatu-preco} em relação ao preço anterior.
       </p>`
    } else if(precoatu < preco){
        val=preco - precoatu
        text.innerHTML+= `<p> O produto custava R$ ${preco} e agora custa R$ ${precoatu}.<br>
        Hoje o produto está mais barato.<br>
        O preço caiu R$ ${val} em relação ao preço anterior.
       </p>`
    }
})