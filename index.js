function func(){
    var name = document.getElementsByClassName('input1')[0].value;
    var email = document.getElementsByClassName('input2')[0].value;
    var message = document.getElementsByClassName('input3')[0].value;
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://127.0.0.1:5000/students");

    let data = `{
    "name":"${name}",
    "email":"${email}",
    "message":"${message}"
    }`;
    xhr.send(data);
    document.getElementsByClassName('input1')[0].value='';
    document.getElementsByClassName('input2')[0].value='';
    document.getElementsByClassName('input3')[0].value='';
};

function func2(){
    document.getElementsByClassName('input1')[0].value='';
    document.getElementsByClassName('input2')[0].value='';
    document.getElementsByClassName('input3')[0].value='';
}
function getWinDim()
{
    var body = document.documentElement || document.body;

    return {
        x: window.innerWidth  || body.clientWidth,
        y: window.innerHeight || body.clientHeight
    }
}
function imagechanger(cls){

    const img1 = new Image(); // Image constructor
    
    var s = document.getElementsByClassName(cls)[0].src;
    img1.src = s;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
  
    // Set width and height
    canvas.width = getWinDim().x;
    canvas.height = getWinDim().y;

    // Draw image and export to a data-uri
    ctx.drawImage(img1, 0, 0, canvas.width, canvas.height);
    const dataURI = canvas.toDataURL();
  
    // Do something with the result, like overwrite original
    img1.src = dataURI;
    document.body.style.backgroundImage = `url(${img1.src})`;
}