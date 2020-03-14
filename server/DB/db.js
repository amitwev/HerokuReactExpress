// FIRST - heroku addons:create heroku-postgresql:hobby-dev - run this to add postgres to heroku

// heroku config:set DB_HOST='ec2-52-23-14-156.compute-1.amazonaws.com'
// heroku config:set DB_DATABASE= 'd528j3gvnrqqcc'
// heroku config:set DB_USER= 'cdcwnwbfhuzcve'
// heroku config:set DB_PORT= '5432'
// heroku config:set DB_PASSWORD = 'fce4c41930088a3f5e8256d36d7ca1f7a705116816c33e70e8b248deb5c307ea'

module.exports = {
    query: async (str) => {
        return new Promise((resolve, reject) => {
            let db = require('./dbConnection')();
            db.connect();
            console.log("after DB connection");
            db.query(str)
                .then(res => {
                    resolve(res);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                })
        })
    }
}