var express = require('express');
var router = express.Router();
var connection = require('../Connection');

var data = {
	count : 10,
	description : "test description",
	eid : 1,
	name:"oats",
	price: 20,
	url: "www.testzigwee.com",
	item_type: "food"
};

router.route('/posts')

	.post(function(req,res)
	{
		connection.query('insert into eateries set ?',data, function(err, result) {
			if(err) {
				res.send({message: err});
				return;
			}
			else {
				res.send({message: result});
			}
		});
	})

	.get(function(req,res)
	{
		res.send({message:"TODO get all the posts in the database"});
	})

//api for a specfic post
router.route('/posts/:ids')

    //create
    .put(function(req,res){
        return res.send({message:'TODO modify an existing post by using param ' + req.params.ids});
    })

    .get(function(req,res){
        return res.send({message:'TODO get an existing post by using param ' + req.params.ids});
    })

    .delete(function(req,res){
        return res.send({message:'TODO delete an existing post by using param ' + req.params.id});
    })

module.exports = router;