sap.ui.jsview("shoppingcart.SubCategory", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf shoppingcart.SubCategory
	*/ 
	getControllerName : function() {
		return "shoppingcart.SubCategory";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf shoppingcart.SubCategory
	*/ 
	createContent : function(oController) {
		
		var oList = new sap.m.List({
			id: "slistId",
			mode: sap.m.ListMode.SingleSelect,
			select: function(evt) {
				oController.itemSelect(evt);
			}
		})
		
		oList.bindItems({
			path: "products>items/subcat",
			template: new sap.m.StandardListItem({
				title: "{products>subcatname}"
			})
		})
		
 		return new sap.m.Page({
			title: "Title",
			showNavButton: true,
			navButtonPress: function() {
				var app = sap.ui.getCore().byId('splitApp');
				app.backMaster();
				
				oController.goBack();
			},
			headerContent: new sap.m.Button({
				icon: "sap-icon://cart",
				press: function() {
					//
				}
			}),
			content: [oList]
		});
	}

});