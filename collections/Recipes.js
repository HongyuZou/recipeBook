import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Recipes = new Mongo.Collection('recipes');

Recipes.allow({
	insert: (userId, doc) => {
		// is a user
		return !!userId;
	},
	
	update: (userId, doc) => {
		return !!userId;
	}
});

Ingredient = new SimpleSchema({
	name: {
		type: String
	},
	amount: {
		type: String
	}
});

RecipeSchema = new SimpleSchema({
    name: {
        label: "Name",
        type: String
    },
    desc: {
        label: "Description",
        type: String
    },
	// define ingredients to be array schema
	Ingredients: {
    	type: Array
	},
	'Ingredients.$': {
     	type: Ingredient
	},
	inMenu: {
		type: Boolean,
		defaultValue: false,
		optional: true,
		autoform: {
			type: "hidden"
		}
	},
    author: {
        type: String,
        label: "Author",
        autoform: {
            type: "hidden"
        },
        autoValue: function(){
            return this.userId;
        },
    },
    createdAt: {
        type: Date,
        label: "CreatedAt",
        autoform: {
            type: "hidden"
        },
        autoValue: function() {
            return new Date();
        },
    },
	inMenu: {
		type: Boolean,
		label: "inMenu",
		autoValue: false
	}
	
});

Meteor.methods({
	'toggleMenuItem': (id, currentState) => {
		Recipes.update(id, {
			$set: {
				inMenu: !currentState
			}
		});
	},
	'deleteRecipe': (id, currentState) => {
		Recipes.remove(id);
	}
});

Recipes.attachSchema(RecipeSchema);

