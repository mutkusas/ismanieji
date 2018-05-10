module.exports = function(app){
    var schools = require('./controllers/schools.js');
    var players = require('./controllers/players.js');
    var questions = require('./controllers/questions.js');
    var answers = require('./controllers/answers.js');
    
    //mokyklos
    app.get('/schools', schools.getAll);
    app.post('/schools', schools.add);
    
    //zaidejai
    app.get('/players', players.getAll);
    
    //atsakymu lapeliai
    app.post('/answers', answers.add);
    app.get('/answers', answers.getAll);
    
    //klausimai
    app.get('/questions', questions.getAll);
    app.post('/questions', questions.add);
    
}