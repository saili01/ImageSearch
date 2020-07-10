import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com/',
    headers:{
        Authorization: 'Client-ID _w7kRrYkf6aEAZCB8UiThCipu2OgR51UprZkMBNmRfQ',
    }
});