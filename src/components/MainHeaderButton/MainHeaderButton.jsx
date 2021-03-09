import React from "react";
import { withTaskContext } from "@twilio/flex-ui";
import { Actions } from "@twilio/flex-ui";
import { MainHeaderButtonStyle } from "./MainHeaderButton.Styles";
import { IconButton } from "@twilio/flex-ui";

class MainHeaderButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    Actions.invokeAction("StartOutboundCall", {
      destination: "+27732214470",
    })
      .then(() => console.log("Call successfully made"))
      .catch((err) => console.log("Call failed, error", err));
  }

  render() {
    return (
      <MainHeaderButtonStyle>
        <IconButton
          showLable={true}
          icon="IncomingCall"
          onClick={this.handleClick}
        ></IconButton>
      </MainHeaderButtonStyle>
    );
  }
}

export default withTaskContext(MainHeaderButton);
