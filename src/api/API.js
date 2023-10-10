export default async function APICall({url,method = "get",body,headers}) {
  
    try{
        const response = await fetch(url,{
            method,
            body,
            headers
        });
    
        return response.json();
    }catch(e){
        Promise.reject(e);
        //Si la llamda falla caera en el catch desde donde se este llamando
    }

}

