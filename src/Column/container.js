import { connect } from 'react-redux';

import Column from './component';

const mapStateToProps = state => ({
    columns: state.rewards.columns,
});
const mapDispatch = dispatch => ({
});

export default connect(mapStateToProps, mapDispatch)(Column);
