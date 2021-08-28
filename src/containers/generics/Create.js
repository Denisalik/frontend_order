import React from 'react';
import {CardHeader, Card, CardBody, Col, Row, Table, Button, Input} from 'reactstrap';

class Create extends React.Component {

    //props={name: string, Create: ()=>{}, fields: {}}

    render() {
        const fields = this.props.fields
        const checkbox = (name, value, handleCheck)=> (<Input type={"checkbox"} name={name} value={value} onChange={handleCheck}></Input>)
        const text = (name, value, handle) => (<Input
            type="text"
            name={name}
            value={value}
            onChange={handle}
        />)
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                Create new {this.props.name}
                            </CardHeader>
                            <CardBody>
                                <Table responsive striped hover>
                                    <tbody>
                                    {Object.keys(fields).map(
                                        (k) => (
                                            <tr key={k}>
                                                <td>{`${k}:`}</td>
                                                <td>
                                                    {typeof fields[k] === "boolean" ?
                                                        checkbox(k, fields[k], this.props.handleCheck(k)) :
                                                        text(k, fields[k], this.props.handle(k))}
                                                </td>
                                            </tr>
                                        ),
                                    )}
                                    </tbody>
                                </Table>
                                    <Button color="success" onClick={this.props.create}>
                                        Create
                                    </Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Create;