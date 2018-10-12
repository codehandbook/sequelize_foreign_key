const Sequelize = require('sequelize');
const sequelize = new Sequelize('seq_db', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});
const models = require('./models')

models.UserTask.findAll({
    raw: true,
    attributes: [],
    include: [
      {
        model: models.Task,
        attributes: [['taskName','Task']],
      },
      {
        model: models.User,
        attributes: [['firstName','First Name'], ['lastName','Last Name']],
      }
    ]
  })
.then(function(result){
  console.log(result)
})