import App from './app';

//follows the fetch api options
export default App.API({
    baseURL: 'https://localhost:8080',
    path: '/',
    timeout: 10000,
    options: {
        credentials: 'include',
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': 'localhost'
        },
        cache: "default"
    },
    responseIntercept: (response: any) => {
        return response.json()
    }
});

//https://javascript.info/fetch-api