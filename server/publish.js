Meteor.publish('recipes', () => {
	return Recipes.find();
});

Meteor.publish('singleRecipe', (id) => {
	return Recipes.find({_id: id});
});


