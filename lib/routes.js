if(Meteor.isClient) {
	Accounts.onLogin(function() {
		FlowRouter.go('recipe-book');
	});

	Accounts.onLogout(function() {
		FlowRouter.go('home');
	});
}

FlowRouter.triggers.enter([function(context, redirect) {
	// if logged out
	if(!Meteor.userId()) {
		FlowRouter.go('home');
	}
}]);

FlowRouter.route('/', {
	name: 'home',
	action() {
		// render this template once hit this, when user logged in
		if(Meteor.userId()) {
			FlowRouter.go('recipe-book');	
		}
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/recipe-book', {
	name: 'recipe-book',
	action() {
		BlazeLayout.render('MainLayout', {main: 'Recipes'});
	}
})

FlowRouter.route('/recipe/:id', {
	name: 'recipe',
	action() {
		BlazeLayout.render('MainLayout', {main: 'RecipeSingle'});
	}
})

FlowRouter.route('/menu', {
	name: 'menu',
	action() {
		BlazeLayout.render('MainLayout', {main: 'Menu'});
	}
});

FlowRouter.route('/shopping-list', {
	name: 'shopping-list',
	action() {
		BlazeLayout.render('MainLayout', {main: 'ShoppingList'});
	}
});