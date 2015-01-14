jQuery.sap.declare("sap.demo.cart.common");

sap.demo.cart.common = {
		
		method1: function() {
			
			alert('metho1 called');
			
		},
		
		addToCart: function() {
			
			alert("add to cart called");
		},
		
		cartPress: function(evt,obj) {
			
			var router = sap.ui.core.UIComponent.getRouterFor(obj);
			
			var list = sap.ui.getCore().byId("slistId");
			
			var selected = list.getSelectedItem();
			
			if(selected != null) {
				
				list.setSelectedItem(selected, false);
				
			}
			
			router.navTo("Cart");
			
			
		}
		
}