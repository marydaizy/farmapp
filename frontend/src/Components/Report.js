import React, { Component } from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";

class Report extends Component {
  render() {
    return (
      <div>
        <div>
          <form className="form">
            <br />
            <br />
            <div class="preview text-center">
              <img
                class="preview-img"
                src="http://simpleicon.com/wp-content/uploads/account.png"
                alt="Preview Image"
                width="200"
                height="200"
              />
              <div class="browse-button">
                <i class="fa fa-pencil-alt" />
                <input
                  class="browse-input"
                  type="file"
                  required
                  name="UploadedFile"
                  id="UploadedFile"
                />
              </div>
              <span class="Error" />
            </div>

            <div class="row">
              <div class="col-sm-6">
                <div class="inputBox">
                  <input type="text" placeholder="username" className="input" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="inputBox">
                  <input type="text" placeholder=" season" className="input" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="inputBox">
                  <input type="text" placeholder="area" className="input" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="inputBox">
                  <input
                    type="text"
                    placeholder=" rice_type"
                    className="input"
                  />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-6">
                <div class="inputBox">
                  <input
                    type="date"
                    placeholder="sowing_date"
                    className="input"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="inputBox">
                  <input
                    type="text"
                    placeholder=" sowing_type"
                    className="input"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="inputBox">
                  <input
                    type="text"
                    placeholder="planting_type"
                    className="input"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="inputBox">
                  <input
                    type="text"
                    placeholder="levvelling"
                    className="input"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="inputBox">
                  <input type="text" placeholder="ridge" className="input" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="inputBox">
                  <input
                    type="text"
                    placeholder=" watercourse_state"
                    className="input"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="inputBox">
                  <input
                    type="text"
                    placeholder="fertilizer"
                    className="input"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="inputBox">
                  <input
                    type="text"
                    placeholder=" fertilizer1_type"
                    className="input"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="inputBox">
                  <input
                    type="text"
                    placeholder="fertilizer1_amount"
                    className="input"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="inputBox">
                  <input
                    type="text"
                    placeholder=" fertilizer2_type"
                    className="input"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="inputBox">
                  <input
                    type="text"
                    placeholder="fertilizer2_amount"
                    className="input"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="inputBox">
                  <input
                    type="text"
                    placeholder=" weed_condition"
                    className="input"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="inputBox">
                  <input
                    type="text"
                    placeholder="total_weed_times"
                    className="input"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="inputBox">
                  <input
                    type="date"
                    placeholder=" harvest_date"
                    className="input"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="inputBox">
                  <input
                    type="text"
                    placeholder="harvest_amount"
                    className="input"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="inputBox">
                  <textarea
                    type="message"
                    placeholder=" note"
                    className="input"
                  />
                </div>
              </div>
            </div>
            <div>
              <input type="file" placeholder=" photo1 " />
            </div>
            <div>
              <input type="file" placeholder=" photo2 " />
            </div>
            <div>
              <input type="file" placeholder=" photo3 " />
            </div>
            <div>
              <input type="file" placeholder=" photo4 " />
            </div>
            <br />
            <Link to ="/farmers"> <button className="btn btn-md btn-warning">Send</button></Link>
          </form>
        </div>
      </div>
    );
  }
}
export default Report;
