/**
 * Created by abhedkothadia on 3/1/16.
 */


init();

function init(){
    var count1 = 10143;
    var count2 = 5116;
    var count3 = 9989;
    var count4 = 13734;
    var count5 = 6157;

    setInterval(function(){
        count1+=5;
        count2+=2;
        count3+=3;
        count4+=1;
        count5+=4;

        document.getElementById("count1").innerHTML = count1;
        document.getElementById("count2").innerHTML = count2;
        document.getElementById("count3").innerHTML = count3;
        document.getElementById("count4").innerHTML = count4;
        document.getElementById("count5").innerHTML = count5;
    }, 2000);
}


var modal = document.getElementById('templateModal');

// Get the button that opens the modal
var btn = document.getElementById("writeNewGuide");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var cancel = document.getElementById("cancel-button");

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

cancel.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var divClick1 = document.getElementById("template1");
var radioCheck1 = document.getElementById("radio1")

divClick1.onclick = function(){
    radioCheck1.checked = true;
}

var divClick2 = document.getElementById("template2");
var radioCheck2 = document.getElementById("radio2")

divClick2.onclick = function(){
    radioCheck2.checked = true;
}

var divClick3 = document.getElementById("template3");
var radioCheck3 = document.getElementById("radio3")

divClick3.onclick = function(){
    radioCheck3.checked = true;
}