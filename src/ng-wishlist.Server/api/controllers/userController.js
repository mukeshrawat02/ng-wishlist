(function (userController) {

    userController.init = function (router, data) {
        router.route('/register')
            .post(function (req, res) {
                console.log('processing');
                res.send('processing the login form!');
            });

        router.route('/profile')
            .get(function (req, res) {

            })
            .post(function (req, res) {
                console.log('processing');
                res.send('processing the login form!');
            });
    };

})(module.exports);