const { response } = require("express");
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { get } = require("mongoose");
// const mongoose = require("mongoose");
require("dotenv").config();
// express instance
const app = express();
app.use(cors());

app.get("/api/v1/breachedaccount/:account", (request, response) => {
  // console.log(request.params.account);
  var URL = "https://haveibeenpwned.com/api/v3/breachedaccount/" + request.params.account ;
  axios({
    method: "get",
    url: URL,
    headers: {
      "hibp-api-key": "742b43f7494c446f9dc816f951c3679b",
      "Content-Type": "application/json",
      "User-Agent": "pwned-aic",
    },
  }).then((res) => {

    if(res.status == 200){
      var breaches = res.data;
      var breachDetails = []

      async function getllBreaches(breaches) {
        for(var breach of breaches){
          await axios({
            method: "get",
            url: "https://haveibeenpwned.com/api/v3/breach/" + breach.Name,
            headers: {
              "hibp-api-key": "742b43f7494c446f9dc816f951c3679b",
              "Content-Type": "application/json",
              "User-Agent": "pwned-aic",
            },
          }).then((res) => {
            breachDetails.push(res.data);
            // console.log(res.data);
          });
        }
        
        console.log(breachDetails);
        response.json(breachDetails);
      }

      getllBreaches(breaches);

    } else {
      response.status(400).json({msg: "No breaches were found!"});
    }
  }).catch(error => { 
    response.status(400).json({msg: "No breaches were found!"});
  });

})


// db config
// const uri = process.env.URI;

// connect to mongo
// mongoose
//   .connect(uri, { useNewUrlParser: true, useCreateIndex: true })
//   .then(() => console.log("MongoBD Connected!"))
//   .catch((err) => console.log(err));
// start server and listen to specified port

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
