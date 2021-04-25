const express = require('express')
// 모듈 가져오기
const app = express()
// 새로운 익스프레스 앱을 만듦
const port = 5000
// 포트 아무거나 해도 됨.

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://pys:vhzkfl1q@W@cluster0.kcjq3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false
}).then(()=>console.log('MongoDB Connected...')).catch(err=>console.log(err))
// true false 값은 에러 메세지가 안나오게 하기 위함임.

app.get('/', (req, res) => {
  res.send('Hello World! 2')
})
// 헬로우 월드 출력
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
// 5000 번에서 실행한다는 뜻.


