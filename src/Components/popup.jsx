import React from "react";
import "./style.css";
class Popup extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup_open">
          <center>
            <h2 className="header"> Cart </h2>

            <div class="flex-container">
              <div style={{ marginLeft: "50px" }} class="flex-items">
                <h4>{this.props.h5}</h4>
              </div>

              <div class="flex-items">
                <div class="totalside">{this.props.div}</div>
              </div>
            </div>
            <button onClick={this.props.closePopup}> Continue </button>
          </center>
        </div>
      </div>
    );
  }
}
export default Popup;
