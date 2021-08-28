import React from "react";
import Navigation from "../nav/Navigation";
import items from "../../router/_nav";

class Layout extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Navigation links={items}></Navigation>
                <main>
                    {this.props.children}
                </main>
            </React.Fragment>
        )
    }
}
export default Layout;