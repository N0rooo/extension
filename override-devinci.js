document.getElementsByTagName('body')[0].classList.add('override');

var student_photo = document.getElementsByClassName("img-polaroid avatar")[0];

student_photo.src = "https://zupimages.net/up/21/37/bjc1.jpg";


var alert_info = document.getElementsByClassName("alert alert-info")[0];

alert_info.innerHTML = "<h1 id='alert_info_text'> <i><strong><u>BIENVENUE A L'IMM</u></strong></i> </h1>";

var alert_info_text = document.getElementById('alert_info_text');


function alert_infos_red() {
    alert_info_text.style.color = 'red';
    alert_info_text.style.fontSize = '90px';
}

function alert_infos_green() {
    alert_info_text.style.color = 'green';
    alert_info_text.style.fontSize = '70px';
}

function alert_infos_blue() {
    alert_info_text.style.color = 'blue';
    alert_info_text.style.fontSize = '40px';
}

function alert_infos_colors() {
    setTimeout(alert_infos_red, 0000);
    setTimeout(alert_infos_green, 1000);
    setTimeout(alert_infos_blue, 2000);  
    setTimeout(alert_infos_colors, 3000); 
}


alert_infos_colors();    

