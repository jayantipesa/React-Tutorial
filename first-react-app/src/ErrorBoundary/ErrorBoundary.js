//include this file in the file you want to use error boundary
//then simply enclose the whole code you will be returning in the <ErrorBoundary> tag.


import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage : ''
    }

    componentDidCatch = (error, info)=> {
        this.setState({hasError : true, errorMessage : error});
    }

    render() {
        if(this.state.hasError) {
            return <h1>{this.state.errorMessage}</h1> ;
        }
        else 
            return this.props.children;
    }
}

export default ErrorBoundary;