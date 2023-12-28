import React, { useEffect } from 'react'
import { Avatar, List, Skeleton } from 'antd'
import { fetchData } from '@/store/slices/client.slice'
import { useAppDispatch, useAppSelector } from '@/store/hook'
import Description from '@/components/client/Description'

const ClientsList: React.FC = () => {
  const dispatch = useAppDispatch()
  const clients =  useAppSelector(state => state.clientSlice.clients)
  const loading = useAppSelector(state => state.clientSlice.loading)

  useEffect(() => {
    console.log('asdf')
    dispatch(fetchData())
  }, [dispatch])

  return (
    <List
      className="demo-loadmore-list"
      loading={loading}
      itemLayout="horizontal"
      dataSource={clients}
      renderItem={(item) => (
        <List.Item>
          <Skeleton avatar title={false} active>
            <List.Item.Meta
              avatar={<Avatar src={item.img} />}
              title={<a href="https://ant.design">{item.client}</a>}
              description={<Description tvl={item.tvl} loc={item.loc} />}
            />
          </Skeleton>
        </List.Item>
      )}
    />
  )
}

export default ClientsList