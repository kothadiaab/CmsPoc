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



jQuery(document).ready(function ($) {

    $("#contentarea").contentbuilder({
        //zoom: 0.85,
        snippetOpen: true,
        //toolbar: 'left',
        snippetFile: 'assets/default/snippets.html'
    });

});


function view() {
    var sHTML = $('#contentarea').data('contentbuilder').viewHtml();
    //alert(sHTML);
}



String.prototype.has = function (pStr){ return (this.indexOf(pStr) != -1); }


String.prototype.replaceToken = function(pStr,pToken,pRepl)
{
    var rv = pStr;
    while (rv.has(pToken))
        rv = rv.replace(pToken, pRepl);

    return rv;

}

String.prototype.replaceTokens   = function ()
{
    var rv = this.valueOf(), re, tkn, a = arguments, l = a.length;
    for ( var i = 0; i < l; i++ )
        rv = this.replaceToken(rv,"#" + ( i + 1 ) + "#",a[i]);
    return rv;
}

function insertListing(){

    var replaceKeyWord="#1#" ,
        baseurl="http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsAdvanced&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=ebayaed51-fd9d-4e40-8149-4a3546a65ad&RESPONSE-DATA-FORMAT=XML&REST-PAYLOAD&paginationInput.entriesPerPage=2&keywords=#1#",
        srchTxt = $("#keytxt").val()
    baseurl = baseurl.replaceToken(baseurl,"#1#" , srchTxt),
        trStr="<tr class='table'><td style='color: blue; text-decoration: underline; font-size: 12px; text-align: justify'>#1#</td><td>#2#</td><td><img src='#3#'/></td></tr>",
        anchorTxt ="You can buy an <a href='#1#'> #2# </a> on ebay.com";
    $('#listingTable tr:gt(0)').remove();
    $("#listingTable").hide();
    $("#cntDiv").html("");
    $.ajax({
        url: baseurl,

        dataType: "jsonp",
        jsonp: "callback",

        success: function (data) {

//            console.log(data);


            var items = data.findItemsAdvancedResponse[0].searchResult[0].item, oRowWithData, oLnkwithData;

            for (var item in items) {
                console.log(items[item]);
                oRowWithData = trStr.replaceTokens(items[item].viewItemURL[0],
                    items[item].title[0],items[item].galleryURL[0]);
                $('#listingTable tr:last').after(oRowWithData);
            }
            document.getElementById("listingModal-content").style.height = '500px';
            $("#listingTable").show();
            oLnkwithData = anchorTxt.replaceTokens(data.findItemsAdvancedResponse[0].itemSearchURL[0],srchTxt);
            $("#cntDiv").html(oLnkwithData);
        }
    });

}


var listingModal = document.getElementById("listingModal");

function listingPop(){
    listingModal.style.display = "block";
}

var listingTopCancel = document.getElementById("listing-cancel");
var listingCancel = document.getElementById("listingCancel-button");

listingTopCancel.onclick = function() {
    listingModal.style.display = "none";
}

listingCancel.onclick = function() {
    listingModal.style.display = "none";
}

$("div.table-responsive table tbody tr").click(function() {
    var tableData = $(this).children("td").map(function() {
        return $(this).text();
    }).get();

    alert("Your data is: " + $.trim(tableData[0]) + " , " + $.trim(tableData[1]) + " , " + $.trim(tableData[2]));
});




