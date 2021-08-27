import React from 'react';
import Menu from '../../generics/Menu'
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import {actionCreator} from "../../../redux/action-creators/music";

class Bands extends React.Component {
    async componentDidMount() {
        const dispatch = this.props.dispatch
        await actionCreator.fetchBands()(dispatch);
    }
    render() {
        return (<Menu name="Bands" elements={this.props.bands}></Menu>)
    }
}

export default withRouter(connect(state => ({
        bands: state.music.get("bands")
    })
)(Bands));