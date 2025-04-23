import React from "react";
import { useParams } from "react-router-dom";

const UserComp = () => {
    // Pull username from the Dynamic URL and use it further
    const {username} = useParams();

    return (
        <div className="content">
            Username: {username}
        </div>
    )
}

export default UserComp;
