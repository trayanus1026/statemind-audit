import React from 'react'
import { Flex, Typography } from 'antd'

interface IDescription {
  tvl: number
  loc: number
}

const { Paragraph } = Typography

const Description: React.FC<IDescription> = ({ tvl, loc }) => {
  return (
    <Flex gap="small" vertical>
      <Paragraph style={{ margin: 0 }}>tvl: {tvl}</Paragraph>
      <Paragraph style={{ margin: 0 }}>loc: {loc}</Paragraph>
    </Flex>
  )
}

export default Description