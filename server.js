const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World');
res.end(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>  Sajid Softwere Developer         </title>
<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>

<style type="text/css">
body{
margin: 0;
padding: 0;
font-family: "monteerrat",sans-serif;
background:#111;
top: 50%;
left: 50%;
position: absolute;
transform: translate(-50%,-50%);
}
.share{
width: 280px;
height: 80px;
border-radius: 40px;
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
position: relative;
cursor: pointer;
transition: 1.8s ease;
border:2px solid #fff;
font-size:24px;
}
.share:hover{
transform: scale(1.1);

}
span{
position: absolute;
width: 100%;
height: 100%;
background: #fff;
color: #111;
text-align: center;
line-height: 80px;
z-index: 999;
transition: .6s linear;
border-radius: 40px;

}
.share:hover span{
transform:rotateX(90deg);
transition-delay: .3s;
margin-bottom: 50%;

}
.share a{
flex: 1;
font-size: 26px;
color: #fff;
text-align: center;
transform: translateY(100%);
opacity: 0;
transition: 0.3s linear;

}
.share:hover a{
opacity: 1;
transform: translateX(0);
}
a:nth-of-type(1){
transition-delay: 1s;

}
a:nth-of-type(2){
transition-delay: 0.8s;

}
a:nth-of-type(3){
transition-delay: 0.6s;

}
a:nth-of-type(4){
transition-delay: 0.4s;

}
.fa-linkedin:hover{
color:#0e76a8;
transform: scale(1.5);

}
.fa-google{
transition: 0.5s ease-in;

}
.fa-google:hover{
color:#3cba54;
transform: scale(1.5);
}
.fa-instagram{
transition: 0.5s ease-in;

}
.fa-instagram:hover{
color: #405DE6;
transform: scale(1.5);
}
.fa-youtube{
transition: 0.5s ease-in;
}
.fa-youtube:hover{
color:red;
transform: scale(1.5);
}

</style>
</head>
<body>
<div class="share">
<span>
<i class="fas fa-share-alt"></i> Share!

</span>
<a href="#"><i class="fab fa-linkedin"></i></a>
<a href="#"><i class="fab fa-google"></i></a>
<a href="#"><i class="fab fa-instagram"></i></a>
<a href="#"><i class="fab fa-youtube"></i></a>

</div>
</body>
</html>
`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
