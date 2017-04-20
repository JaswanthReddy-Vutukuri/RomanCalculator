//Configure routes here
var calcController = require('./controllers/calc-controller.js');

module.exports = function(app) {

	app.post('/api/calculate', calcController.findResult);

	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};