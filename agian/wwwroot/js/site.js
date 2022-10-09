// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.



$(document).ready(function () {
    $("#pincode").keyup(function () {
        var el = $(this);

        if (el.val().length === 5) {
            $.ajax({
                url: "https://api.postalpincode.in/pincode/",
                cache: false,
                dataType: "json",
                type: "GET",
                data: "zip=" + el.val(),
                success: function (result, success) {
                    $("#city").val(result.city);
                }
            });
        }
    });
});

var cAddress = document.getElementById("address");
var pAddress = document.getElementById("addressp");
var checkBox = document.getElementById("vehicle1");
var key = false;


function smaeCurrentAndpar() {


    console.log(cAddress.value);
    
    pAddress.value = cAddress.value;
    const h1 = document.getElementById("addressp");
    h1.setAttributeNode(att);
    key = false;
}

function smaeCurrentAndparhide() {
    
    pAddress.removeAttribute("disabled");
    if (checkBox.checked == false) {
        pAddress.value = "rishabh";
    }

    key = true;
}

function toggleThe() {
    key ? smaeCurrentAndpar() : smaeCurrentAndpar(); 
}

function openDivTraining() {
    document.getElementById('divTraining').style.display = 'block';
    document.getElementById('divInternship').style.display = 'none';
    document.getElementById('divJob').style.display = 'none';
}

function openDivInternship() {
    document.getElementById('divInternship').style.display = 'block';
    document.getElementById('divTraining').style.display = 'none';
    document.getElementById('divJob').style.display = 'none';
}


function openDivJob() {
    document.getElementById('divJob').style.display = 'block';
    document.getElementById('divInternship').style.display = 'none';
    document.getElementById('divTraining').style.display = 'none';
}
function alertshow() {
    if ($("#name").val() == "") {
        $('#name').removeClass('bordernone');
        $('#name').addClass('textbox');
    }
    else {
       // $('#name').removeClass('textbox');
    }
    //alert("We will let you know thank you for showing your intrest");
}