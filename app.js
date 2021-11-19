const express = require('express');
const app = express();

app.use(express.static(__dirname+'/public'));

app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.render("/index.html");
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running!');
});

