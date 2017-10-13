import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as testActions from 'logic/test/action.js';

export class _About extends Component {
    render () {
        return (
            <div className='page biz-monitor'>
                <p>about</p>
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

export const About = connect(mapStateToProps, mapActionToProps)(_About);
