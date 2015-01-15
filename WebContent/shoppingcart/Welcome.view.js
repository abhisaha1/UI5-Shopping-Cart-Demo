sap.ui.jsview("shoppingcart.Welcome", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf shoppingcart.Welcome
	*/ 
	getControllerName : function() {
		return "shoppingcart.Welcome";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf shoppingcart.Welcome
	*/ 
	createContent : function(oController) {
		
		var oImage = new sap.m.Image({
			src: "resources/welcome.jpg",
			width: '500px'
		});
		
		var oText = new sap.m.Text({
			text: "SAPUI5 Shopping Cart Demo"
		}).addStyleClass('welcomeText');
		
 		return new sap.m.Page({
			title: "Welcome",
			content: [
			          new sap.m.VBox({
			        	  items: [oImage,oText],
			        	  alignItems: sap.m.FlexAlignItems.Center,
			        	  justifyContent: sap.m.FlexJustifyContent.Center
			          })
			]
		});
	}

});