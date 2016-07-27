(function (config) {

    config.database = 'mongodb://localhost/favLister';
    config.secretKey = '12qwaszx!"';
    config.port = process.env.PORT || 3000;

})(module.exports);