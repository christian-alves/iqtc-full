const Course = require('../models/Course')

module.exports = {
    async store(req, res){
        const {filename} = req.file
        const {name, price, category} = req.body
                
        const course = await Course.create({
            thumbnail: filename,
            name,
            category,
            price
        })

        return res.json({ok:true})
    }
}