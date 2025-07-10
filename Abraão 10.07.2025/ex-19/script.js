function tabuada(){
let n1 =Number(window.prompt(`informe o número que deseja ver a tabuada`))

let res = document.getElementById('situacao')
res.innerHTML = `Os valores da tabuada abaixo`

res.innerHTML += n1*1
res.innerHTML += n1*2
res.innerHTML += n1*3
res.innerHTML += n1*4
res.innerHTML += n1*5
res.innerHTML += n1*6
res.innerHTML += n1*7
res.innerHTML += n1*8
res.innerHTML += n1*9
res.innerHTML += n1*10

}