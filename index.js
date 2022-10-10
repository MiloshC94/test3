var request = require('request');


request({
    url: "https://time.mk/",
    method: "GET"
}, function (error, response, body){
    console.log(body);
});