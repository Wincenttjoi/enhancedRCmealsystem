const {StudentMealPlan} = require('../models/')

module.exports = {
    async getStudentMealPlan (req, res) {
        try {
            const studentMealPlan = await StudentMealPlan.findOne(
            {
                where: {
                    UserId: req.body
                }
            })
            res.send(studentMealPlan)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to get student meal plan'
            })
        }
    },

    async registerMealPlan (req, res) {
        try {
            const studentMealPlan = await StudentMealPlan.create(req.body)
            res.send(studentMealPlan)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to register meal plan'
            })
        } 
    }
}