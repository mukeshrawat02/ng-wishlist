(function (authenticationController) {

    authenticationController.init = function (router, data) {
        router.route('/login')
              .post(function (req, res) {
                 console.log('processing');
                 res.send('processing the login form!');
               });
    };

})(module.exports);