function media(){
    
    let n1 =Number(window.prompt(`Qual foi a primeira nota`))
    let n2 =Number(window.prompt(`Qual foi a segunda nota`))
    let n3 =Number(window.prompt(`Qual foi a terceira nota`))
   
    med = (n1 + n2 + n3)/3
   
   let res = document.getElementById('situacao')
   res.innerHTML +=`<p> a média final será ${med}</p>`

   }