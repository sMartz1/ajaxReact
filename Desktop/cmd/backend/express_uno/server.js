const express = require('express');
const dtenv = require('dotenv').config();
const axios = require('axios');


const app = express();

const port = process.env.PORT || 5000;


app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get('/summoner/', (req, res) => {
	axios.get('https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+req.query.name+'?api_key='+process.env.API_KEY)
        .then(response => {
        	res.send({
        		summoner: response.data
    		});
           
            console.log(response.data);  
            
        })
        .catch(error => {
            console.log(error);
           
        });

    



    console.log("Mensaje proporcionado por /api/hello");
});

app.listen(port, () => console.log(`Listening on port ${port}`));