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
