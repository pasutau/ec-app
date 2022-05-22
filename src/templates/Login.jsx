import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../reducks/users/operations';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div>
            <h2>ログイン</h2>
            <button onClick={() => dispatch(signIn(navigate))}>
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
