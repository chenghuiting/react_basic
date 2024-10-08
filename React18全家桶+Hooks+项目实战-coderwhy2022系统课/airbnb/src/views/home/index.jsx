import React, { useEffect } from 'react'
import hyRequest from '@/services'
import HomeWrap from './style'

export default function Home() {

  useEffect(() => {
    hyRequest.get({ url: "/home/highscore" }).then(res => {
      console.log(res);

    })
  }, [])//传入一个空数组保证代码只执行一次

  return (
    <HomeWrap>
      home
    </HomeWrap>
  )
}
