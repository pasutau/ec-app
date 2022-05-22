import { signInAction } from "./actions";
import { useNavigate } from 'react-router-dom';
import { TurnedIn } from "@material-ui/icons";

export const signIn = (navigate) => {
    return async (dispatch, getState) => {
        const state = getState();
        const isSignedIn = state.users.isSignedIn;

        if(!isSignedIn) {
            const url = 'https://api.github.com/users/pasutau'

            const response = await fetch(url)
                                .then(res => res.json())
                                .catch(() => null)

            const username = response.login;

            dispatch(signInAction( {
                isSignedIn: true,
                uid: "00001",
                username: "pasutau"
            }))
            dispatch(navigate('/'))
        }
    }
}

