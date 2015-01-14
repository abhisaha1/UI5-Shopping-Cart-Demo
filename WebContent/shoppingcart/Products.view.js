sap.ui.jsview("shoppingcart.Products", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf shoppingcart.Products
	*/ 
	getControllerName : function() {
		return "shoppingcart.Products";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf shoppingcart.Products
	*/ 
	createContent : function(oController) {
		
		var oTable = new sap.m.Table("productsTable",{
			inset: true,
			columns: [
			          //image
			         new sap.m.Column({
			        	 hAlign: "Left",
			        	 width: "100px",
			        	 demandPopin: true,
			        	 popinDisplay: "Block",
			        	 minScreenWidth: sap.m.ScreenSize.Medium
			         }),
			         //title/desc
			         new sap.m.Column({
			        	 hAlign: "Left",
			        	 demandPopin: true,
			        	 popinDisplay: "Block",
			        	 minScreenWidth: sap.m.ScreenSize.Medium
			         }),
			         //price
			         new sap.m.Column({
			        	 hAlign: "Left",
			        	 width: "100px",
			        	 demandPopin: true,
			        	 popinDisplay: "Block",
			        	 minScreenWidth: sap.m.ScreenSize.Medium
			         }),
			         //button
			         new sap.m.Column({
			        	 hAlign: "Left",
			        	 width: "100px",
			        	 demandPopin: true,
			        	 popinDisplay: "Block",
			        	 minScreenWidth: sap.m.ScreenSize.Medium
			         }) 
			          
			]
		});
		
		var oTemplate = new sap.m.ColumnListItem({
			type: sap.m.ListType.Active,
			cells: [
			        new sap.m.Image({
			        	src: "{products>image}",
			        	height: "100px"
			        }),
			        
			        new sap.m.Text({
			        	text: "{products>name} \n {products>title}"
			        }),
			        
			        new sap.m.Text({
			        	text: "{products>price} INR"
			        }),
			        
			        new sap.m.Button({
			        	text: "Add to Cart",
			        	press: function(e) {
			        		sap.demo.cart.common.addToCart(e,this);
			        	}
			        })
			]
		});
		
		oTemplate.attachPress(function(evt) {
			oController.productPress(evt);
		})
		
		oTable.bindAggregation("items","products>product",oTemplate);
		
		
 		return new sap.m.Page({
			title: "Collection",
			content: [oTable]
		});
	}

});