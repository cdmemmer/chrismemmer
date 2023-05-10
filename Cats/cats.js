//tabs
function openCat (e, catName) {

  //Hide all the things with the "tabcontent class"
  var tabcontent = document.getElementsByClassName("tabcontent")
  for (var i = 0; i <tabcontent.length; i++) {
    tabcontent[i].style.display = "none"
  }

  //Hide active from everything
  var tablinks = document.getElementsByClassName("tablinks")
  for (var c = 0; c<tablinks.length; c++) {
    tablinks[c].className = tablinks[c].className.replace(" active", "")
  }

  //Hide intro message
  var start = document.getElementById("start")
  start.style.display = "none"

  //Show the current tab and add the active class to that particular button
  document.getElementById(catName).style.display = "block"
  e.currentTarget.className = e.currentTarget.className + " active"
}



//images
const images = [
  '/Cats/Images/Tally/tally1.jpeg',
  '/Cats/Images/Tally/tally2.jpeg',
  '/Cats/Images/Tally/tally3.jpeg'
]

let firstImage = 0 //index of first image
let lastImage = images.length - 1 //index of first image
let currentImage = 0 //what is on now

const nextBtn = document.getElementById("next")
nextBtn.addEventListener("click", function(){
  let imageTag = document.getElementById("tallyimage")
  currentImage = currentImage + 1
  if (currentImage >= 3) {
      currentImage = 0
  }
  imageTag.src = images[currentImage]
  document.getElementById("info").innerHTML = (currentImage + 1) + "/3"
})

const prevBtn = document.getElementById("prev")
prevBtn.addEventListener("click", function(){
  let imageTag = document.getElementById("tallyimage")
  currentImage = currentImage - 1
  if (currentImage < 0) {
      currentImage = 2
  }
  imageTag.src = images[currentImage]
  document.getElementById("info").innerHTML = (currentImage + 1) + "/3"
})
