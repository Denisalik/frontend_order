import React from 'react';
import Menu from '../../generics/Menu'
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import {actionCreator} from "../../../redux/action-creators/music";

class Concerts extends React.Component {
    async componentDidMount() {
        const dispatch = this.props.dispatch
        await actionCreator.fetchConcerts()(dispatch);
    }

    render() {
        return (<Menu name="Concerts" elements={this.props.concerts}></Menu>)
    }
}

export default withRouter(connect(state => ({
        concerts: state.music.get("concerts")
    })
)(Concerts));