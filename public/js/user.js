
function checkUser(){
    var localUrl = window.location.href;
    var valueUrl = localUrl.split("/").pop();
    if(valueUrl == 'socio' ){

      localStorage.userSocio != "true" ? window.open('/socio-laboratorio', '_self') : null;
    }else{
      localStorage.userLab != "true" ? window.open('/socio-laboratorio', '_self') :  null;
    }

}

$('#logout').click(function (){
  localStorage.userSocio =false;
  localStorage.userLab = false;
  console.log(localStorage);
});
