import React from 'react';
import {CardHeader, Card, CardBody, Col, Row, Table, Button, Input} from 'reactstrap';

class Create extends React.Component {

    //props={name: string, Create: ()=>{}, fields: {}}

    render() {
        const fields = this.props.fields
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
                                                    <Input
                                                        type="text"
                                                        name={k}
                                                        value={fields[k]}
                                                        onChange={this.props.handle(k)}
                                                    />
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