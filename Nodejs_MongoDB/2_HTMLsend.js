// html file 보내기

const express = require('express')
const app = express()

app.listen(8000, function(){
  console.log('listenis on 8080')

});


app.get('/hello', function(요청, 응답){
    응답.send(__dirname + '/2-1_hello.html');
 });
