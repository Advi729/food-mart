import { useRouteError } from "react-router-dom";
import React from "react";

const Error = () => {
    const err = useRouteError();
    console.log('err: ', err);
    return (
        <div>
            <h1>{err?.status + ' : ' + err?.statusText}!</h1>
            <h2>{err?.error?.message}</h2>
        </div>
    );
};

export default Error;