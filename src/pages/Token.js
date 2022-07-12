import React, {useEffect, useState} from "react";
import QueryString from "qs";

const Token = () => {
    const queryData = QueryString.parse(window.location.search, {ignoreQueryPrefix:true});

    useEffect(()=>{
        let token = queryData.token;

        if(token){
            localStorage.setItem('ceoSeq',26122); // TODO : Mapping Token-Manager seq 
            localStorage.setItem('apiToken',token)
            window.close();
        }
    },[])

    return <></>;
}

export default Token;