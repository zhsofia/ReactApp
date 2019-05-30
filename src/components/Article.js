import React, {Component, PureComponent} from "react";

class Article extends PureComponent{

    constructor(props){
        super(props);
        this.state={
            count: 0
        }
    }
/*
    shouldComponentUpdate(nextProps, nextState) {
        return this.state.isOpen !== nextState.isOpen
    }
*/
    componentWillMount() {
        console.log('---','mounting')
    }

    /*
    componentWillReceiveProps(nextProps){
        console.log('---','will receive props')
        if(nextProps.defaultOpen !== this.props.defaultOpen){ this.setState({
            isOpen: nextProps.defaultOpen
        })
        }
    }*/

    componentWillUpdate() {
        console.log('---','will update')
    }



    render(){
        const{article, isOpen, onButtonClick}=this.props;
        console.log('---');
        const body = isOpen && <section className="card-text">{article.text}</section>
        return(
            <div className="card mb-4">
                <div className="card-header">
                <h2 onClick={this.incrementCounter} className="display-4">
                    {article.title}
                    clicked {this.state.count}
                <button className="btn btn-secondary mx-3" onClick={onButtonClick}>
                    {isOpen ? 'close' : 'open'}
                </button>
                </h2>
                </div>
                <div className="card-body">
                    <h6>creation date: {(new Date(article.date)).toDateString()}</h6>
                {body}

                </div>
            </div>
        )
    }

    incrementCounter =() => {
        this.setState({
            count: this.state.count + 1
        })
    }

}

export default Article