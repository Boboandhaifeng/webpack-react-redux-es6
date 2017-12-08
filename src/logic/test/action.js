import * as types from './type';
import axios from 'utils/axios';

const curSysOptA = (data) => ({
    type: types.CUR_SYS_OPT,
    data: data
});

// export const curSysOptF = () => {
//     return (dispatch, getState) => {
//         dispatch(curSysOptA("home222"));
//     };
// };

export const curSysOptF = () => {
    return (dispatch, getState) => {
        return axios.post(`/login.do`, {}).then(res => {
            console.log(res)
            dispatch(curSysOptA("home222"));
        });
    }
}