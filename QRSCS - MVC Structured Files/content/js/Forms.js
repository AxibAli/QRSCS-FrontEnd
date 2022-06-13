/* ---------------------------------------------------------------
---------------------------- IEP FORM ----------------------------
--------------------------------------------------------------- */


/* ------------ JAVASCRIPT CODE ------------ */


/* Function to Enable Text Input on CheckBoxes */
function enableDisableTextInputs() {

    /* Others checkbox 1 section 5 a */
    if(document.getElementById('Others-5a-1').checked) {
        document.getElementById('sect5a-others-txt-1').disabled = false;
    }
    else {
        document.getElementById('sect5a-others-txt-1').disabled = true;
    }

    /* Others checkbox 2 section 5 a */
    if(document.getElementById('Others-5a-2').checked) {
        document.getElementById('sect5a-others-txt-2').disabled = false;
    }
    else {
        document.getElementById('sect5a-others-txt-2').disabled = true;
    }

    /* Others checkbox 1 section 5 b  */
    if(document.getElementById('Others-5b-1').checked) {
        document.getElementById('sect5b-others-txt-1').disabled = false;
    }
    else {
        document.getElementById('sect5b-others-txt-1').disabled = true;
    }

    /* Others checkbox 2 section 5 b */
    if(document.getElementById('Others-5b-2').checked) {
        document.getElementById('sect5b-others-txt-2').disabled = false;
    }
    else {
        document.getElementById('sect5b-others-txt-2').disabled = true;
    }

}

/* --------------- JQUERY CODE --------------- */

/* Enabling Date Inputs on CheckBoxes */

$("#initial-iep").change(function() {
    if(this.checked) {
        $("#dateEnable-1").prop("disabled",false);
    }else{
        $("#dateEnable-1").prop("disabled",true);
    }
});

$("#annual-review").change(function() {
    if(this.checked) {
        $("#dateEnable-2").prop("disabled",false);
    }else{
        $("#dateEnable-2").prop("disabled",true);
    }
});

$("#other-review").change(function() {
    if(this.checked) {
        $("#dateEnable-3").prop("disabled",false);
    }else{
        $("#dateEnable-3").prop("disabled",true);
    }
});

$("#amendment").change(function() {
    if(this.checked) {
        $("#dateEnable-4").prop("disabled",false);
    }else{
        $("#dateEnable-4").prop("disabled",true);
    }
});