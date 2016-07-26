(function (authenticationController) {

    authenticationController.init = function (app) {
        app.route('/login')
            .get(function (req, res) {
                res.send('this is the login form');
            })
            .post(function (req, res) {
                console.log('processing');
                res.send('processing the login form!');
            });
    };

})(module.exports);