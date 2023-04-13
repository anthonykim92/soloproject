const PersonController = require('../controllers/person.controllers.js');

module.exports = (app) => {
    app.get('/api/person', PersonController.findAll)
    app.get('/api/person/:id', PersonController.findOne)
    app.post('/api/person', PersonController.create)
    app.put('/api/person/edit/:id', PersonController.update)
    app.delete('/api/person/:id', PersonController.delete)
}