function btnFunc(contents, images, element) {
  // ** -------------Toggle the Content----------------------
  var tabContent = document.getElementsByClassName("toggle_bar_content");
  var i;
  for (i = 0; tabContent.length > i; i++) {
    tabContent[i].style.display = "none";
  }
  document.getElementById(contents).style.display = "block";
  // ** -------------Toggle the Image----------------------
  var tabImages = document.getElementsByClassName("toggle_bar_images_js");
  for (i = 0; tabImages.length > i; i++) {
    tabImages[i].style.display = "none";
  }
  document.getElementById(images).style.display = "block";
  // ** -------------Toggle the Sign Under Button----------------------

  var tabButtonSign = document.getElementsByClassName("tablink");
  for (i = 0; tabButtonSign.length > i; i++) {
    tabButtonSign[i].classList.remove("js");
  }
  element.className += " js";
}
document.getElementById("defaultOpen").click();
