module.exports=function(app) {
  // app.get('/', function(req,res){
  //   res.render('index.html')
  // });

  app.route('/')
    .get(function(req,res){
    res.render('index.html');
  })
  .post(function(req, res){
    res.send('New Game');
  });

  app.get('/game', function(req, res){
    res.render('game.html')
  });

  app.get('/choose', function(req, res){
    res.render('choose.html')
  });

  app.post('/choose', function(req, res){
    res.render('choose.html')
  });

}
