let stb = document.querySelector("#stb")
let proj = document.getElementById('proj1')
let proj2 = document.getElementById('proj2')
let body = document.querySelector('body')
let year = document.getElementById('year')
let month =  document.getElementById('month')
let notif = document.getElementById('notification')
let day = document.getElementById('day')
let hour = document.getElementById('hour')
let minute = document.getElementById('minute')
let seconds = document.getElementById('second')
let milsec = document.getElementById('milsec')
let birth = new Date('dec ,03,2008')
let gm = document.getElementById('gamelvl')
let diff = document.getElementById('difficulty');
let rndeg = (min,max)=> 'rotate('+Math.floor(Math.random()*(max-min))+min+'deg)';
let rndint = (min,max)=> Math.floor(Math.random()*(max-min))+min;
let rndrgb = (min,max)=> 'rgb(' + Math.floor(Math.random()*max)+'' + ',' + Math.floor(Math.random()*max) + ',' + Math.floor(Math.random()*max)+')'
let ismobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)
if (ismobile) {
    stb.style.display = 'none'
    gm.style.display = 'none'
}
let span = document.getElementById('hi').children;
let span2 = document.getElementById('hi2').children;
for (let r = 0; r <= span2.length - 1; r++) {
  span2[r].addEventListener('mouseover',function(){
    this.style.transform = rndeg(1,-45)
    this.style.color = rndrgb(100,255);
  })
}
for (let i = 0; i <= span.length - 1; i++) {
  span[i].addEventListener('mouseover',function(){
    this.style.transform = rndeg(1,-45)
    this.style.color = rndrgb(100,255);
  })
}
function addzero(d){
  return (d < 10) ? '0' + d.toString() : d.toString();
}
function addzeroes(r){
  if (r < 100 & r > 10){
    r = '0' + r.toString()
  }
  else if(r < 10){
    r = '00' + r.toString()
  }
  else{
    r = r.toString()
  }
  return r
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
milsec.innerHTML=addzeroes(Math.abs(current.getMilliseconds() - birth.getMilliseconds()));
}, 1);
}
ageinterval()
setInterval(() => {
  body.style.background = rndrgb(1,255);
  proj.style.borderColor = rndrgb(1,255);
  proj2.style.borderColor = rndrgb(1,255);
  notif.style.color = rndrgb(1,255);
   notif.style.background = rndrgb(1,255);
  if (diff.innerHTML=='Easy') {
    notif.style.fontSize = '23px'
    notif.innerHTML = 'Well, Anyone Can Do Easy'
  }
  else if(diff.innerHTML=='Medium'){
    notif.style.width = '610px'
    notif.style.fontSize = '20px'
    notif.innerHTML = 'Are You Sure That You Didn`t Pull Out Any Tricks?'
  }
  else if(diff.innerHTML=='Extreme'){
    notif.style.width = '630px'
    notif.style.fontSize = '15px'
    notif.innerHTML = 'Impossible!!! You Are 1 Of 2 In A Trillion Person Who Can Do This...'
  }
  else if(diff.innerHTML=='Hard'){
    notif.style.width = '600px'
    notif.style.fontSize = '22px'
    notif.innerHTML = "Damn.. I'm Impressed That You Did It"
  }
}, 2000);
let intervel = setInterval(() => {
  stb.style.background = rndrgb(1,255)
  stb.style.right = rndint(5,99) + '%'
  stb.style.top = rndint(5,99) + '%'
  stb.style.bottom = 'auto'
  gm.style.transition = 'all 0.6s'
  gm.style.borderColor = rndrgb(1,255)
  diff.style.color = rndrgb(1,255)
}, 800);
let notifint = ()=>{
  setInterval(() => {
    notif.style.opacity = 0;
  }, 7000);
  setInterval(() => {
    notif.style.display = 'none';
  }, 8000);
}
stb.addEventListener('mouseover', function(){
    clearInterval(intervel)
    this.style.background = rndrgb(1,255)
    this.style.right = rndint(5,99) + '%'
    this.style.top = rndint(5,99) + '%'
    body.style.background = rndrgb(1,255);
    this.style.bottom = 'auto'
    gm.style.borderColor = rndrgb(1,255)
    diff.style.color = rndrgb(1,255)
})
stb.addEventListener('click',notific)
 function notific(){
  notif.style.display = 'flex';
    notifint()
}
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