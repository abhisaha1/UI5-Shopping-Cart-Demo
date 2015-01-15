sap.ui.jsview("shoppingcart.Category", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf shoppingcart.Category
	*/ 
	getControllerName : function() {
		return "shoppingcart.Category";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf shoppingcart.Category
	*/ 
	createContent : function(oController) {
		
		var oList = new sap.m.List({
			id: "listId"
		})
		
		oList.bindItems({
			path : "products>/collection", 
			template : new sap.m.StandardListItem({
				title: "{products>category}",
				type: sap.m.ListType.Navigation,
				press:function(evt){
					oController.categoryListItemPress(evt);
				}
			})
		});
		
 		return new sap.m.Page({
			title: "Category",
			content: [oList]
		});
	}

});