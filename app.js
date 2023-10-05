const getTodos=(resurse ,callback)=>{
    const request=new XMLHttpRequest()
    request.addEventListener('readystatechange',()=>{
        if (request.readyState===4 && request.status===200) {
            const data=JSON.parse(request.responseText)
            callback(undefined,data)
            
        }else if (request.readyState===4 ) {
            callback('no page', undefined)
            
        }
    })

    request.open('GET',resurse)
    request.send()
}


getTodos('./data.json',(err ,data)=>{
  if (err) {
    console.log(err);
    
  }else{
    console.log(data);
  }
  getTodos('./app2.json',(err,data)=>{
    console.log(data);

  })
})