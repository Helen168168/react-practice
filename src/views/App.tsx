import { Avatar, Button, List } from 'antd'
import { useState, } from "react"
import { getResouceList } from '../api/list'
import { useSelector, shallowEqual } from 'react-redux'


interface IListData {
  title: string;
  desc: string;
  url: string;
  logo: string;
}

export const App: React.FC = () => {
  const [listData, setListData] = useState([] as IListData[]);
  const { text } = useSelector((state: Record<string, Record<string, unknown>>) => state.demoReducer, shallowEqual)
  
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
      <span>{text as string}</span>
    </div>
  );
}

