var path = require("path");

module.exports = function(app){
	app.get("/about", function(aboutReq, aboutRes){
		aboutRes.sendFile(path.join(__dirname, "../public/about.html"));
	});

	app.get("/portfolio", function(portfolioReq, portfolioRes){
		portfolioRes.sendFile(path.join(__dirname, "../public/portfolio.html"));
	});

	app.get("/skills", function(skillsReq, skillsRes){
		skillsRes.sendFile(path.join(__dirname, "../public/skills.html"));
	});

	app.get("/contact", function(contactReq, contactRes){
		contactRes.sendFile(path.join(__dirname, "../public/contact.html"));
	});

	app.get("/autotrack", function(autotrackReq, autotrackRes){
		autotrackRes.sendFile(path.join(__dirname, "../public/autotrack.html"));
	});

	app.get("/codehive", function(codehiveReq, codehiveRes){
		codehiveRes.sendFile(path.join(__dirname, "../public/codehive.html"));
	});

	app.get("/soundscout", function(soundscoutReq, soundscoutRes){
		soundscoutRes.sendFile(path.join(__dirname, "../public/soundscout.html"));
	});

	app.use("/", function(homeReq, homeRes){
		homeRes.sendFile(path.join(__dirname, "../public/index.html"));
	});
}