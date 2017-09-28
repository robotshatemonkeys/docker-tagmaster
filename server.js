var app           = require('./app');
var mongoose      = require('mongoose');

var port          = process.env.PORT || 3000,
    ip            = process.env.IP || '0.0.0.0',
    mongo_host    = process.env.MONGO_HOST;

console.warn(process.env);


if (typeof ip === "undefined") {
  console.warn('No NODEJS_IP var, using 127.0.0.1');
  ip = "127.0.0.1";
}

var db = null;

var initDb = function(callback) {

  if (typeof mongo_host === "undefined") {
    mongo_host = "mongodb://"+ip+':27017/';
    console.warn('LOCAL DB on',mongo_host);

  }



  let options = {
    server: {
      socketOptions: { keepAlive: 1 }
    }
  };

  mongoose.connect(mongo_host, options).then(
    () => {
      console.log('Connected to MongoDB at: %s', mongo_host);
      db = "connected";
    },
    err => {
      console.log(err);
      callback(err);
      return;
    }
  );
};


if (!db) {
  initDb(function(err){
    console.log('Error connecting to Mongo. Message:\n'+err);
  });
}

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

// EXPORTED APP FOR TESTING.
module.exports = app;
