let express = require('express');
let cors = require('cors');


let app = express();

app.use(express.json());
app.use(cors());

const adminRouter = require('./Routes/AdminRoutes')
const productRouter = require('./Routes/ProductsRoutes')

app.use('/', adminRouter)
app.use('/', productRouter)


module.exports = app;




