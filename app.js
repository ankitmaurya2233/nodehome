const http=require('http');
const server=http.createServer((req,res)=>{
    const url=req.url;
    res.setHeader('Content-Type','text/html');
    if(url=='/home'){
        res.write('<h1>Welcome home</h1>');
        res.end();
    }else if(url=='/about'){
        res.write('<h1>Welcome to About Us page</h1>');
        res.end()
    }else if(url =='/node'){
        res.write('<h1> Welcome to my Node Js project</h1>');
        res.end();
    }else{
        res.write('<h1>Error</h1>');
        res.end();
    }
});
server.listen("3000");