import { chai } from 'meteor/practicalmeteor:chai';
import { done } from 'meteor/practicalmeteor:chai';
import './main'

describe('Unit testing of function getRestaurantInfo()', function () {
  it('Empty city name should throw Error', function () {
    chai.expect(()=>Meteor.call('getRestaurantInfo')).to.throw(Error);
  });
  it('City name of invalid data type(s) should throw Error ', function () {
    chai.expect(()=>Meteor.call('getRestaurantInfo',123)).to.throw(Error);
    chai.expect(()=>Meteor.call('getRestaurantInfo',{"city":"toroto"})).to.throw(Error);
    chai.expect(()=>Meteor.call('getRestaurantInfo',true)).to.throw(Error);
    chai.expect(()=>Meteor.call('getRestaurantInfo',[])).to.throw(Error);
  });
  it('Page number of invalid data type(s) should throw Error', function () {
    chai.expect(()=>Meteor.call('getRestaurantInfo',"toroto","1")).to.throw(Error);
    chai.expect(()=>Meteor.call('getRestaurantInfo',"toroto",{"pagenum":1})).to.throw(Error);
    chai.expect(()=>Meteor.call('getRestaurantInfo',"toroto",true)).to.throw(Error);
    chai.expect(()=>Meteor.call('getRestaurantInfo',"toroto",[])).to.throw(Error);
  });
  it('Valid city name should return data object', function () {
    var response = Meteor.call('getRestaurantInfo',"toronto");
    chai.expect(response).to.be.an('object');
  });
  it('Valid city name and page number should return corresponding page records', function () {
    var response = Meteor.call('getRestaurantInfo',"toronto",5);
    chai.expect(response.current_page).to.be.equal(5)
  });
});
