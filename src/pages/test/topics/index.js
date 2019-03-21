import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as testActions from 'logic/test/action.js';
import { Route, Link } from 'react-router-dom';

export class _Topics extends Component {
  componentDidMount() {
    console.log(this)
  };
  render () {
    const { match } = this.props;
    const Topic = ({ match }) => (
      <div>
        <h3>{match.params.topicId}</h3>
      </div>
    )
    return (
      <div className='page biz-monitor'>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${match.url}/rendering`}>
                            Rendering with React
            </Link>
          </li>
          <li>
            <Link to={`${match.url}/components`}>
                            Components
            </Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>
                            Props v. State
            </Link>
          </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route exact path={match.url} render={() => (
          <h3>Please select a topic.</h3>
        )}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  test: state.Test
});

const mapActionToProps = (dispatch) => ({
  actions: bindActionCreators(testActions, dispatch)
});

export default connect(mapStateToProps, mapActionToProps)(_Topics);
