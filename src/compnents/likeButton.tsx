import React, { useState, useEffect } from 'react'
const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0)
  const [on, setOn] = useState(true)

  useEffect(() => {
    document .title = `点击了${like}次`
  })

  return (
    <>
    <button onClick={() => setLike(like + 1)}>点赞{like}</button>
    <button onClick={() => setOn(!on)}>{on ? 'true': 'false'}</button>
    </>
  )
}

export default LikeButton
