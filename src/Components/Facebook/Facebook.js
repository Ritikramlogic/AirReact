import React from "react";
import "./Facebook.css";
class Facebook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div>
          <div
            className="fb-like"
            data-href="https://developers.facebook.com/docs/plugins/"
            data-width=""
            data-layout="standard"
            data-action="like"
            data-size="small"
            data-share="false"
          ></div>

          <div class="fbShareBtn_Container">
            <div id="shareBtn" class="fbShareBtn mt-1">
              Share
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Facebook;
