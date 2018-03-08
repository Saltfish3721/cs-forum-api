var express = require('express');

var Article = require('./db.js')


var app = express();
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost:27017/csforum');
var bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }))

//due to async it does not work
/*app.get('/api/topic',function(req,res){
	var a = Article.find({"articleID":1},function(err,doc){
		console.log(doc)
		var doc_to_json = JSON.parse({"feeds":doc})

		res.json(doc_to_json)
		res.seed(doc)
	})

	var query = Article.find({"articleID":1})
	query.limit(1)
    console.log(query.model.Schema)
	res.json(query)
	console.log(a)
    res.send("hi")
})*/

app.post('/api/post/article',function(req,res){

    var article = new Article({
		    articleID: 1,
		    title    : req.body.title || "HIMAN",
		    author   : "Saltfish",
		    authorID : 1,
		    up       : 233,
		    down     : 43,
		    pageview : 34343,
		    body     : "today,I am happy for learn those knowleges!!!"
    })

    article.save(function(err) {
    if (err) {
        console.log('保存失败')
        return;
    }
    console.log('meow');
    });

    res.send("ok")
})


app.listen(3000,function(){
	console.log('listening 3000')
})



















