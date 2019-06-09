({
   openModel: function(component, event, helper) {
      component.set("v.isOpen", true);
   },
 
   closeModel: function(component, event, helper) {
      component.set("v.isOpen", false);
      component.set("v.shwcnfrmsg", 'You clicked the \' Cancel \'  button');
   },
 
   likenClose: function(component, event, helper) {      
      component.set("v.shwcnfrmsg", 'You clicked the \' Confirm \' button');
       component.set("v.isOpen", false);
   }
})
