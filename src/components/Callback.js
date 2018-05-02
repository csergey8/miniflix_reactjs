import { Component } from 'react';
import { setIdToken, setAccessToken } from '../utils/AuthService';


class Callback from Component {

    componentDidMount() {
        setAccessToken();
        setIdToken();
        window.location.href = "/";
    }

    render() {
        return null;
    }
}

export default Callback;

