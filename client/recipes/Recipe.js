import './Recipe.html'

Template.Recipe.onCreated(function() {
	this.editMode = new ReactiveVar(false);
});

Template.Recipe.events({
	'click .toggle-menu': function() {
		console.log(this._id);
		Meteor.call('toggleMenuItem', this._id, this.inMenu);
	},
	'click .fa-trash': function() {
		Meteor.call('deleteRecipe', this._id);
	},
	'click .fa-pencil': function(event, template) {
		template.editMode.set(!template.editMode.get());
	}
});

Template.Recipe.helpers({
	updateRecipeId : function() {
		return this._id;
	},
	editMode: function() {
		return Template.instance().editMode.get();
	}
});