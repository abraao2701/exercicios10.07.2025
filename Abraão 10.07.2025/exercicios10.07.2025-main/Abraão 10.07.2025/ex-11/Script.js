function media(){
    
    let n1 =Number(window.prompt(`Qual foi a primeira nota`))
    let n2 =Number(window.prompt(`Qual foi a segunda nota`))
    let n3 =Number(window.prompt(`Qual foi a terceira nota`))
    let n4 =Number(window.prompt(`Qual foi a quarta nota`))
   
    med = (n1 + n2 + n3 + n4)/4
   
   let msg //cria uma variável e deixa ela vazia
   if(med >= 7) {//se por acaso a média for 6.0 ou mais...
       msg = 'Meus parabéns!'
   }
    else{//se não...
       msg = 'Estude um pouco mais!'
   }
   
   let res = document.getElementById('situacao')
   res.innerHTML =`<p>Calculando a média final</p>`
   res.innerHTML +=`<p>As notas obtidas foram ${n1} e ${n2} e ${n3} e ${n4}`
   res.innerHTML +=`<p> a média final será ${med}</p>`
    res.innerHTML +=`<p> a sua nota final é <strong style='color:red;'>${msg}</strong>`
   }