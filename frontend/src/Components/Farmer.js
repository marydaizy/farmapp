import React, { Component } from 'react'

class Farmer extends Component {
  render() {
    return (
      <div>
        <h1>Add Farmer</h1>
        <form className="form">
          <input type="text" placeholder=" username " className="form-control" />
          <br />
          <input type="text" placeholder=" parish " className="form-control" />
          <br />
          <input type="text" placeholder=" village " className="form-control" />
          <br />
          <input type="text" placeholder=" gender " className="form-control" />
          <br />
          <input type="text" placeholder=" age " className="form-control" />
          <br />
          <input type="text" placeholder=" marriage_status " className="form-control" />
          <br />
          <input type="text" placeholder=" language " className="form-control" />
          <br />
          <input type="text" placeholder=" telephone " className="form-control" />
          <br />
          <input type="file" placeholder="photo" className="form-control" />
          <br />
          <textarea type="message" placeholder=" community_status " className="form-control" />
          <br />
         <h6>instructor_possibility</h6>
          <select>
          <option>yes</option>
          <option>no</option>
          </select>
          <input type="text" placeholder=" farm_area " className="form-control" />
          <br/>
          <input type="text" placeholder=" crop_type " className="form-control" />
          <br/>
          <textarea type="message" placeholder=" past_harvest " className="form-control" />
          <br/>
          <button type="submit" className="badge badge-info">Submit</button>
          
        </form>
      </div>
    )
  }
}
export default Farmer