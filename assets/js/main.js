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
var emailtoken;
var username;
var studenti;

function make_base_auth(user, password) {
    var tok = user + ':' + password;
    var hash = btoa(tok);
    return "Basic " + hash;
}

function logIn() {
username = document.getElementById("email").value;
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
          emailtoken = username;
        },
        async: false,

        error: function (response){
          alert("Niste se uspesno ulogovali!");
        }

    });
}

function getData() {
  $.ajax({
    url: 'http://192.168.0.104:8080/hashfon/rest/student',
    dataType: 'json',
    success: function(response){
        studenti = response;
        napuniInfo();


    }
  });


}

function napuniInfo() {
    alert(emailtoken);
  for (var i = 0; i < studenti.length; i++) {
    if (studenti[i].email == emailtoken) {
      trenutniUser = studenti[i].email;
      alert(trenutniUser.prezime);
    }
  }
}

function koko(){
  alert(emailtoken);

}


$(document).ready(function() {
  getData();

});
