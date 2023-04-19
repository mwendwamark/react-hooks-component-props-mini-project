import React from "react";
import blogData from "../data/blog";
import AboutCard from "../About"
import HeaderCard from "../Header"
import ArticleList from "../ArticleList"

const {name,image, about,posts ,preview}=blogData;

console.log(blogData);

function App() {
  return (
    <div className="App">
      <HeaderCard name={name} />
      <AboutCard image={image} about = {about} preview={preview}/>
      <ArticleList post= {posts}/>
    </div>
  );

}

export default App;
