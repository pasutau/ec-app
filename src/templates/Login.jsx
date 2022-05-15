import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { useNavigate } from 'react-router-dom';
import { signInAction } from '../reducks/users/actions';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div>
            <h2>ログイン</h2>
            <button onClick={() => {
                dispatch(signInAction({uid: "00001", username: "torahack"}))
                dispatch(navigate('/'))
            }
             }>
                ログインする
            </button>
        </div>
    )

//not working this sample code
    // return (
    //     <div>
    //         <h2>ログイン</h2>
    //         <button onClick={ () => dispatch(push('/')) }>
    //             ログインする
    //         </button>
    //     </div>
    // )
}

export default Login;
