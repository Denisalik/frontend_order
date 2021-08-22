import React from 'react';
import {CardHeader, Card, CardBody, Col, Row, Table, Button, Input} from 'reactstrap';

class Create extends React.Component {
    state = {}
    //props={name: string, Create: ()=>{}, elements: [{}, {}] used in componentDid}
    handleChange = (k) => (e) => {
        const key = k.toLowerCase()
        this.setState({[key]: e.target.value})
    }
    render() {
        const {...StateData} = this.state
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
                                    {Object.keys(StateData).map(
                                        (k) => (
                                            <tr key={k}>
                                                <td>{`${k}:`}</td>
                                                <td>
                                                    <Input
                                                        type="text"
                                                        name={k}
                                                        value={StateData[k]}
                                                        onChange={this.handleChange(k)}
                                                    />
                                                </td>
                                            </tr>
                                        ),
                                    )}
                                    </tbody>
                                </Table>
                                    <Button color="success" onClick={this.props.Create}>
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