import React from "react";
import Article from './Article.js'
import articles from  "../fixtures.js"

function App() {
    return (
        <div>
            <h1>App name</h1>
            <Article article={articles[0]}></Article>
        </div>
    )
}

export default App