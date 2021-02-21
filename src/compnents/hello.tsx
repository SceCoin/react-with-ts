import React from 'react'

interface IHelloProps {
  message?: string; // 加问号是可选的意思
}

const Hello: React.FC<IHelloProps> = (props) => {
  return <h2>{props.message}</h2>
}

Hello.defaultProps = {
  message: 'moren'
}

export default Hello
