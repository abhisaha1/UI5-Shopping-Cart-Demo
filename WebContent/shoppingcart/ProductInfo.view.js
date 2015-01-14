sap.ui.jsview("shoppingcart.ProductInfo", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf shoppingcart.ProductInfo
	*/ 
	getControllerName : function() {
		return "shoppingcart.ProductInfo";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf shoppingcart.ProductInfo
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "{products>name}",
			showNavButton: true,
			navButtonPress: function() {
				window.history.go(-1);
			},
			footer: new sap.m.Bar({
				contentLeft: [
				              new sap.m.Button({
				            	text: "Add to Cart",
				            	icon: "sap-icon://add",
				            	press: function(evt) {
				            		sap.demo.cart.common.addToCart(evt,this);
				            	}
				              })
				]
			}),
			content: [
			          
			          new sap.m.ObjectHeader({
			        	  title: "{products>name}",
			        	  number: "{products>price}",
			        	  numberUnit: "INR",
			        	  statuses: [
			        	         new sap.m.ObjectStatus({
			        	        	 text: "Item available",
			        	        	 state: sap.ui.core.ValueState.Success
			        	         }),
			        	         new sap.m.ObjectStatus({
			        	        	 text: "1 day delivery available",
			        	        	 state: sap.ui.core.ValueState.Error
			        	         }) 
			        	  ]
			          }),
			          
			          new sap.m.HBox({
			        	items: [new sap.m.Image({
			        		src: "{products>image}",
			        		height: "200px"
			        	})],
			        	alignItems: sap.m.FlexAlignItems.Center,
			        	justifyContent: sap.m.FlexJustifyContent.Center
			          }),
			          
			          new sap.m.Text({
			        	  text: "{products>description}"
			          }).addStyleClass('padding40').addStyleClass('justify').addStyleClass('marginTop20')
			]
		});
	}

});