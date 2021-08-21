import React from 'react';
import {Link } from 'react-router-dom';

class Navigation extends React.Component{
    render(){
        return (<div>
            {this.props.links.map((el, ind)=>{
                <Link to={el.url} key={ind}>{el.name}</Link>
            })}
        </div>)
    }
}
export default Navigation;