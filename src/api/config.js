import axios from "axios";
export const HOST = 'https://api.example.com/v1';
const basicToken = 'cGXysWJlcJhdsSJdIUP873mVzaFYxLTEyM1NlY3JldA';

// https://dev.to/krishnapaul/managing-access-tokens-in-react-or-react-native-with-axios-and-context-api-4104

export const configureAxiosHeaders = (token) => {
    try {
        axios.defaults.baseURL = HOST;
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
        console.log("Configured Axios")
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}