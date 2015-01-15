sap.ui.jsview("shoppingcart.Cart", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf shoppingcart.Cart
	*/ 
	getControllerName : function() {
		return "shoppingcart.Cart";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf shoppingcart.Cart
	*/ 
	createContent : function(oController) {
		
		var oTable = new sap.m.Table({
			inset: true,
			columns: [
			          
			          new sap.m.Column({
			        	  header: new sap.m.Label({text: "Image"}),
			        	  hAlign: "Left",
			        	  width: "100px",
			        	  demandPopin: true,
			        	  popinDisplay: "Block",
			        	  minScreenWidth: sap.m.ScreenSize.Medium
			          }),
			          new sap.m.Column({
			        	  header: new sap.m.Label({text: "Quanity x Price"}),
			        	  hAlign: "Left",
			        	  width: "100px",
			        	  demandPopin: true,
			        	  popinDisplay: "Block",
			        	  minScreenWidth: sap.m.ScreenSize.Medium
			          }),
			          new sap.m.Column({
			        	  header: new sap.m.Label({text: "Name"}),
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
			        	src: "{cart>image}",
			        	width: "40px"
			        }),
			        
			        new sap.m.Text({
			        	text: "{cart>quantity} x {cart>price}"
			        }),
			        
			        new sap.m.Text({
			        	text: "{cart>name}"
			        })
			]
			
		});
		
		oTable.bindAggregation("items","cart>/items",oTemplate);
		
		var oText = new sap.m.Text("tid").addStyleClass('padding40').addStyleClass('justify');
		
		var oCheckoutBtn = new sap.m.Button({
			text: "Checkout",
			press: function() {
				alert("checkout");
			}
		}).addStyleClass("customBtn");
		
 		return new sap.m.Page({
			title: "Title",
			showNavButton: true,
			navButtonPress: function() {
				
				window.history.go(-1);
				
			},
			content: [oTable,oText,oCheckoutBtn ]
		});
	}

});