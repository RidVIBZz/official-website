let stb = document.querySelector("#stb")
let gm = document.getElementById('gamelvl')
let diff = document.getElementById('difficulty')
let rndint = (min,max)=> Math.floor(Math.random()*(max-min))+min;
let rndrgb = (min,max)=> 'rgb(' + Math.floor(Math.random()*max)+'' + ',' + Math.floor(Math.random()*max) + ',' + Math.floor(Math.random()*max)+')'

stb.addEventListener('mouseover', function(){
    this.style.background = rndrgb(1,255)
    console.log(rndrgb(1,255));
    this.style.left = rndint(5,99) + '%'
    this.style.top = rndint(5,99) + '%'
    this.style.bottom = 'auto'
})
let ismobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)
if (ismobile) {
    stb.style.display = 'none'
    gm.style.display = 'none'
}
/*stb.addEventListener('click', function(){
    
})*/
diff.addEventListener('click',first)
function first(e){
  diff.innerHTML='Medium';
  stb.style.transition='all .6s';
  gm.style.borderColor = rndrgb(1,255)
  diff.style.color = rndrgb(1,255)
  e.stopImmediatePropagation();
  this.removeEventListener("click", first);
  document.onclick = second;
}
function second(){

  diff.innerHTML='easy';
  stb.style.transition='all 1s';
  gm.style.borderColor = rndrgb(1,255)
  diff.style.color = rndrgb(1,255)
}
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }