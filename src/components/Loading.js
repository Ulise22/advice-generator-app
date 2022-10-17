import React from "react";
import { TailSpin } from 'react-loader-spinner';
import './Loading.css';

const Loading = () => {
    return(
        <div className="loading">
            <TailSpin
                height="80"
                width="80"
                color="#52ffa8"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    )
}

export default Loading;