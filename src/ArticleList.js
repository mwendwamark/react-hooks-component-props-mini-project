import React from "react";
import Article from "./Article";
 function ArticleList({post}){
    return(
        <main>
            {post.map(({id,title ,date ,preview ,minutes})=> (
                <Article 
                key = {id}
                title = {title}
                date = {date}
                preview = {preview}
                minutes = {minutes}
                />
            ))}
        </main>
    )
 }
 export default ArticleList;