const express = require('express');
const UserRouter = require('./routers/UserRouters');
const ProductRouter = require('./routers/ProductRouter');
const app = express();
const port = 5500;

//middleware
app.use(express.json());
app.use('/user', UserRouter);
app.use('/product', ProductRouter);

//enfpoint or route
app.get('/', (req, res) => {
    res.send('response from express');
});
app.get('/', (req, res) => {
    res.send('response from add');
});

//getall
app.get('/getall', (req, res) => {
    res.send('response get all');
});

app.listen(port, () => {
    console.log('express server started');
});