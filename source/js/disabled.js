function checkParams() {
    var fio = $('#fio').val();
    var phone = $('#phone').val();
    var el = document.getElementsByClassName("submit__text")[0];
    
    if (fio.length != 0 && phone.length != 0) {
        $('#submit').removeAttr('disabled');
        el.style.opacity = 0.5;
 
        
    } else {
        $('#submit').attr('disabled', 'disabled');
        el.style.opacity = 1;
    }
}


