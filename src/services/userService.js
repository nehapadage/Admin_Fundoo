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