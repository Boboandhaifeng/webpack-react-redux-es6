import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as testActions from 'logic/test/action.js';

export class _Home extends Component {
    componentDidMount() {
        const { curSysOptF } = this.props.actions;
        console.log(this);

        setTimeout(() => curSysOptF(), 2000)
    }
    render () {
        const { curSysOpt="" } = this.props.test;
        return (
            <div className='page biz-monitor'>
                <p>{curSysOpt}</p>
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

export const Home = connect(mapStateToProps, mapActionToProps)(_Home);
