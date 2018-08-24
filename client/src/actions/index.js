import axios from '../axios';
import { showSuccess, showError } from '../utilities/alertnotification';

const youtubeApiKey = ''

export const timeChart = async (value) => {
    return axios.request({
        method: 'post',
        url: '/api/timeChart',
        'noRetry': true,
        data: value
    }).then((response) => {
        // callBack(response.data)
        showSuccess('Time Chart Save Successfully');
        return Promise.resolve(response.data);
    }).catch((err) => {
        showError(`Error occured ${err}`);
        return Promise.reject(err);
    });
};

export const borrowerProfile1 = async (value, applicationId) => {
    return axios.request({
        method: 'put',
        url: `/api/borrowerProfile1/${applicationId}`,
        'noRetry': true,
        data: value
    }).then((response) => {
        // callBack(response.data)
        showSuccess('Borrower Profile Save Successfully');
        return Promise.resolve(response.data);
    }).catch((err) => {
        showError(`Error occured ${err}`);
        return Promise.reject(err);
    });
};

export const entryList = async () => {
    return axios.request({
        method: 'get',
        url: '/api/entryList',
        'noRetry': true
    }).then((response) => {
        // callBack(response.data)
        return Promise.resolve(response.data);
    }).catch((err) => {
        showError(`Error occured ${err}`);
        return Promise.reject(err);
    });
};




export const fetch1stContent = async (callBack) => {
    return axios.request({
        method: 'get',
        url: '/appStart',
        'noRetry': true,
    }).then((response) => {
        callBack(response.data)
        return Promise.resolve(response.data);
    }).catch((err) => {
        console.log(err);
        return Promise.reject(err);
    });
};

export const deleteContent = (videoId, callBack) => {
    return axios.request({
        method: 'get',
        url: `/deteteVideo?videoId=${videoId}`,
        'noRetry': true,
    }).then((response) => {
        callBack(response.data);
        return Promise.resolve(response.data);
    }).catch((err) => {
        console.log(err);
        return Promise.reject(err);
    });
};

export const videoContent = (videoId) => {
    return axios.request({
        method: 'get',
        url: `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${youtubeApiKey}&part=snippet,contentDetails`,
        'noRetry': true,
    }).then((response) => {
        return Promise.resolve(response.data);
    }).catch((err) => {
        console.log(err.data);
        return Promise.reject(err.data);
    })
}