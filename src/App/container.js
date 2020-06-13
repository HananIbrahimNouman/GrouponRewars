import { connect } from 'react-redux';

import App from './component';

const mapStateToProps = state => ({
    columns: state.rewards.columns,
});
const mapDispatch = dispatch => ({
    setColumn: dispatch.rewards.setColumn,
});

export default connect(mapStateToProps, mapDispatch)(App);
