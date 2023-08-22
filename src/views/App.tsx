import { Avatar, Button, List } from 'antd'
import { useState, } from "react"
import { getResouceList } from '../api/list'
import { addTodo } from '../redux/actions/demoAction'
import { useSelector, useDispatch } from 'react-redux'


interface IListData {
  title: string;
  desc: string;
  url: string;
  logo: string;
}

export const App: React.FC = () => {
  const dispatch = useDispatch();
  const [listData, setListData] = useState([] as IListData[]);
  dispatch(addTodo('hello, world'));
  let { message } = useSelector((state: { demoReducer: { text: string } }) => ({ message: state.demoReducer.text }))
  function getData() {
    getResouceList().then(res => {
      setListData(res.data.data)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div>
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
      <span>{message}</span>
    </div>
  );
}



