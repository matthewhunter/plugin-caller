import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Actions } from "../../states/AutodialerState";
import ToggleAutodialerButton from "./ToggleAutodialerButton";

const mapDispatchToProps = (dispatch) => ({
  callNumber: bindActionCreators(Actions.callNumber, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToggleAutodialerButton);
