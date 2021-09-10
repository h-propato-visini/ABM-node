class UsersControllers {
    constructor() {
        this.users = []
    }

    addUser(req, res) {    
        const body = req.body 
        this.users.push(body)
        
        return res.json({
            users: this.users
        })
    }
} //1:20

module.exports = UsersControllers