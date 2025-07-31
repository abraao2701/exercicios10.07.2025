(function aleatorio(){
    const random =  (min, max) => Math.floor(Math.random() * (max - min) + min);
    console.log(random(1,100))
})();