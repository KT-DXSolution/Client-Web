import React, {useEffect, useState} from "react";
import QueryString from "qs";

const Token = ({match}) => {
    const [apiToken, setApiToken] = useState(null);
    const queryData = QueryString.parse(window.location.search, {ignoreQueryPrefix:true});

    useEffect(()=>{
        let token = queryData.token;
        setApiToken(token);
        if(token){
            localStorage.setItem('ceoSeq',26122); // TODO : Mapping Token-Manager seq 
            localStorage.setItem('apiToken',token)
            window.close();
        }
    },[apiToken])

    return (
        <div>
        <p>token={apiToken}</p>
        </div>
    );
}

export default Token;