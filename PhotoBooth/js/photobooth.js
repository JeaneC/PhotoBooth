// document.getElementById('test').addEventListener("click", function(){
//   alert("Hello");
// });

$('#test').click(function(){
  alert("Hello");
})
$('.list-group a').magnificPopup({
   type:'inline',
   fixedContentPos: false,
   removalDelay: 200,
   showCloseBtn: false,
   mainClass: 'mfp-fade'

});


$('#form').on('change', function (e) {
    var optionSelected = $("option:selected", this);
    var valueSelected = this.value;
    $('#title').css('font-family', valueSelected);
});

function green() {
  $('.sidebar').css('background', '#74cfae');
  $('#mainPane').css('background', 'black');
  $('.nav-group-title').css('color', 'black');
  $('.nav-group-item').css('color', 'black');
}

function red() {
  $('.sidebar').css('background', '#ff4343');
  $('#mainPane').css('background', 'white');
  $('.nav-group-title').css('color', 'white');
  $('.nav-group-item').css('color', 'white');
}

function blue() {
  $('.sidebar').css('background', 'rgba(97, 134, 254, 0.97)');
  $('#mainPane').css('background', 'white');
  $('.nav-group-title').css('color', 'white');
}


$(document).on('click', '.popup-modal-dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
});


// Need to create safe m
function modify_qty(val) {
    var qty = document.getElementById('qty').textContent;
    var new_qty = parseInt(qty,10) + val;

    if (new_qty < 1 || new_qty > 4) {
      // console.log(new_qty);
      return new_qty
    }

    //This code should only run if the top is not true
    const defMarg = 30;
    console.log(new_qty);

    var newMarg = defMarg - (20)*(new_qty-1)
    if (new_qty > 2) {
      newMarg = 10;
    }
    console.log(newMarg)

    $('#card1').css('margin-left', newMarg +'%');
    document.getElementById('qty').textContent = new_qty;

    //Gotta hide or not hide stuff
    if (new_qty > qty){ //User added
      $('#card'+ String(new_qty)).toggleClass("hide");
    } else { //User Removed
      $('#card'+ String(qty)).toggleClass("hide");
    }


    return new_qty;
}

// Need to create safe m
function modify_qty2(val) {
    console.log(val)
    var qty2 = document.getElementById('qty2').textContent;
    var new_qty2 = parseInt(qty2,10) + val;

    if (new_qty2 < 3 || new_qty2 > 5) {
      // console.log(new_qty2);
      return new_qty2
    }
    document.getElementById('qty2').textContent = new_qty2;

    //Gotta hide or not hide stuff
    if (new_qty2 > qty2){ //User added
      $('#spot'+ String(new_qty2)).toggleClass("hide");
    } else { //User Removed
      $('#spot'+ String(qty2)).toggleClass("hide");
    }





    return new_qty2;
}
