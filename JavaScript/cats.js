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