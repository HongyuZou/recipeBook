import './ShoppingList.html'
var db = Recipes;

Template.ShoppingList.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('recipes');
	});
});

Template.ShoppingList.helpers({
	shoppingList: () => {
		return db.find({inMenu: true});
	}
});