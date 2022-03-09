import { publicRequest } from "../requestHttp";
import { loginStart,loginSuccess,loginError } from "./userRedux";




export const login = async (dispatch,user) => {

    dispatch(loginStart());
try {
      const res = await publicRequest.post('/auth/login',user)
      dispatch(loginSuccess(res.data));
} catch (err) {
    dispatch(loginError());
}

}