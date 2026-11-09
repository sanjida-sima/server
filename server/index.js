import express from 'express';
const app = express();
const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => {
res.send('hello world from express.js')
})
app.get('/be-touched', (req, res) => {
res.send('touch with us')
})
app.get('/information', (req, res) => {
res.send('information ')
})
app.get('/about-us', (req, res) => {
res.send('about page')
})
app.get('/contact', (req, res) => {
res.send('contact')
})
const users = [
  {id: 1, name: 'sima', email: 'sima@.com'},
  {id: 2, name: 'ema', email: 'ema@.com'},
  {id: 3, name: 'sia', email: 'sia@.com'},
  {id: 4, name: 'simia', email: 'simia@.com'},
  {id: 5, name: 'sila', email: 'sila@.com'}
  
];
app.get('/users', (req, res) => {
res.send(users)
})


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})