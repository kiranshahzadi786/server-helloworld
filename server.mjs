console.log(" I am hello world server")
import express from'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Helloworld server listening on port ${port}`)
})