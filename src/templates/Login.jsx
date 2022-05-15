import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const selector = useSelector(state => state);

    console.log(selector.router);

    return (
        <div>
            <h2>ログイン</h2>
            <button onClick={ () => dispatch(navigate('/')) }>
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
