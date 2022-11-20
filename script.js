const inputEmail = document.getElementById('input-email');
const inputPassword = document.getElementById('input-password');

const emailWarning = document.getElementById('input-email-warning');
const passWarning = document.getElementById('input-password-warning');

function checkForErrors(inputValue, warningElement) {

    let error = false;

    if(inputValue === '') {
        warningElement.innerHTML = 'This field is required';
        error = true;
    } else if (inputValue.length < 6) {
        warningElement.innerHTML = 'Must be at least 6 characters';
        error = true;
    } else {
        warningElement.innerHTML = '';
    }

    return error;

}

function login() {
    const emailError = checkForErrors(inputEmail.value, emailWarning);
    const passError = checkForErrors(inputPassword.value, passWarning);

    if(!emailError && !passError) {
        location.href = location.href + 'success.html';
    }
}

function myFunction(){
    var x = document.getElementById("myFile");
    var txt = "";
    if ('files' in x) {
      if (x.files.length == 0) {
        txt = "Select one or more files.";
      } else {
        for (var i = 0; i < x.files.length; i++) {
          txt += "<br><strong>" + (i+1) + ". file</strong><br>";
          var file = x.files[i];
          if ('name' in file) {
            txt += "name: " + file.name + "<br>";
          }
          if ('size' in file) {
            txt += "size: " + file.size + " bytes <br>";
          }
        }
      }
    } 
    else {
      if (x.value == "") {
        txt += "Select one or more files.";
      } else {
        txt += "The files property is not supported by your browser!";
        txt  += "<br>The path of the selected file: " + x.value; // If the browser does not support the files property, it will return the path of the selected file instead. 
      }
    }
    document.getElementById("demo").innerHTML = txt;
  }

  function randomnumber(){
    var down = document.getElementById('demo1');
    var minm = 100000;
    var maxm = 999999;
    down.innerHTML = Math.floor(Math.random()*(maxm - minm+1))+minm;
  }