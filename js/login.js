/**
 * 登陆工具
 */

var loginToken = 'loginToken'

getObjByLocal = (name) => {
    return JSON.parse(localStorage.getItem(name))
}

removeByLocal = (name) => {
    localStorage.removeItem(name)
}

window.onload = function(){
    if(!checkLogin()){
        this.alert('你没有登陆，请先登陆!')
        window.location.href = './login.html'
    }
       
}

logout = () => {
    removeByLocal(loginToken)
    window.location.href = './login.html'
}

checkLogin = () => {
    return getObjByLocal(loginToken)
}