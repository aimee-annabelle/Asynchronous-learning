function double(number){
    return new Promise((resolve) => {
        resolve(number*2)
    })
}

double(5).then((v)=>{
  return v + 10
}).then(b =>{
  return b*3;
}).then(result =>{
  console.log(result)
})