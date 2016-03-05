/**
 * Created by abhedkothadia on 2/26/16.
 */

// Get the modal
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


function buttonToggle(){

    var userCheckBox1 = document.getElementById("user1-checkbox");
    var userCheckBox2 = document.getElementById("user2-checkbox");
    var userCheckBox3 = document.getElementById("user3-checkbox");
    var userCheckBox4 = document.getElementById("user4-checkbox");
    var userCheckBox5 = document.getElementById("user5-checkbox");

    var userCheck1 = document.getElementsByClassName("user1");
    var userCheck2 = document.getElementsByClassName("user2");
    var userCheck3 = document.getElementsByClassName("user3");
    var userCheck4 = document.getElementsByClassName("user4");
    var userCheck5 = document.getElementsByClassName("user5");

    if(userCheckBox1.checked || userCheckBox2.checked || userCheckBox3.checked || userCheckBox4.checked || userCheckBox5.checked){
        document.getElementById('admin-save').disabled = false;
    }

    if(!userCheckBox1.checked && !userCheckBox2.checked && !userCheckBox3.checked && !userCheckBox4.checked && !userCheckBox5.checked){
        document.getElementById('admin-save').disabled = true;
    }

    if(userCheckBox1.checked){
        document.getElementById("user1-row").style.backgroundColor = "#F5F5DC";
        for(var i = 0; i<userCheck1.length; i++){
            userCheck1[i].disabled = false;
        }
    }

    if(!userCheckBox1.checked){
        document.getElementById("user1-row").style.backgroundColor = "#F8F8F8";
        for(var i = 0; i<userCheck1.length; i++){
            userCheck1[i].disabled = true;
        }
    }


    if(userCheckBox2.checked){
        document.getElementById("user2-row").style.backgroundColor = "#F5F5DC";
        for(var i = 0; i<userCheck2.length; i++){
            userCheck2[i].disabled = false;
        }
    }

    if(!userCheckBox2.checked){
        document.getElementById("user2-row").style.backgroundColor = "#F8F8F8";
        for(var i = 0; i<userCheck2.length; i++){
            userCheck2[i].disabled = true;
        }
    }


    if(userCheckBox3.checked){
        document.getElementById("user3-row").style.backgroundColor = "#F5F5DC";
        for(var i = 0; i<userCheck3.length; i++){
            userCheck3[i].disabled = false;
        }
    }

    if(!userCheckBox3.checked){
        document.getElementById("user3-row").style.backgroundColor = "#F8F8F8";
        for(var i = 0; i<userCheck3.length; i++){
            userCheck3[i].disabled = true;
        }
    }


    if(userCheckBox4.checked){
        document.getElementById("user4-row").style.backgroundColor = "#F5F5DC";
        for(var i = 0; i<userCheck4.length; i++){
            userCheck4[i].disabled = false;
        }
    }

    if(!userCheckBox4.checked){
        document.getElementById("user4-row").style.backgroundColor = "#F8F8F8";
        for(var i = 0; i<userCheck4.length; i++){
            userCheck4[i].disabled = true;
        }
    }


    if(userCheckBox5.checked){
        document.getElementById("user5-row").style.backgroundColor = "#F5F5DC";
        for(var i = 0; i<userCheck5.length; i++){
            userCheck5[i].disabled = false;
        }
    }

    if(!userCheckBox5.checked){
        document.getElementById("user5-row").style.backgroundColor = "#F8F8F8";
        for(var i = 0; i<userCheck5.length; i++){
            userCheck5[i].disabled = true;
        }
    }

}


function enableCheck(){

    document.getElementById('admin-editRole').disabled = true;

    var userCheckBox1 = document.getElementById("user1-checkbox");
    var userCheckBox2 = document.getElementById("user2-checkbox");
    var userCheckBox3 = document.getElementById("user3-checkbox");
    var userCheckBox4 = document.getElementById("user4-checkbox");
    var userCheckBox5 = document.getElementById("user5-checkbox");

    userCheckBox1.disabled = false;
    userCheckBox2.disabled = false;
    userCheckBox3.disabled = false;
    userCheckBox4.disabled = false;
    userCheckBox5.disabled = false;


}


