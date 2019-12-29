import { Meteor } from 'meteor/meteor';
import '/lib/routes.js';
import '/collections/Recipes.js';
import '/settings.json';
import '/server/publish.js';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
	'insertRecipe': (name, desc, author, createdAt) => {
		Recipes.insert({name: name, desc: desc, author, author, createdAt: createdAt});
	}
});


var secretPizzaAccessCode = Meteor.settings.magicPizzaService;
console.log( secretPizzaAccessCode );