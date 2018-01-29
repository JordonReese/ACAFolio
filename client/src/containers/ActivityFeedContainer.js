import { connect } from "react-redux";
import ActivityFeed from "../components/ActivityFeed";

function mapStateToProps(state) {
  return {
    activityFeed: state.activityFeed
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps,mapDispatchToProps)(ActivityFeed);
