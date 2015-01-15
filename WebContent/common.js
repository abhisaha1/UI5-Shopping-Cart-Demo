jQuery.sap.declare("sap.demo.cart.common");

sap.demo.cart.common = {
		
		method1: function() {
			
			alert('metho1 called');
			
		},
		
		addToCart: function(e, obj) {
			
			var model = obj.getModel("products");
			var path = e.getSource().getBindingContext('products').getPath();
			
			var data = model.getProperty(path);
			
			var cart = obj.getModel('cart').getData();
			
			var exist = false;
			
			$.each(cart.items, function(i,obj){
				if(obj.id == data.id) {
					exist = true;
					cart.items[i].quantity += 1;
				}
			});
			
			if(!exist) {
				
				cart.items.push({
					id: data.id,
					quantity: 1,
					name: data.name,
					image: data.image,
					price: data.price
				});
			}
			
			obj.getModel('cart').setData(cart);
			
			sap.m.MessageToast.show('Item added in cart');
			
			
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