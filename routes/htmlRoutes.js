// Dependencies
var path = require('path');

// Routing
module.exports = function (app) {

    // HTML GET Requests
    // --------------------------------------------------------------------------- 
    // connects to survey page 
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, '../public', 'survey.html'));
    });

	// connects to home page
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public', 'home.html'));
    });
};

// module.exports = function(app) {

// 	// connects to survey page 
// 	app.get('/survey',function(req, resp) {
// 		resp.sendFile(path.join(__dirname + '/../public/survey.html'));
// 	});

// 	// connects to home page
// 	app.get('/', function(req, resp) {
// 		resp.sendFile(path.join(__dirname + '/../public/home.html'));
// 	});
// }