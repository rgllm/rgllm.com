import React from "react";
import ReactDOM from "react-dom";
import "./NotFound.css";


class NotFound extends React.Component {
    constructor() {
      super();
    }

    render() {
      return( 
      <div className="container-NotFound">
          <span className="title-NotFound">Nothing exists here, yet! 🤫</span>
    </div>
  );}

}

export default NotFound;