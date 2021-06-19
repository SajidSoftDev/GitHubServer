const http=require('http');
const fs=require('fs');
const hostname = '127.0.0.1';
const port = 3000;
const home=fs.readFileSync("./index.html");
const about=fs.readFileSync("./About.html");
const contact=fs.readFileSync("./Contact.html");
const Service=fs.readFileSync("./Service.html");
const server=http.createServer((req,res ) =>{
    console.log(req.url);
    url=req.url;
    
    res.setHeader('Content-Type', 'text/html');
    if(url=='/')
    {
        res.end(home);
    }
    else if(url=='/About.html')
    {
        res.end(about);
    }
    else if(url=='/Contact.html')
    {
        res.end(contact);
    }
    else if(url=='/Service.html')
    {
        res.end(Service);
    }
    else
    {
        res.statusCode = 404;
        res.end('<h1>404 not found</h1>');
    }
    

})
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });