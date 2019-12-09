const axios = require('axios');

var url = "http://fundoonotes.incubation.bridgelabz.com/api"

var token = localStorage.getItem('AdminLoginToken')



export function admin(AdminLoginData) {
    console.log("admin log in data in services--> ", JSON.stringify(AdminLoginData))
    var adminlogin = axios.post(url + '/user/adminLogin', AdminLoginData)
    console.log("Returned admin login data--------->", adminlogin);

    return adminlogin;

}

export function getAdminList() {
    // console.log("admin list before in services--> ", JSON.stringify(getList))
    return axios.get(url + '/user/getAdminUserList')
    // console.log("Returned admin list--------->", admin);

    // return admin;

}

export function getBasicAdvanceCount() {
    // console.log("Count in services--> ", getcount)
    // console.log("token ----->", myToken);

    return axios.get(url + '/user/UserStatics', {
        headers: {
            'Authorization': token
        }
    });
    // console.log("Returned Count in services----------------------->",count);

    // return count;
}


export function getUnApprovedAnswer() {
    console.log("In getUnApprovedAnswer in service");

    // console.log("admin list before in services--> ", JSON.stringify(getList))
    return axios.get(url + '/questionAndAnswerNotes/getUnApprovedAnswer', {
        headers: {
            'Authorization': token
        }
    })


}

// POST /questionAndAnswerNotes/approve/{parentId}
export function Accept(data) {
    console.log("accept data in services--> ", data)
    return axios.post(url + '/questionAndAnswerNotes/approve/' + data, JSON.stringify({
        id: data
    }), {
        headers: {
            'Authorization': token,
            contentType: 'application/json; charset=utf-8',
        },
    })
}

// POST /questionAndAnswerNotes/reject/{parentId}
export function Reject(data) {
    console.log("reject data in services--> ", data)
    var rej = axios.post(url + '/questionAndAnswerNotes/reject/' + data, JSON.stringify({
        id: data
    }), {
        headers: {
            'Authorization': token,
            contentType: 'application/json; charset=utf-8',
        },
    })
    console.log("Returned reject data--------->", rej);

    return rej;

}