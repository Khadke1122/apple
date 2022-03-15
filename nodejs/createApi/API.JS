var obj1 = {
    valueOfThis: function(){
      return this;
    }
  }
  var obj2 = {
    valueOfThis: ()=>{
      return this;
    }
  }
  
  obj1.valueOfThis(); 
  obj2.valueOfThis();