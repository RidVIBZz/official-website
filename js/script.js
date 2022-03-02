let stb = document.querySelector("#stb")
let year = document.getElementById('year')
let month =  document.getElementById('month')
let day = document.getElementById('day')
let hour = document.getElementById('hour')
let minute = document.getElementById('minute')
let seconds = document.getElementById('second')
let milsec = document.getElementById('milsec')
let birth = new Date('dec ,03,2008')
let gm = document.getElementById('gamelvl')
let diff = document.getElementById('difficulty');
let span = document.querySelector('.hithere span');
let rndeg = (min,max)=> 'rotate('+Math.floor(Math.random()*(max-min))+min+'deg)';
let rndint = (min,max)=> Math.floor(Math.random()*(max-min))+min;
let rndrgb = (min,max)=> 'rgb(' + Math.floor(Math.random()*max)+'' + ',' + Math.floor(Math.random()*max) + ',' + Math.floor(Math.random()*max)+')'
let ismobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)
if (ismobile) {
    stb.style.display = 'none'
    gm.style.display = 'none'
}
span.addEventListener('mouseover',function(){
  this.style.transform = rndeg(1,45)
  console.log(rndint(1,45));
  this.style.color = rndrgb(100,255)
})
span.addEventListener('mouseout',function(){
  this.style.transform = 'scale(1.3)'
})
function addzero(d){
  return (d < 10) ? '0' + d.toString() : d.toString();
}
let ageinterval = ()=>{
setInterval(function(){
let current = new Date
year.innerHTML=addzero(Math.abs(current.getFullYear() - birth.getFullYear()));
month.innerHTML=addzero(Math.abs(current.getMonth() - birth.getMonth()))
day.innerHTML=addzero(Math.abs(current.getDay() - birth.getDay()))
hour.innerHTML=addzero(Math.abs(current.getHours() - birth.getHours()))
minute.innerHTML=addzero(Math.abs(current.getMinutes() - birth.getMinutes()))
seconds.innerHTML=addzero(Math.abs(current.getSeconds() - birth.getSeconds()))
milsec.innerHTML=addzero(Math.abs(current.getMilliseconds() - birth.getMilliseconds()));
}, 1);
}
ageinterval()
let intervel = setInterval(() => {
  stb.style.background = rndrgb(1,255)
  stb.style.right = rndint(5,99) + '%'
  stb.style.top = rndint(5,99) + '%'
  stb.style.bottom = 'auto'
  gm.style.borderColor = rndrgb(1,255)
  diff.style.color = rndrgb(1,255)
}, 1000);
stb.addEventListener('mouseover', function(){
    clearInterval(intervel)
    this.style.background = rndrgb(1,255)
    this.style.right = rndint(5,99) + '%'
    this.style.top = rndint(5,99) + '%'
    this.style.bottom = 'auto'
    gm.style.borderColor = rndrgb(1,255)
    diff.style.color = rndrgb(1,255)
})
/*stb.addEventListener('click', function(){
    
})*/
diff.addEventListener('click',first)
function zero(e){
  diff.innerHTML='Hard';
  stb.style.transition='all .1s';
  gm.style.borderColor = rndrgb(1,255)
  diff.style.color = rndrgb(1,255)
  e.stopImmediatePropagation();
  this.removeEventListener("click", zero);
  diff.onclick = first;
}
function first(e){
  diff.innerHTML='Medium';
  stb.style.transition='all .6s';
  gm.style.borderColor = rndrgb(1,255)
  diff.style.color = rndrgb(1,255)
  e.stopImmediatePropagation();
  this.removeEventListener("click", first);
  diff.onclick = second;
}
function second(e){

  diff.innerHTML='Easy';
  stb.style.transition='all 1s';
  gm.style.borderColor = rndrgb(1,255)
  diff.style.color = rndrgb(1,255)
  e.stopImmediatePropagation();
  this.removeEventListener("click", second);
  diff.onclick = third;
}
function third(e){
  diff.innerHTML='Extreme';
  stb.style.transition='none';
  gm.style.borderColor = rndrgb(1,255)
  diff.style.color = rndrgb(1,255)
  e.stopImmediatePropagation();
  this.removeEventListener("click", third);
  diff.onclick = zero;
}