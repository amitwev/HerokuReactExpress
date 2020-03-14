module.exports = (app) => {
    app.post('/user', (req, res) => {
        console.log("inside users/user post"); 
        res.status(200).send({
            succeeded: true, 
            user: {
                name: "Amit",
                lastName: "Salim",
                id: 1
            }
        })
    })
}