sap.ui.jsview("shoppingcart.App", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf shoppingcart.App
	*/ 
	getControllerName : function() {
		return "shoppingcart.App";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf shoppingcart.App
	*/ 
	createContent : function(oController) {
 		
		this.setDisplayBlock(true);
		
		return new sap.m.SplitApp("splitApp",{});
	}

});