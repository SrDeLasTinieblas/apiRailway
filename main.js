const Koa = require('koa');
const app = new Koa();


app.use(async ctx => {
      res.json(
        mensaje:"Nodejs and JWT"
});


const PORT = 5000

app.listen(process.env.PORT || PORT, () => console.log("Corriendo en el puertoo ==> " + PORT));
