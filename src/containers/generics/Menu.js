import React from 'react';
import {CardHeader, Card, CardBody, Col, Row, Table, Button} from 'reactstrap';

class Menu extends React.Component {
    state = {}
    //props={name: string, createNewElement: ()=>{}, elements: [{}, {}]}

    render(){
        const button = this.props.createNewElement ?
            (<Button color="primary" onClick={this.props.createNewElement}></Button>) : null;
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>List of {this.props.name}</CardHeader>
                            <CardBody>
                                <Table responsive striped hover>
                                    <tbody>
                                    <tr>
                                        {Object.values(this.props.elements[0]).map((el,ind)=>{
                                            return (<td key={ind}><strong>{el}</strong></td>)
                                        })}
                                    </tr>
                                    {this.props.elements.map((el,ind)=>{
                                        return (
                                            <tr key={ind}>
                                                {Object.values(el).map(value => (<td>{value}</td>))}
                                            </tr>
                                        )
                                    })}
                                    </tbody>
                                </Table>
                                {button}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Menu;