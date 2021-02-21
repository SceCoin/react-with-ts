import React, { useState } from 'react'
const LikeButton: React.FC = () => {
  const [obj, setObj] = useState({like: 0, on: true})

  return (
    <>
    <button onClick={() => setObj({like: obj.like + 1, on: obj.on})}>点赞{obj.like}</button>
    <button onClick={() => setObj({like: obj.like, on: !obj.on})}>{obj.on ? 'true': 'false'}</button>
    </>
  )
}

export default LikeButton
