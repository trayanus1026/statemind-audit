import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Flex, Result } from 'antd'

const PageNotFound: React.FC = () => {
  return (
    <Flex className="flex-box" justify="center" align="center" vertical>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link to="/"><Button type='primary'>Back Home</Button></Link>
        }
      />
    </Flex>
  )
}

export default PageNotFound
