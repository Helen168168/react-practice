import { Avatar, Button, List } from 'antd';
import  { useState } from "react";
import { getResouceList } from '../api/list'
import { connect } from 'react-redux'
import {  Dispatch,  } from 'redux';
import { addTodo } from '../redux/actions/demoAction'

interface IListData {
  title: string;
  desc: string;
  url: string;
  logo: string;
}

const App = ({ dispatch }: { dispatch: Dispatch }) => { 
  const [listData, setListData] = useState([] as IListData[]);
  function getData() {
    dispatch(addTodo('first redux object'));
    getResouceList().then(res => {
      setListData(res.data.data)
    }).catch(err => {
      console.log(err)
    })
  }
  return (
    <>
      <Button type="primary" onClick={getData}>Primary Button</Button>
      <List
        itemLayout="vertical"
        grid={{
          gutter: 16,
          xs: 1,
          sm: 1,
          md: 1,
          lg: 1,
          xl: 1,
          xxl: 1,
        }}
        dataSource={listData}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.logo} />}
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
    </>
  );
} 

export default connect()(App);

