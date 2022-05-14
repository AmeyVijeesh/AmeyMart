import React from "react";
import "./style.css";
class Popup2 extends React.Component {
  render() {
    return (
      <div className="popup" style={{ bottom: "0%" }}>
        <div className="popup_open">
          <center>
            <h1 className="header"> Cart </h1>

            <h4>{this.props.h5}</h4>

            <div>{this.props.div}</div>
            <button onClick={this.props.closePopup2}> Close </button>
          </center>
        </div>
      </div>
    );
  }
}
export default Popup2;
