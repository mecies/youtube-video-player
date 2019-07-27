import axios from 'axios';

const KEY = 'AIzaSyABvfoMff_9uF4vGwdX--JlDi3W25ikSWQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
})