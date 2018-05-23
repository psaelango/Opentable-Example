import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'getRestaurantInfo': function(city_name,page_num){
    if(!city_name){
      throw new Meteor.Error("City name is required")
    }
    if(typeof city_name !== 'string'){
      throw new Meteor.Error("City name is not a valid input")
    }
    if(page_num && (typeof page_num !== 'number' || isNaN(page_num)) ){
      throw new Meteor.Error("Page number should be a number")
    }
    return new Promise((resolve,reject)=>{
      var url = "http://opentable.herokuapp.com/api/restaurants?city="+city_name;
      if(page_num){
        url = url + "&page="+page_num;
      }
      HTTP.call("GET",url,(error,response)=>{
        if(error){
          reject( new Meteor.Error(error) );
        }
        else{
          resolve( response.data );          
        }
      });
    })
  }
});
