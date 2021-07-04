window.addEventListener('resize', function(){
    addRequiredClass();
})


function addRequiredClass() {
    if (window.innerWidth < 860) {
        document.body.classList.add('mobile')
    } else {
        document.body.classList.remove('mobile') 
    }
}

window.onload = addRequiredClass

let hamburger = document.querySelector('.hamburger')
let mobileNav = document.querySelector('.nav-list')

let bars = document.querySelectorAll('.hamburger span')

let isActive = false

hamburger.addEventListener('click', function() {
    mobileNav.classList.toggle('open')
    if(!isActive) {
        bars[0].style.transform = 'rotate(45deg)'
        bars[1].style.opacity = '0'
        bars[2].style.transform = 'rotate(-45deg)'
        isActive = true
    } else {
        bars[0].style.transform = 'rotate(0deg)'
        bars[1].style.opacity = '1'
        bars[2].style.transform = 'rotate(0deg)'
        isActive = false
    }
    

})

function myFunction() {
    let element = document.body;
    let mode = document.getElementById('mode');
    let cross = document.getElementById('cross');

    if (element.style.backgroundColor!='white'){
    element.style.color="black";
    element.style.backgroundColor="white";
    mode.src="./svg/moon-fill.svg"
    mode.style.filter=""
    cross.style.filter="invert()"
    }
    else{
        element.style.color="white";
    element.style.backgroundColor="#232323";
    mode.src="./svg/sun.svg"
    mode.style.filter="invert()";
    cross.style.filter=""
    
    }
  }

  const about = document.getElementById('about');
  const home = document.getElementById('home');
  const myContainerHome = document.getElementById('homeContainer');
  const myContainerAbout= document.getElementById('aboutContainer');

  function handleAbout(){
      about.setAttribute('class','btn active');
      home.setAttribute('class','btn');
      myContainerHome.setAttribute('class','my-container-home my-container animated')
      setTimeout(() =>{
          myContainerHome.style.display="none"
          myContainerAbout.style.display="flex"
      },690)
  }

  function handleHome(){
    home.setAttribute('class','btn active');
    about.setAttribute('class','btn');
    myContainerAbout.setAttribute('class','my-container-about my-container animated')
      setTimeout(() =>{
          myContainerAbout.style.display="none"
          myContainerHome.style.display="flex"
      },690)
}