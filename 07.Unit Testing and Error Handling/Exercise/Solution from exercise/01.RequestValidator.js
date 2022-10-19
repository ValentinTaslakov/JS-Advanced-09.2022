function requestValidator(obj){
    let aproveMetods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let pattern = /^[\w.]+$/g;
    let supportedVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let specialChar = [`<`, `>`, `\\`, `&`, `'`, `"`];

    if(!aproveMetods.includes(obj.method)){
        throw new Error("Invalid request header: Invalid Method");
    }

    if(!obj.hasOwnProperty("uri")){
        throw new Error("Invalid request header: Invalid URI");
    }
    if(!obj.uri !== "*" && !obj.uri.match(pattern)){
        throw new Error("Invalid request header: Invalid URI");
    }
    if(!supportedVersion.includes(obj.version)){
        throw new Error("Invalid request header: Invalid Version");
    }
    if(!obj.hasOwnProperty('message')){
        throw new Error("Invalid request header: Invalid Message");
    }

    for (const ch of obj.message) {
        if(specialChar.includes(ch)){
            throw new Error("Invalid request header: Invalid Message");
        }
    }
    return obj;
}

requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  }
  );