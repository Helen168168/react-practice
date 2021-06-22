import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Select, Row, Col, Table } from "antd";
import { hot } from "react-hot-loader/root";
import { testServiceInterface } from '../../api/index'
import objCustomerData from './const'

const { Option } = Select;

const objSelectData = {
    customerTypeList: [],
    customerCategories: [],
    sellUserList: []
}

const objRowBtn = {
    title: '操作',
    dataIndex: 'operation',
    render: (_: any, record: any) => (
        <Button type="primary" htmlType="submit">
            delete
        </Button>
    )
}

interface isState {
    arrTestData: Array<Object>
}

class CustomerList extends React.Component<any, isState> {
    constructor(props: any) {
        super(props)
        this.state = {
            arrTestData: []
        }
    }
    componentDidMount() {
        this.getDicData()
    }
    render() {
        return (
            <div>
                <Form>
                    <Row gutter={30}>
                        {
                            objCustomerData.arrFormData.map(ObjItem => {
                                if (ObjItem.type === 'input') {
                                    return <Col span={5}>
                                        <Form.Item label={ObjItem.label} name={ObjItem.model}>
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                } else if (ObjItem.type === 'select') {
                                    return <Col span={5}>
                                        <Form.Item
                                            label={ObjItem.label} name={ObjItem.model}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "Please input your password!",
                                                }
                                            ]}
                                        >
                                            <Select>
                                                {
                                                    this.state.arrTestData.map((objOption: any, numIndex: Number) => {
                                                        return <Option 
                                                        key={objOption.val} 
                                                        value={objOption.val}>
                                                            {objOption.name}
                                                        </Option>
                                                    })
                                                }
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                }
                            })
                        }

                        <Col span={4} style={{ textAlign: "right" }}>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Submit Info
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
                <Table dataSource={objCustomerData.dataSource} columns={[...objCustomerData.columns, objRowBtn]}></Table>
            </div>
        );
    }

    getDicData() {
        const that = this;
        let objParams = {
            code: 'freight_work_order_status'
        }
        testServiceInterface.getDictData(objParams).then(res => {
            that.setState({
                arrTestData: res.data
            });
            
        }).catch(err => {})
    }
}

export default hot(CustomerList);
