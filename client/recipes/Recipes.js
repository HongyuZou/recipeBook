import '/collections/Recipes.js';
import './Recipe.html'
var db = Recipes;

Template.Recipes.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('recipes');
	});
});

Template.Recipes.helpers({
	recipes: () => {
		return db.find();
	}
});

Template.Recipes.events({
	'click .new-recipe': function () {
		Session.set('newRecipe', true);
	}
});