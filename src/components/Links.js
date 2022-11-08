import React from "react";

function Links( {linkedin, github}) {
    return (
        <h3>
            Links
            <a href={linkedin}>{linkedin}</a>
            <a href={github}>{github}</a>
        </h3>
    )
}

export default Links