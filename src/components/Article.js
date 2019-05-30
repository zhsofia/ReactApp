import React, {Component} from "react";

class Article extends Component{

    constructor(props){
        super(props);
        this.state={
            isOpen:false
        }
        this.handleClick = handleClick.bind(this)
    }
    render(){
        const{article}=this.props;
        console.log('---');
        const body = this.state.isOpen && <section>{article.text}</section>
        return(
            <div>
                <h2>
                    {article.title}
                </h2>
                <button onClick={this.handleClick}>
                    {this.state.isOpen ? 'close' : 'open'}
                </button>
                {body}
                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
            </div>
        )
    }
}

function handleClick() {
    console.log('---','clicked')
    this.setState({
        isOpen: !this.state.isOpen
    })
}
export default Article