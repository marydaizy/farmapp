import React, { Component } from 'react'

class Report extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Report</h2>
          <form className="form">
          <input type="text" placeholder=" username " className="form-control" />
          <br />
          <input type="text" placeholder=" season " className="form-control" />
          <br />
          <input type="text" placeholder=" area " className="form-control" />
          <br />
          <input type="text" placeholder=" rice_type " className="form-control" />
          <br />
          <input type="date" placeholder=" sowing_date " className="form-control" />
          <br />
          <input type="text" placeholder=" sowing_type " className="form-control" />
          <br />
          <input type="text" placeholder=" planting_type " className="form-control" />
          <br />
          <input type="text" placeholder=" levelling " className="form-control" />
          <br />
          <input type="text" placeholder=" ridge " className="form-control" />
          <br />
          <input type="text" placeholder=" watercourse_state " className="form-control" />
          <br />
          <input type="text" placeholder=" fertilizer " className="form-control" />
          <br />
          <input type="text" placeholder=" fertilizer1_type " className="form-control" />
          <br />
          <input type="text" placeholder=" fertilizer1_amount " className="form-control" />
          <br />
          <input type="text" placeholder=" fertilizer2_type " className="form-control" />
          <br />
          <input type="text" placeholder=" fertilizer2_amount " className="form-control" />
          <br />
          <input type="text" placeholder=" weed_condition " className="form-control" />
          <br />
          <input type="text" placeholder=" total_weed_times " className="form-control" />
          <br />
          <input type="date" placeholder=" harvest_date " className="form-control" />
          <br />
          <input type="text" placeholder=" harvest_amount " className="form-control" />
          <br />
          <textarea type="message" placeholder=" note " className="form-control" />
          <br />
          <input type="file" placeholder=" photo1 " className="form-control" />
          <br />
          <input type="file" placeholder=" photo2 " className="form-control" />
          <br />
          <input type="file" placeholder=" photo3 " className="form-control" />
          <br />
          <input type="file" placeholder=" photo4 " className="form-control" />
          <br />
          <button type="submit" className="badge badge-info">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}
export default Report