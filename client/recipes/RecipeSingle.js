import '/collections/Recipes.js';
import './Recipe.html'
var db = Recipes;

Template.RecipeSingle.onCreated(function() {
	var self = this;
	self.autorun(function() {
		var id = FlowRouter.getParam('id');
		self.subscribe('singleRecipe', id);
	});
});

Template.RecipeSingle.helpers({
	recipe: () => {
		var id = FlowRouter.getParam('id');
		return db.findOne({_id: id});
	}
});