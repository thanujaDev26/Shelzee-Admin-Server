let mongoose = require('mongoose');
let app = require('./index')
require('dotenv').config();

let port = process.env.PORT || 3001;
let uri = process.env.DATABASE_URL;

mongoose.connect(uri, {
    useNewUrlParser: true,
}).then((connection) => {
    // console.log(connection);
    app.listen(port, '127.0.0.1', () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch((error)=>{
    console.log("Failed to connect to MongoDB", error);
})
