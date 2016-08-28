$(document).ready(function() {
    var $phone = $('input[type="tel"]');

    // Mask input for cell phone numbers
    $phone.keypress(function(e){
        var val = this.value;
        console.log('phone key s');
        // only accept number inputs
        if(e.charCode >= 48 && e.charCode <= 57){
            if (val.length === 3) {
                this.value = [val.slice(0, 3), '-', val.slice(3)].join('');
            }
            if (val.length === 7) {
                this.value = [val.slice(0, 7), '-', val.slice(7)].join('');
            }
            if (val.length > 11) {
                this.value = val.slice(0,11);
            }
        } else {
            return false;
        }
    });

});