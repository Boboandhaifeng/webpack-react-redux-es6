import * as types from './type';
import axios from 'axios';

const curSysOptA = (data) => ({
    type: types.CUR_SYS_OPT,
    data: data
});

//  改变当前应用
export const curSysOptF = () => {
    return (dispatch, getState) => {
        dispatch(curSysOptA("home222"));
    };
};