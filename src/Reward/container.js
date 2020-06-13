import { connect } from 'react-redux';

import Reward from './component';

const mapStateToProps = state => ({
    columns: state.rewards.columns,
});
const mapDispatch = dispatch => ({
    removeReward: dispatch.rewards.removeReward,
});

export default connect(mapStateToProps, mapDispatch)(Reward);
