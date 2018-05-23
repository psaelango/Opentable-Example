import React, { Component } from 'react';

// App component - represents the whole app
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cityName: "",
      restaurantsInfo: [],
      currentCityDisplay: "",
      currentPageDisplay: null,
      totalPages: []
    };
    this.callApi = this.callApi.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderTable = this.renderTable.bind(this);
    this.renderPagination = this.renderPagination.bind(this);
  }
  handleChange(event){
    this.setState({cityName: event.target.value});
  }
  callApi(cityName,pageNum){
    Meteor.call("getRestaurantInfo",cityName,pageNum,(error,response)=>{
      if(error){
        console.log(error);
      }
      else{
        console.log(response);
        if(response.total_entries && response.per_page && response.total_entries > 0 && response.per_page > 0){
          var total_pages = Math.ceil(response.total_entries/response.per_page);
          this.setState({
            restaurantsInfo: response.restaurants,
            totalPages: total_pages,
            currentCityDisplay: cityName,
            currentPageDisplay: response.current_page
          });
        }
        else{
          alert("Oops! No restaurants found in the city. Please try some other city!");
        } 
      }
    });
  }
  renderForm(){
    return (
      <form onSubmit={(e)=>{ e.preventDefault(); this.callApi(this.state.cityName) } }>
        <input type="text" placeholder="Enter City Name" value={this.state.cityName} onChange={this.handleChange} required/>
        <button>Find Restaurant(s)</button>
      </form>
    );
  }
  renderTable(){
    return(
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <td>Name</td>
            <td>Address</td>
            <td>Price</td>
            <td>Image</td>
            <td>Review, Ratings & Reservation</td>
          </tr>
        </thead>
        <tbody>
          {
            this.state.restaurantsInfo.map((restaurant)=>(
              <tr key={restaurant.id}>
                <td>{restaurant.name}</td>
                <td>{restaurant.address + " " + restaurant.area}</td>
                <td>{restaurant.price}</td>
                <td>
                  <a target="_blank" href={restaurant.image_url}>
                    <img src={restaurant.image_url} height="105" width="105"/>
                  </a>
                </td>
                <td><a target="_blank" href={restaurant.reserve_url}>{restaurant.reserve_url}</a></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
  renderPagination(){
    var pages = [];
    for (let i = 0; i < this.state.totalPages; i++) {
      pages.push(
        <li key={i} className={i+1 == this.state.currentPageDisplay ? "active" : ""} onClick={()=>this.callApi(this.state.currentCityDisplay,i+1)}>
          <a>{i+1}</a>
        </li>
      );
    }
    return(
      <ul className="pagination" style={{cursor: "pointer"}}>
        {pages}
      </ul>
    );
  }
  render() {
    return (
      <div className="col-sm-12" style={{textAlign:"center"}}>
        <div className="row">
          {this.renderForm()}
          
        </div>
        <div className="row">
          {this.renderTable()}
        </div>
        <div className="row">
          {this.renderPagination()}
        </div>
      </div>
    )
  }
}