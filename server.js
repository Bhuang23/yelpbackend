
var express = require('express');
var cors = require('cors');

const dotenv = require('dotenv');
const axios = require('axios');
const bodyParser = require("body-parser");
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.get('/getbusiness', (req, res) => {
    const term = req.query.term;
    console.log(term)
    axios.get('https://api.yelp.com/v3/businesses/search',
        {
            params: {
                location: "Naperville,IL, US",
                term: term
            },
            headers: {
                Authorization: `Bearer M4HMGOWWUjjWf2qul6j4IHeOiZ3SNXM-Hx4ig0npC1ZfFy-0Hgr6yasQ36YKEvkkt9jnVTtF7YWDBUDO-JP7uPn87uzt3N-aCi2Db5ZvTKzqiaSt6EiEoQR49MXCYXYx`,
            }
        }
    )
        .then(response => {
            //console.log(response.data.businesses);
            res.send(response.data.businesses)
        })
        .catch(error => {
            console.log(error);
            res.send(error);
        });
    })

// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})
