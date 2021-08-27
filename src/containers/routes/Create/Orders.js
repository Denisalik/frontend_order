import React from 'react';
import Create from '../../generics/Create'
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import {actionCreator} from "../../../redux/action-creators/music";

class CreateOrders extends React.Component {
    state = {
        concert_id: 1,
        client_id: 1,
        place_of_purchase: "",
        vip_status: false
    }
    handleChange = (k) => (e) => {
        this.setState({[k]: e.target.value})
    }

    create = async () => {
        const dispatch = this.props.dispatch;
        const {concert_id, client_id, ...payload} = this.state;
        await actionCreator.postOrder(concert_id, client_id, payload)(dispatch)
        this.props.history.push("/orders");
    }
    render() {
        return (<Create name="Order" create={this.create} fields={this.state} handle={() => (k) => this.handleChange(k)}></Create>)
    }
}

export default withRouter(connect(state => ({
    })
)(CreateOrders));