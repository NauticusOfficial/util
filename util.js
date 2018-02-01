/**
 * @description used to retrieve GET params from the current url.
 * @author /alexatnauticus
 * @param p the key of the GET param
 * @returns {boolean} false if it dosen't exist, true if it does, string if the GET param has a value associated.
 */
function getParam(p){
    let a = window.location.search.substr(1);
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
