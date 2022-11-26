import axios from 'axios';
import { createContext, useReducer } from 'react';
import GithubReducer from './GithubReducer';

const GithubContext = createContext();

const GithubProvider = ({ children }) => {

    const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
    const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
    const github = axios.create({ baseURL: GITHUB_URL, headers: { Authorization: `token ${GITHUB_TOKEN}` } });
    
    const initialState = { users: [], user: {}, repos: [], loading: false };
    const [state, dispatch] = useReducer(GithubReducer, initialState);

    //Search Users
    const searchUsers = async (text) => {
        setLoadig();
        
        const { data } = await github.get(`/search/users?q=${text}`);
        
        dispatch({ type: 'GET_USERS', payload: data.items });
    }

    //Get User And Repos
    const getUserAndRepos = async (login) => {
        setLoadig();

        const { data: user } = await github.get(`/users/${login}`);
        const { data: repos } = await github.get(`/users/${login}/repos`);

        dispatch({type: 'GET_USER_AND_REPOS', payload: {user, repos}});
    }

    //Clear Users
    const clearUsers = () => dispatch({ type: 'CLEAR_USERS' }) 

    //SET LOADING
    const setLoadig = () => dispatch({ type: 'SET_LOADING' });


    return (
        <GithubContext.Provider value={{ ...state, searchUsers, clearUsers, getUserAndRepos }}>
            { children }
        </GithubContext.Provider>
    );
}

export { GithubProvider };
export default GithubContext;