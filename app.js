var express = require ("express"),
	app = express();
	mongoose= require("mongoose"),
    bodyParser= require("body-parser"),
	Contact = require("./models/contacts"),
	ejsLint = require('ejs-lint'),
	qrCode = require('./dist/QrCode.js')
	
mongoose.connect("mongodb://localhost/qr_app", {'useNewUrlParser': true, 'useUnifiedTopology': true,'useCreateIndex': true});

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:true}));


app.get("/createQR/:id",function(req,res){
	Contact.findById(req.params.id).exec(function(err, contact){
		if(err){
			console.log(err)
		} else{
			res.render("index", {contact: contact});
			console.log(contact)
			var testContact= qrCode.createVCard(contact, {typeNumber: 30, cellSize: 5}); 
			console.log(testContact);
		}
	})
})

 

//5e2fb727a14dc9fd1e650e2b
// app.get("/campgrounds",function(req,res){
// 	Campground.find({},function(err, allCampgrounds){
// 		if(err){
// 			console.log(err);
// 		}else{
// 			res.render("campgrounds/index",{campgrounds:allCampgrounds})
// 		}
// })})



// Contact.create(
// 	{name: "Talitha", Title: "PM", Agency: "GovTech", DID: "1234556", HP: "2324444", email: "ttchin@gmail.com", Address: "eee angtian road"}
// 	, function(err, contact){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log('newly created contact');
// 		console.log(contact);
// 	}
// });


 
app.listen(process.env.port||10000, process.env.IP,function(){
	console.log("server began")
})