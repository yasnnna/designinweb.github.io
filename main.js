var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/logo-test-1.png'){
      myImage.setAttribute ('src','images/logo-test-2.png');
    } else {
      myImage.setAttribute ('src','images/logo-test-1.png');
    }
}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Jak na tebe volají?.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Vítej, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Vítej, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}