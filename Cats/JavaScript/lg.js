//images
const images = [
    '/Cats/Images/Little Girl/littlegirl1.jpeg',
    '/Cats/Images/Little Girl/littlegirl2.jpeg',
    '/Cats/Images/Little Girl/littlegirl3.jpeg',
    '/Cats/Images/Little Girl/littlegirl4.jpeg',
    '/Cats/Images/Little Girl/littlegirl5.jpeg',
  ]
  
  let firstImage = 0 //index of first image
  let lastImage = images.length - 1 //index of first image
  let currentImage = 0 //what is on now
  
  const nextBtn = document.getElementById("next")
  nextBtn.addEventListener("click", function(){
    let imageTag = document.getElementById("lgimage")
    currentImage = currentImage + 1
    if (currentImage >= 5) {
        currentImage = 0
    }
    imageTag.src = images[currentImage]
    document.getElementById("info").innerHTML = (currentImage + 1) + "/5"
  })
  
  const prevBtn = document.getElementById("prev")
  prevBtn.addEventListener("click", function(){
    let imageTag = document.getElementById("lgimage")
    currentImage = currentImage - 1
    if (currentImage < 0) {
        currentImage = 4
    }
    imageTag.src = images[currentImage]
    document.getElementById("info").innerHTML = (currentImage + 1) + "/5"
  })
  