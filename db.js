var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/csforum');


var Schema = mongoose.Schema;

var articleSchema = new Schema({
    articleID: Number,
    title    : String,
    author   : String,
    authorID : Number,
    up       : Number,
    down     : Number,
    pageview : Number,
    body     : String
});

var Article = mongoose.model('articles', articleSchema);

module.exports = Article

/*var article = new Article({
    articleID: 1,
    title    : "Hi World",
    author   : "Saltfish",
    authorID : 1,
    up       : 233,
    down     : 43,
    pageview : 34343,
    body     : "today,I am happy for learn those knowleges!!!"
})
//保存数据库
article.save(function(err) {
    if (err) {
        console.log('保存失败')
        return;
    }
    console.log('meow');
});*/