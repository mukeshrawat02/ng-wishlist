(function (userController) {

    var User = require('./models/user');

    var register = function (req, res) {
        var user = new User();
        user.username = req.body.name;

        // Save the user and check for errors
        user.save(function (err) {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'User has been added!', data: user });
        });
    };

    return {
        register: register
    };

})(module.exports);