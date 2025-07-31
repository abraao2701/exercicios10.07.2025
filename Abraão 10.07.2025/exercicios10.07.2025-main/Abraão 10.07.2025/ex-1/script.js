function calcular(){
    
    let n1 =Number(window.prompt(`Valor de A`))
    let n2 =Number(window.prompt(`Valor de B`))
    let n3 =Number(window.prompt(`Valor de C`))
   
    soma = n1 + n2

let msg
   if(soma >= n3) {
       msg = 'o valor é maior que C';
   }
    else{
       msg = 'o valor é menor que C';
   }

  let res = document.getElementById('situacao')
   res.innerHTML +=`<p>o valor de A+B=${soma}</p>`

   }