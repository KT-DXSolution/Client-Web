import React, {useEffect, useState} from "react";
import { useNavigate  } from "react-router-dom";
import QueryString from "qs";

const Token = ({match}) => {
    const navigate = useNavigate();
    const [apiToken, setApiToken] = useState(null);
    const queryData = QueryString.parse(window.location.search, {ignoreQueryPrefix:true});
    // let apiToken;

    useEffect(()=>{
        console.log(window.location.href)
        console.log(queryData)
        let token = queryData.token;
        console.log('token:',token)
        setApiToken(token);
        if(token){
            sessionStorage.setItem('ceoSeq',6677);
            sessionStorage.setItem('apiToken',token)
            navigate("/")
            window.location.reload();
        }
    },[apiToken])

    return (
        <div>
        <p>token={apiToken}</p>
        </div>
    );
}

export default Token;