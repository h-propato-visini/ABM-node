class UsersControllers {
    constructor() {
        this.users = [],
        this.counter = 0
    }

    addUser(req, res) {    
        let body = req.body
        this.counter = this.counter + 1
        body.id = this.counter
        
        this.users.push(body)
        
        return res.json({
            users: this.users
        })
    }

    sendUser(req, res) {
        return res.json({
            users: this.users
        })
    }

    getUserById(req, res) {
        const id = req.params.id
        this.users.map((user) => {
            if(user.id == id) {
                return res.json({
                    user: user
                })
            }
        })
        return res.sendStatus(404)
    }

    modify(req, res) {
        const id = req.params.id
        const body = req.body

        this.users.map((user, i) => {
            if (user.id == id) {
                body.id = id
                this.users[i] = body
                return res.json({
                    user: this.users[i]
                })
            }
        })

        return res. sendStatus(404)
    }

    delete(req, res) {
        const id = req.params.id
        console.log(id)
        console.log(this.users)
        const userIndex = this.users.findIndex(user => user.id == id)
        console.log(userIndex)
        this.users.splice(userIndex, 1)

        return res.send()
    }

}

module.exports = UsersControllers