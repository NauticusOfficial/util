/**
 * @description used to retrieve GET params from the current url.
 * @author /alexatnauticus
 * @param p the key of the GET param
 * @returns {boolean} false if it dosen't exist, true if it does, string if the GET param has a value associated.
 */
function getParam(p,url){
    let a = (url !== undefined) ? url.substr(url.indexOf("?") + 1) : window.location.search.substr(1);
    a = a.split("&");
    let found = "";
    a.forEach(function(param){
         param = param.split("=");
         if(param[0] === p){
             found = param[1];
         }
    });
    return (found === "") ? false : (found === undefined) ? true : found;
}

/**
 * @description gets the cookie given a key.
 * @param {string} key - the key of the cookie to get.
 * @return {string} value - the value of the cookie, null if not found.
 * @author Alex Redwood
 */
function getCookie(key) {
    var v = null ;
    var cookies = document.cookie.split(";");
    cookies.forEach(function(kv) {
        var k_v = kv.split("=");
        if (k_v[0].trim() === key) {
            v = k_v[1];
        }
    });
    return v;
}

/**
 * @description sets a cookie, fairly simple.
 * @param {string} name - the name of the cookie, could also be referred to as key.
 * @param {*} value - the value of the cookie, will be converted into string.
 * @param {object} options - alter the setting of a cookie, not used.
 * @return {boolean} success - always true.
 */
function setCookie(name,value,options){

    value = (typeof value === "string") ? value : (typeof value === "object") ? JSON.stringify(value) : value.toString();
    var str = name + "=" + value + ";"
    var location = "." + window.location.hostname;
    // var str = `${name}=${value};`;
    var defaults = {
        "domain": location,
        "secure":""
    };

    if(window.location.hostname === "localhost"){
        delete defaults["domain"];
        delete defaults["secure"]
    }

    for (var i in defaults) {
        str += ";"+ i;
    }
    // Object.keys(defaults).forEach(def => {
    //     str += `${def}${(defaults[def]) ? "="+defaults[def] : ""};`;
    // });

    document.cookie = str;
    return true;

}
