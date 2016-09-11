var mongoose = require('mongoose');

before(function(done) {
    db = mongoose.connect('mongodb://localhost/test');
        done();
});

after(function(done) {
    mongoose.connection.close();
    done();
});
