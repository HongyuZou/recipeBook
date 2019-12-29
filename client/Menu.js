import './Menu.html'
var db = Recipes;

Template.Menu.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('recipes');
	});
});

Template.Menu.helpers({
	recipes: () => {
		console.log('hehe');
		return db.find({inMenu: true});
	}
});