import React,{PureComponent} from "react"
import ArticleList from './ArticleList/ArticleList.js'
import articles from  '../fixtures.js'
import 'bootstrap/dist/css/bootstrap.css'


class App extends PureComponent {
    state = {
        reverted: false
    }
    render(){
        console.log('---', 1)
        return(
        <div className="container p-3">
            <div className="jumbotron ">
                <h1 className="display-3">App name
                    <button className="btn btn-dark" onClick={this.revert}>Revert</button>
                </h1>
            </div>
            <ArticleList articles={this.state.reverted ? articles.slice().reverse() : articles}></ArticleList>
        </div>
        )
    }
    revert = () => {
        this.setState({
        reverted: !this.state.reverted
    })
}
}
export default App