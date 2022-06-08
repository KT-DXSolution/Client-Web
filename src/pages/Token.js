import React, {useEffect, useState} from "react";
import { useNavigate  } from "react-router-dom";

const Token = () => {
    const navigate = useNavigate();
    const [apiToken, setApiToken] = useState(null);
    // let apiToken;

    useEffect(()=>{
        let token = window.location.href.split('token=')[1]
        console.log('token:',token)
        setApiToken(token);
        if(token){
            sessionStorage.setItem('ceoSeq',1);
            sessionStorage.setItem('apiToken',token)
            navigate("/")
        }
    },[apiToken])

    return (
        <>
        <p>token={apiToken}</p>
        </>
    );
}

export default Token;