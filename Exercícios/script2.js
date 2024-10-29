function verificar(){
    var agora = new Date()
    var hoje = agora.getFullYear()
    var fano = document.querySelector('input#ano')
    var res = document.querySelector('div#res')

    if (Number(fano.value) > hoje || fano.value.length == 0){
        res.innerHTML=('Verifique os dados acima e tente novamente.')
        } else {
            var fsex = document.getElementsByName('radsex')
            var idade = hoje - Number(fano.value)
            var genero = ''
            var img = document.createElement('img')
            img.setAttribute('id',' foto')
            if (fsex[0].checked){
                genero = 'Homem'
                
                if (idade>0 && idade <12){
                    img.setAttribute = 'src','criança-m.png'
                } else if (idade >=12 && idade < 18){
                    img.setAttribute = 'src','jovem-m.png'
                } else if (idade >=18 && idade < 50){
                    img.setAttribute = 'src', 'adulto-m.png'
                } else {
                    img.setAttribute = 'src', 'idoso-m.png'
                }
            } else if (fsex [1].checked){ 
                genero = 'Mulher'
                
                if (idade>0 && idade <12){
                    img.src = 'criança-f.png'
                } else if (idade >=12 && idade <18){
                    img.src = 'jovem-f.png'
                } else if (idade>=18 && idade <50){
                    img.src = 'adulto-f.png'
                } else {
                    img.src ='idoso-f.png'
                }
            } 
            res.innerHTML=(`${genero} de ${idade} anos.`)
            res.appendChild(img)
        }
}