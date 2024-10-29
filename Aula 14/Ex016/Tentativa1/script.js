var valorinicio = document.querySelector('input#inicio')
var valorfim = document.querySelector('input#fim')
var valorpasso = document.querySelector('input#passo')
var resultado = 'Contando: '

function calcular(){
if (valorinicio.value.length == 0 || valorfim.value.length == 0 || valorpasso.value.length == 0){
    res.innerHTML=('[ERRO] Passo não pode ser 0.')
    res.innerHTML=('Impossível contar.')
} else {
    res.innerHTML=('Resultado: <br>')
    var i = Number(valorinicio.value)
    var f = Number(valorfim.value)
    var p = Number(valorpasso.value)
    
    if (p <=0 ){
        alert('Passo não pode ser 0. Então ele valerá 1.')
        p =1
    }

    if (i<f){
        for ( let c = i; c <= f; c += p ){
            res.innerHTML += `${c} \u{1F449}`
    }       res.innerHTML += `\u{1F3C1}`
}   else { 
        for ( let c = i; c >= f; c-=p){
            res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
}
}
}
 /*Estrutura de repetição for
console.log('Vai começar!')
var c = 1
for (c=1 ; c<=4 ; c++){
    console.log(`${c}`)
}
console.log('Fim!')
*/