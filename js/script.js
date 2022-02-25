let stb = document.querySelector("#stb")
let rndint = (min,max)=> Math.floor(Math.random()*(max-min))+min;
let rndrgb = (min,max)=> 'rgb(' + Math.floor(Math.random()*max)+min + ',' + Math.floor(Math.random()*max) + ',' + Math.floor(Math.random()*max)+');'

stb.addEventListener('mouseover', function(){
    this.style.background = rndrgb(1,255)
    this.style.left = rndint(5,99) + '%'
    this.style.top = rndint(5,99) + '%'
    this.style.bottom = 'auto'
})
stb.addEventListener('click', function(){
    this.style.background = rndrgb(1,255)
})