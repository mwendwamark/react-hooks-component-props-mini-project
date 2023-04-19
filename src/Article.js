import React from "react";

function Article ({title ,date = "January 1, 1970",preview, min}){
    return (
        <article>
            <h3>{title}</h3>
            <small>
                {date}.{min}  {" "}
            </small>
            <p>{preview}</p>
        </article>
    )
}
export default Article;