import React from "react";
import { useParams } from "react-router-dom";

const ParamComp =  () => {
    const {id} = useParams();

    return (
        <div className="content">
            Params: {id}
        </div>
    )
}

export default ParamComp;