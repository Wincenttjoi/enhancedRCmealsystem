const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationContollerPolicy')
const MealsController = require('./controllers/MealsController')

module.exports = (app) => {
    app.post('/register', 
       // AuthenticationControllerPolicy.register,
        AuthenticationController.register)

    app.post('/login',
        AuthenticationController.login)

    app.get('/HomePage',
        MealsController.getMeals)

    app.post('/HomePage', 
        MealsController.addMeal)
}