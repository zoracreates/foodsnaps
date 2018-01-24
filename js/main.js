//prevents modal from showing in mobile devices by hiding the modal on the bootstrap show.bs.modal event 
//if the window is less than 768px
$('.zoom-img').on('show.bs.modal', function () {
    var width = $(window).width();  
    if(width < 768){
        $(this).modal('hide') 
    }
});
