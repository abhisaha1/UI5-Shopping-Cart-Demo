sap.ui.controller("shoppingcart.SubCategory", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf shoppingcart.SubCategory
*/
	onInit: function() {
		
		this.router = sap.ui.core.UIComponent.getRouterFor(this);
		this.router.attachRoutePatternMatched(this._handleRouteMatched, this);
		
	},
	
	_handleRouteMatched: function(evt) {
		
		if(evt.getParameter("name") !== "category") {
			
			return;
			
		}
		
		this.catIndex = evt.getParameter("arguments").catIndex;
		
		var context = sap.ui.getCore().byId("app").getModel('products').getContext('/collection/' + this.catIndex + '/');
		
		this.getView().setBindingContext(context,'products');
		
		
	},
	
	itemSelect: function(evt) {
		
		
	},
	
	goBack: function() {
		
		this.router.navTo("");
		
	}


});