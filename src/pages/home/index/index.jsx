import { Component } from 'react'
import { View, Text, Swiper, SwiperItem } from '@tarojs/components'
import { } from 'taro-ui'

import './index.scss'

export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='content-body colorGlobal'>
        <View className='search-box displayNormal'>
          <Text className='colorGary'>搜索品牌车系/车身类型</Text>
          <Text className='address fontW'>全国</Text>
        </View>
        <View className='displayNormal'>
          <View className='midWrap'>
            <Text className='title'>发布车辆</Text>
            <Text>共享优质车辆</Text>
            <Text>省心售卖</Text>
          </View>
          <View className='midWrap'>
            <Text className='title'>求购车辆</Text>
            <Text>精准求购</Text>
            <Text>快速寻找最好资源</Text>
          </View>
        </View>
        <View className='menuTransform'>
          <Swiper autoplay>
            <SwiperItem>
              <View>A</View>
            </SwiperItem>
          </Swiper>
        </View>
      </View>
    )
  }
}
