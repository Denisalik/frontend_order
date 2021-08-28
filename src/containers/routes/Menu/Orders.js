import React from 'react';
import Menu from '../../generics/Menu'
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import {actionCreator} from "../../../redux/action-creators/music";

class Orders extends React.Component {
    async componentDidMount() {
        const dispatch = this.props.dispatch
        await actionCreator.fetchOrders()(dispatch);
    }

    render() {
        return (<Menu name="Orders" elements={this.props.orders} createNewElement={()=> {this.props.history.push("/orders/create")}}></Menu>)
    }
}

export default withRouter(connect(state => ({
        orders: state.music.orders
    })
)(Orders));