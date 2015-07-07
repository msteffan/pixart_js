$("#set-color").on("click", setNewBackground).on("submit", setNewBackground);


function setNewBackground(){
    var newBackground = document.getElementById('color-field').value;
    event.preventDefault();
    $(".brush").css("background-color", newBackground);

}

for (var i=1;i<21;i++){
    $("body").append("<div></div>");
    $("body div").last().addClass("square");
    $(".square").on('mouseover', changeBackground);
    }

function changeBackground(){
    var newBackground = document.getElementById('color-field').value;
    $(this).css("background-color", newBackground);
    }
//
// for( var i = 0; i < 8000; i++){
//   var div = document.createElement('div');
//   div.classList.add('square');
//   div.addEventListener('mouseover', function(){
//     this.style.backgroundColor = brush.style.backgroundColor;
//   });
//   document.body.appendChild(div);
// }
