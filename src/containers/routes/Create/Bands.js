import React from 'react';
import Create from '../../generics/Create'
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";

class Bands extends React.Component {
    render() {
        return (<Create></Create>)
    }
}

export default withRouter(connect(state => ({
    //todo
    })
)(Bands));