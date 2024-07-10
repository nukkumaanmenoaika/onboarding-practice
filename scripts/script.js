window.onload = function() {
  window.scrollTo(0, 0);
}


window.addEventListener('scroll', function() {
  var fixedBlock = document.getElementById('header-inner');
  var contentBlock = document.getElementById('Welcome');
  var colorMain = 'rgba(255,255,255, 0)';
  var colorContent = '#9f9f9f';
  if (window.scrollY > contentBlock.offsetTop) {
    fixedBlock.style.background = colorContent;
  } 
  else {
    fixedBlock.style.background = colorMain;
  }
});

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('details').forEach(function(detail) {
    var marker = detail.querySelector('.custom-marker');
    detail.addEventListener('toggle', function() {
      if (this.open) {
        marker.src = 'images/minus.png';
      } else {
        marker.src = 'images/plus.png'; 
      }
    });
  });
});



function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


var indexValue = 1;
      showImg(indexValue);
      function btm_slide(e){showImg(indexValue = e);}
      function side_slide(e){showImg(indexValue += e);}
      function showImg(e){
        var i;
        const img = document.querySelectorAll('.content .slideblock img');
        const slider = document.querySelectorAll('.btm-slides span');
        if(e > img.length){indexValue = 1}
        if(e < 1){indexValue = img.length}
        for(i = 0; i < img.length; i++){
          img[i].style.display = "none";
        }
        for(i = 0; i < slider.length; i++){
          slider[i].style.background = "rgba(255,255,255,0.1)";
        }
        img[indexValue-1].style.display = "block";
        slider[indexValue-1].style.background = "white";
      }
