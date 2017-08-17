$('.list-group a').magnificPopup({
   type:'inline',
   fixedContentPos: false,
   removalDelay: 200,
   showCloseBtn: false,
   mainClass: 'mfp-fade'

});

$(document).on('click', '.popup-modal-dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
});

// Need to create safe m
function modify_qty(val) {
    var qty = document.getElementById('qty').textContent;
    var new_qty = parseInt(qty,10) + val;

    if (new_qty < 1 || new_qty > 4) {
      console.log(new_qty);
      return new_qty
    }

    //This code should only run if the top is not true
    const defMarg = 35;
    var newMarg = defMarg - (10)*(new_qty-1)

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
