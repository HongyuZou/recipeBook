import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';
import { Session } from 'meteor/session';
import '/lib/routes.js'
import '/client/layout/HomeLayout.html'
import '/client/layout/MainLayout.html'
import '/client/recipes/Recipes.html'
import '/client/recipes/Recipes.js'
import '/client/recipes/NewRecipe.html'
import '/client/layout/SideNav.html'
import '/collections/Recipes.js'
import '/settings.json'
import '/client/recipes/Recipes.js'
import '/client/recipes/Recipes.html'
import '/client/recipes/RecipeSingle.html'
import '/client/recipes/RecipeSingle.js'
import '/client/recipes/Recipe.js'
import '/client/recipes/Recipe.html'
import '/client/Menu.js'
import '/client/Menu.html'
import '/client/ShoppingList.html'
import '/client/ShoppingList.js'
import '/client/recipes/NewRecipe.js'


//Template.Recipes.events({
//	'submit form': (event) => {
//		console.log("hehe");
//		var name = event.target.name.value;
//		var desc = event.target.desc.value;
//		var author = event.target.author.value;
//		var createdAt = event.target.createdAt.value;
//		
//		Meteor.call('insertRecipe', name, desc, author, createdAt, (Error, Result) => {
//			console.log(Error);
//   			console.log(Result);
//		})
//	}
//});