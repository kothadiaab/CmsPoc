/**
 * Created by abhedkothadia on 2/27/16.
 */

// Get the modal
var publishModal = document.getElementById('publishModal');
var publishBtn = document.getElementById("preview-publish");
var span = document.getElementsByClassName("close")[0];
var publishCancel = document.getElementById("cancel-button");
var publishSubmitCancel = document.getElementById("cancelSubmit-button");
var publishSubmitTopCancel = document.getElementById("submitTop-cancel");


var publishValidTopCancel = document.getElementById("validTop-cancel");
var publishValidationTopCancel = document.getElementById("validationTop-cancel");
var publishSuccessTopCancel = document.getElementById("successTop-cancel");


publishBtn.onclick = function() {
    publishModal.style.display = "block";
}

span.onclick = function() {
    publishModal.style.display = "none";
}

publishCancel.onclick = function() {
    publishModal.style.display = "none";
}

publishSubmitCancel.onclick = function() {
    publishSubmitModal.style.display = "none";
}

publishSubmitTopCancel.onclick = function() {
    publishSubmitModal.style.display = "none";
}

publishValidTopCancel.onclick = function() {
    publishValidModal.style.display = "none";
}

publishValidationTopCancel.onclick = function() {
    publishValidationModal.style.display = "none";
}

publishSuccessTopCancel.onclick = function() {
    publishSuccessModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == publishModal) {
        publishModal.style.display = "none";
    }
}


var publishSubmitModal = document.getElementById('publishSubmitModal');
var publishSubmitBtn = document.getElementById("cont-button");

publishSubmitBtn.onclick = function() {
    publishModal.style.display = "none";
    publishSubmitModal.style.display = "block";
}

var publishValidModal = document.getElementById('publishValidModal');
var publishValidBtn = document.getElementById("publishSubmit-button");

publishValidBtn.onclick = function() {
    publishSubmitModal.style.display = "none";
    publishValidModal.style.display = "block";
}

var publishValidationModal = document.getElementById('publishValidationModal');
var publishValidationBtn = document.getElementById("valid-button");

publishValidationBtn.onclick = function() {
    publishValidModal.style.display = "none";
    publishValidationModal.style.display = "block";
}

var publishSuccessModal = document.getElementById('publishSuccessModal');
var publishSuccessBtn = document.getElementById("validation-button");

publishSuccessBtn.onclick = function() {
    publishValidationModal.style.display = "none";
    publishSuccessModal.style.display = "block";
}

