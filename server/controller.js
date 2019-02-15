module.exports = {

    getAll:(req, res) => {
        const dbInstance=req.app.get('db')
        dbInstance.getProducts().then((response) =>{
            res.status(200).send(response)
        })
    },

    getOne:(req, res) => {
        const dbInstance=req.app.get('db')
        const {id} =req.params
        dbInstance.getOneProduct(id).then((response) => {
            res.status(200).send(response)
        })
    
    },

    addProduct:(req, res) => {
        const dbInstance=req.app.get('db')
        const {name, price, image_url} = req.body
        dbInstance.addProduct(name, price, image_url).then((response) => {
            res.status(200).send(response)
        })
    },

    deleteProduct:(req, res) => {
        const dbInstance=req.app.get('db')
        const {id}=req.params
        dbInstance.deleteProduct(id).then((response) => {
            res.status(200).send(response)
        })
    },

    updateProduct:(req, res) => {
        const dbInstance=req.app.get('db')
        const {id} = req.params
        const {name, price, image_url}=req.body
        dbInstance.updateProduct(id, name, price, image_url).then ((response) => {
            res.status(200).send(response)
        })
    }


}