app.service('brotherService', function(){
  var brothers = {};
  this.add = function(param){
    brothers = param;
  };
  this.get = function(){
    return brothers;
  };
});