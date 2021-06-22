import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Select, Row, Col, Table } from "antd";
import { hot } from "react-hot-loader/root";
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

class CustomerList extends React.Component {
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <div>
                <Form>
                    <Row gutter={30}>
                        {
                            objCustomerData.arrFormData.map(ObjItem => {
                                if(ObjItem.type === 'input') {
                                    return  <Col span={5}>
                                        <Form.Item label={ ObjItem.label } name={ ObjItem.model }>
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                } else if(ObjItem.type === 'select') {
                                    return <Col span={5}>
                                        <Form.Item
                                            label={ ObjItem.label } name={ ObjItem.model }
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "Please input your password!",
                                                }
                                            ]}
                                        >
                                        <Select>
                                            { this.judgeEmpty(ObjItem.arrOptionData) }
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
                <Table dataSource={objCustomerData.dataSource} columns={ [...objCustomerData.columns, objRowBtn] }></Table>
            </div>
        );
    }
    judgeEmpty(arrData: string): void {
        if(arrData) {
            return objSelectData[arrData].map((objOption: any) => {
                return <Option value="jack">{objOption}</Option>
            })
        }
    }
}

export default hot(CustomerList);
