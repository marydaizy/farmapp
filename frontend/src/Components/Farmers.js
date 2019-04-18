import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getFarmers } from "../actions/farmers";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";

class Farmers extends Component {
  static propTypes = {
    farmers: PropTypes.array.isRequired,
    getFarmers: PropTypes.func.isRequired
  };
  componentDidMount() {
    this.props.getFarmers();
  }
  render() {
    return (
      <Fragment>
        <div className="container-fluid">
          <div className="container" />
          <button class="btn btn-warning" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          +AddFarmer 
  </button>
  <div class="collapse" id="collapseExample">
  <div class="card card-body">
  <div className="formBox">
          <form>
              
          <div class="preview text-center">
                <img class="preview-img" src="http://simpleicon.com/wp-content/uploads/account.png" alt="Preview Image" width="150" height="150"/>
                <div class="browse-button">
                    <i class="fa fa-pencil-alt"></i>
                    <input class="browse-input" type="file" required name="UploadedFile" id="UploadedFile"/>
                </div>
                <span class="Error"></span>
            </div>
  
              <div class="row">
                <div class="col-sm-6">
                  <div class="inputBox ">
                  <input type="text" placeholder=" username " className="input" />
          
                  </div>
                </div>
  
                <div class="col-sm-6">
                  <div class="inputBox">
                  <input type="text" placeholder=" parish " className="input" />
          
                  </div>
                </div>
              </div>
  
              <div class="row">
                <div class="col-sm-6">
                  <div class="inputBox">
                  <input type="text" placeholder=" village " className="input" />
          
                  </div>
                </div>
  
                <div class="col-sm-6">
                  <div class="inputBox">
                  <input type="text" placeholder=" gender " className="input" />
          
                  </div>
                </div>
              </div>
  
              <div class="row">
                <div class="col-sm-6">
                  <div class="inputBox">
                  <input type="text" placeholder=" age " className="input" />
          
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="inputBox">
                  <input type="text" placeholder=" marriage_status " className="input" />
          
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="inputBox">
                  <input type="text" placeholder=" language " className="input" />
          
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="inputBox">
                  <input type="text" placeholder=" telephone" className="input" />
          
                  </div>
                </div>
              </div>
              <div class="row">
              <div class="col-sm-6">
                  <div class="inputBox">
                  <input type="message" placeholder=" farm_area " className="input" />
          
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="inputBox">
                  <input type="text" placeholder=" crop_type  " className="input" />
          
                  </div>
                </div>
               
              </div>
              
              <div class="row">
                
                <div class="col-sm-12">
                  <div class="inputBox">
                  <textarea type="message" placeholder=" community_status" className="input" />
          
                  </div>
                </div>
              </div>
              <div class="col-sm-12">
                  <div class="inputBox">
                  <textarea type="message" placeholder=" past_harvest" className="input" />
          
                  </div>
                </div>
                <div class="row">
                <div class="col-sm-6">
                  <div class="inputBox">
                  <h6>instructor_possibility</h6>
          <select>
          <option>yes</option>
          <option>no</option>
          </select>
                  </div>
                </div>
                
              </div>
              <Link to ="/report"> <button className="btn btn-md btn-warning">Login</button></Link>
          </form>
        </div> 
  </div>
</div>
<h4>Farmers</h4>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>id</th>
                <th>username</th>
                <th>district</th>
                <th>crop_type</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {this.props.farmers.map(farmer => (
                <tr key={farmer.id}>
                  <td>{farmer.id}</td>
                  <td>{farmer.username}</td>
                  <td>{farmer.district}</td>
                  <td>{farmer.crop_type}</td>
                  <td>
                    <button className="btn btn-md btn-warning">Edit</button>
                  </td>
                  <td>
                    <button className="btn btn-danger btn-sm">Del</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  farmers: state.farmers.farmers
});
export default connect(
  mapStateToProps,
  { getFarmers }
)(Farmers);

//test

// import React, { Component, Fragment } from 'react'
// import {connect} from 'react-redux'
// import PropTypes from 'prop-types';
// import {getFarmers} from '../actions/farmers'

// export class Farmers extends Component {
//   static PropTypes = {
//     farmers: PropTypes.array.isRequired,
//     getFarmers:PropTypes.func.isRequired

//   };

//   componentDidMount(){
//     this.props.getFarmers();
//   }
//   render() {
//     return (
//       <div>
//         <Fragment>
//         <h3>All Rice Farmers</h3>
//         <table className="table table-striped">
//           <thead>
//           <tr>
//             <th>ID</th>
//             <th>username</th>

//           </tr>
//           </thead>

//           <tbody>
//             {this.props.farmers.map(farmer =>(
//               <tr key={farmer.id}>
//               <td>{farmer.id}</td>
//               <td>{farmer.username}</td>

//               <td><button  className='btn btn-danger btn-sm'>Del</button></td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         </Fragment>

//       </div>
//     )
//   }
// }
// const mapStateToProps = state =>({
//   farmers:state.farmers.farmers
// });
// export default connect(mapStateToProps, {getFarmers})(Farmers);