function reset(){

    document.getElementById('admin-save').disabled = true;
    document.getElementById('admin-editRole').disabled = false;

    var userCheckBox1 = document.getElementById("user1-checkbox");
    var userCheckBox2 = document.getElementById("user2-checkbox");
    var userCheckBox3 = document.getElementById("user3-checkbox");
    var userCheckBox4 = document.getElementById("user4-checkbox");
    var userCheckBox5 = document.getElementById("user5-checkbox");

    var userCheck1 = document.getElementsByClassName("user1");
    var userCheck2 = document.getElementsByClassName("user2");
    var userCheck3 = document.getElementsByClassName("user3");
    var userCheck4 = document.getElementsByClassName("user4");
    var userCheck5 = document.getElementsByClassName("user5");


    userCheckBox1.disabled = true;
    userCheckBox2.disabled = true;
    userCheckBox3.disabled = true;
    userCheckBox4.disabled = true;
    userCheckBox5.disabled = true;

    document.getElementById("user1-row").style.backgroundColor = "#F8F8F8";
    document.getElementById("user2-row").style.backgroundColor = "#F8F8F8";
    document.getElementById("user3-row").style.backgroundColor = "#F8F8F8";
    document.getElementById("user4-row").style.backgroundColor = "#F8F8F8";
    document.getElementById("user5-row").style.backgroundColor = "#F8F8F8";

    if(userCheckBox1.checked){
        for(var i = 0; i<userCheck1.length; i++){
            userCheck1[i].disabled = true;
        }
    }

    if(userCheckBox2.checked){
        for(var i = 0; i<userCheck2.length; i++){
            userCheck2[i].disabled = true;
        }
    }


    if(userCheckBox3.checked){
        for(var i = 0; i<userCheck3.length; i++){
            userCheck3[i].disabled = true;
        }
    }

    if(userCheckBox4.checked){
        for(var i = 0; i<userCheck4.length; i++){
            userCheck4[i].disabled = true;
        }
    }

    if(userCheckBox5.checked){
        for(var i = 0; i<userCheck5.length; i++){
            userCheck5[i].disabled = true;
        }
    }

    userCheckBox1.checked = false;
    userCheckBox2.checked = false;
    userCheckBox3.checked = false;
    userCheckBox4.checked = false;
    userCheckBox5.checked = false;

}

var flag = null;

var divClick1 = document.getElementById("template1");
var radioCheck1 = document.getElementById("radio1")

var divClick2 = document.getElementById("template2");
var radioCheck2 = document.getElementById("radio2");

var divClick3 = document.getElementById("template3");
var radioCheck3 = document.getElementById("radio3");

divClick1.onclick = function(){
    radioCheck1.checked = true;
    divClick1.style.backgroundColor = "#F0EDEA";
    divClick2.style.backgroundColor = "white";
    divClick3.style.backgroundColor = "white";
    flag = 1;
}


divClick2.onclick = function(){
    radioCheck2.checked = true;
    divClick1.style.backgroundColor = "white";
    divClick2.style.backgroundColor = "#F0EDEA";
    divClick3.style.backgroundColor = "white";
    flag = 2;
}


divClick3.onclick = function(){
    radioCheck3.checked = true;
    divClick1.style.backgroundColor = "white";
    divClick2.style.backgroundColor = "white";
    divClick3.style.backgroundColor = "#F0EDEA";
    flag = 3;
}


function redirectPage(){
    console.log(flag);
    var redirectUrl = document.getElementById("form-url");
    switch (flag){
        case 1:
            redirectUrl.action = 'guide.html';
            break;

        case 2:
            redirectUrl.action = 'content.html';
            break;
        case 3:
            redirectUrl.action = 'list.html';
            break;
        default: redirectUrl.action = 'content.html';
            break;
    }
}



