import React from 'react';
import Menu from '../../generics/Menu'
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";

class Orders extends React.Component {
    render() {
        return (<Menu></Menu>)
    }
}

export default withRouter(connect(state => ({
        //todo
    })
)(Orders));