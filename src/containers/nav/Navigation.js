import React from 'react';
import {Link } from 'react-router-dom';
import './Navigation.module.css';
class Navigation extends React.Component{
    render(){
        return (<div className={"Navigation"}>
            {this.props.links.map((el, ind)=>(
                <Link to={el.url} key={ind} className={"Link"}>{el.name}</Link>
            ))}
        </div>)
    }
}
export default Navigation;