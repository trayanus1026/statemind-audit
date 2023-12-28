import React from 'react'
import { Flex, Typography } from 'antd'

interface IDescription {
  tvl: number
  loc: number
}
const { Paragraph } = Typography

const Description: React.FC<IDescription> = ({ tvl, loc }) => {
  return (
    <Flex>
      <Paragraph>tvl: {tvl}</Paragraph>
      <Paragraph>loc: {loc}</Paragraph>
    </Flex>
  )
}

export default Description