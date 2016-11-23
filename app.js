

var request = require('request');
var myJSONMessage = {
  		
    "text": "I am Blah Blah Blah",
    "username": "bot",
   	"color": "#36a64f",
    "icon_emoji": ":ghost:",


            "fields": [
                {
                    "title": "Interests",
                    "value": "Javascript",
                    "short": false
                }
            ]
   
};

request({
    url: "#yourslackchanneltoken",
    method: 'post',
    json: myJSONMessage
}, function (error, response, body){
     if (!error && response.statusCode == 200) {
            console.log(body)
        }
});


