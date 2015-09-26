$('#logIn').click(function () {
    logIn();
});

//za enter
// document.onkeydown = function (evt) {
//     if(evt.keyCode == 13){
//         $("#logIn").click();
//     }
// };

var json_token;

function make_base_auth(user, password) {
    var tok = user + ':' + password;
    var hash = btoa(tok);
    return "Basic " + hash;
}

function logIn() {
var username = document.getElementById("email").value;
var password = document.getElementById("password").value;
    $.ajax({
        type: "POST",
        url: "http://192.168.0.104:8080/hashfon/rest/student/login",
        dataType: "json",
        headers: {
            'Content-Type': 'application/json'
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', make_base_auth(username, password));
        },
        success: function (response) {
          json_token = response;
          location.href = "pocetna.html";
        },
        error: function (response){
          alert("Niste se uspesno ulogovali!");
        }
    });
}












$(document).ready(function() {
  $('#editStudent').click(function() {
    $('.editable').css('border', '1px solid #23717A');



  });
});
