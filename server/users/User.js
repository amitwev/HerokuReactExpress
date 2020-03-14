const db = require('../DB/db');

module.exports = (app) => {
    app.post('/user', async (req, res) => {
        console.log("inside users/user post"); 
        const dbResult = await db.query("select * from users"); 
        console.log("result from DB = ", dbResult);
        if(res.rowCount > 0 ){
            res.status(200).json(dbResult);
        }else{
            res.status(500).json(dbResult);
        }
        // res.status(200).send({
        //     succeeded: true, 
        //     user: {
        //         name: "Amit",
        //         lastName: "Salim",
        //         id: 1
        //     }
        // })
    })
}