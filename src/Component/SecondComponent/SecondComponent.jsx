import React from 'react';
import { Table, Button, Row } from 'react-bootstrap';
import { ic_delete as deleteIcon } from 'react-icons-kit/md/ic_delete';
import { pencil as editIcon } from 'react-icons-kit/icomoon/pencil';
import { Icon } from 'react-icons-kit';
import ReactTooltip from 'react-tooltip';


class SecondPage extends React.Component {
    constructor() {
        super();
        this.state = {
            userData: [
                {
                    mode: 'Rail',
                    originCountry: 'USA',
                    pop: 'London',
                    por: 'KEMRA',
                    pol: 'KEMRA',
                    st: 'Doc/stuffing',
                    modifiedBy: 'pverma',
                    modifiedDate: '22/05/2020'
                },
                {
                    mode: 'Road',
                    originCountry: 'USA',
                    pop: 'London',
                    por: 'KEMRA',
                    pol: 'KEMRA',
                    st: 'Doc/stuffing',
                    modifiedBy: 'pverma',
                    modifiedDate: '22/05/2020'
                },
                {
                    mode: 'Rail',
                    originCountry: 'USA',
                    pop: 'London',
                    por: 'KEMRA',
                    pol: 'KEMRA',
                    st: 'Doc/stuffing',
                    modifiedBy: 'pverma',
                    modifiedDate: '22/05/2020'
                },
                {
                    mode: 'Road',
                    originCountry: 'USA',
                    pop: 'London',
                    por: 'KEMRA',
                    pol: 'KEMRA',
                    st: 'Doc/stuffing',
                    modifiedBy: 'pverma',
                    modifiedDate: '22/05/2020'
                },
                {
                    mode: 'Rail',
                    originCountry: 'USA',
                    pop: 'London',
                    por: 'KEMRA',
                    pol: 'KEMRA',
                    st: 'Doc/stuffing',
                    modifiedBy: 'pverma',
                    modifiedDate: '22/05/2020'
                },
                {
                    mode: 'Road',
                    originCountry: 'USA',
                    pop: 'London',
                    por: 'KEMRA',
                    pol: 'KEMRA',
                    st: 'Doc/stuffing',
                    modifiedBy: 'pverma',
                    modifiedDate: '22/05/2020'
                },
                {
                    mode: 'Rail',
                    originCountry: 'USA',
                    pop: 'London',
                    por: 'KEMRA',
                    pol: 'KEMRA',
                    st: 'Doc/stuffing',
                    modifiedBy: 'pverma',
                    modifiedDate: '22/05/2020'
                },
            ],

            increasePage: 3,
            decreasePage: 0,
            counter: 1,
            prev: true
        };
    }

    async handleNext() {
        await this.setState(prevState => {
            return {
                counter: prevState.counter + 1,
                increasePage: prevState.increasePage + 3,
                decreasePage: prevState.decreasePage + 3
            };
        });
        if (this.state.counter === 1) {
            this.setState({ prev: true });
        } else this.setState({ prev: false });
    }

    async handlePrevious() {
        await this.setState(prevState => {
            return {
                counter: prevState.counter - 1,
                increasePage: prevState.increasePage - 3,
                decreasePage: prevState.decreasePage - 3
            };
        });

        if (this.state.counter === 1) {
            this.setState({ prev: true });
        }
    }


    render() {
        const temp = this.state.userData.length;
        const length = Math.ceil(temp / 3);
        let next = false;
        if (this.state.counter === length) {
            next = true;
        }
        return (
            <div className='containerStyle'>
                <Table bordered hover>
                    <thead>
                        <tr>
                            <th >Transport Mode</th>
                            <th >Origin Country</th>
                            <th >Place of Pickup </th>
                            <th >Post of Receipt</th>
                            <th >Port of Loading </th>
                            <th >Stuffling Type</th>
                            <th >Modified By </th>
                            <th >Modified Date </th>
                            <th >Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.userData.slice(
                            this.state.decreasePage,
                            this.state.increasePage
                        ).map((userList, index) => {
                            return (
                                <tr>
                                    <td >
                                        {userList.mode}
                                    </td>
                                    <td >
                                        {userList.originCountry}
                                    </td>
                                    <td >
                                        {userList.pop}
                                    </td>
                                    <td >
                                        {userList.pop}
                                    </td>
                                    <td >
                                        {userList.pol}
                                    </td>
                                    <td >
                                        {userList.st}
                                    </td>
                                    <td >
                                        {userList.modifiedBy}
                                    </td>
                                    <td >
                                        {userList.modifiedDate}
                                    </td>
                                    <td style={{ padding: '20px' }}>
                                        <Row >
                                            <Button
                                                type="button"
                                                className="btn btn-primary btn-sm"
                                                data-tip
                                                data-for="start"
                                            >
                                                <Icon size={10} icon={editIcon} />
                                                <ReactTooltip id="start" effect="solid">
                                                    <span>edit</span>
                                                </ReactTooltip>
                                            </Button> &nbsp;
                                            <Button
                                                type="button"
                                                className="btn btn-primary btn-sm"
                                                data-tip
                                                data-for="reshedule"
                                            >
                                                <Icon size={10} icon={deleteIcon} />
                                                <ReactTooltip id="reshedule" effect="solid">
                                                    <span>delete</span>
                                                </ReactTooltip>
                                            </Button>
                                        </Row>
                                    </td>

                                </tr>
                            );
                        })}
                    </tbody>
                </Table>

                <div style={{ textAlign: 'center',marginBottom:'20px' }}>
                    <button
                        type="button"
                        disabled={this.state.prev}
                        onClick={() => this.handlePrevious()}
                        className="btn btn-primary btn-fill btn-sm"
                    >
                        BACK
                        </button>
                           &ensp;&lt; Page <b>{this.state.counter}</b> of{' '}
                    {length} &gt;&ensp;
                        <button
                        type="button"
                        disabled={next}
                        onClick={() => this.handleNext()}
                        className="btn btn-primary btn-fill btn-sm"
                    >
                        NEXT
                      </button>
                </div>

            </div>
        );
    }
}

export default SecondPage;