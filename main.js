var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'logo-test-1.png'){
      myImage.setAttribute ('src','logo-test-2.png');
    } else {
      myImage.setAttribute ('src','logo-test-1.png');
    }
}

