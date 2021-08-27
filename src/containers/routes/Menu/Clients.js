import React from 'react';
import Menu from '../../generics/Menu'
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import {actionCreator} from "../../../redux/action-creators/music";

class Clients extends React.Component {
    async componentDidMount() {
        const dispatch = this.props.dispatch
        await actionCreator.fetchClients()(dispatch);
    }
    render() {
        return (<Menu name="Clients" elements={this.props.clients}></Menu>)
    }
}

export default withRouter(connect(state => ({
        clients: state.music.get("clients")
    })
)(Clients));