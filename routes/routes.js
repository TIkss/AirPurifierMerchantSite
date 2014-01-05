


module.exports = function(app,smtpTransport){

	app.get('/', function(req,res){
		res.render('index',{home:'active'});
	});

    app.get('/products',function(req,res){
        res.render('products',{products:'active'})
    });

    app.get('/price', function(req,res){
        res.render('price',{price:'active'})
    });
    app.get('/contact',function(req,res){
        res.render('contact', {contact:'active'})
    });
    app.get('/question',function(req,res){
        res.render('question', {question:'active'})
    });
    app.post('/contact',function(req,res){
        req.body
        var mailOptions = {
            from: "", // sender address
            to: 'sunynick@gmail.com',
            subject: "contact by buyer", // Subject line
            text: "name: "+req.body.name+ "-- contacted you,"+" email("+req.body.email+") \nmessage:"+req.body.message+"\nphnoe:"+req.body.phone , // plaintext body
            
        }
        smtpTransport.sendMail(mailOptions, function(error, response){
            if(error){
                console.log(error);
            }else{
                console.log("Message sent: " + response.message);
            }

            // if you don't want to use this transport object anymore, uncomment following line
            //smtpTransport.close(); // shut down the connection pool, no more messages
        });
        res.redirect('back');
    })
}