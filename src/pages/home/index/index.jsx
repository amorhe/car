import { Component, useState} from 'react'
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import { } from 'taro-ui'

import './index.scss'

const swiperChange = (e) =>{
    console.log(e.detail.current)
}

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      swiperCurrent: 0
    };
  }

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
          <Swiper autoplay circular className='swiperContent' onChange={swiperChange}>
            <SwiperItem>
              <View className='displayNormal'>
                <View className='menuItem'>
                  <Image className='icon' src='https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2534199263,3708083788&fm=11&gp=0.jpg'></Image>
                  <Text>违章查询</Text>
                </View>
                <View className='menuItem'>
                  <Image className='icon' src='https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2534199263,3708083788&fm=11&gp=0.jpg'></Image>
                  <Text>检测报告</Text>
                </View>
                <View className='menuItem'>
                  <Image className='icon' src='https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2534199263,3708083788&fm=11&gp=0.jpg'></Image>
                  <Text>维修记录</Text>
                </View>
                <View className='menuItem'>
                  <Image className='icon' src='https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2534199263,3708083788&fm=11&gp=0.jpg'></Image>
                  <Text>事故记录</Text>
                </View>
                <View className='menuItem'>
                  <Image className='icon' src='https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2534199263,3708083788&fm=11&gp=0.jpg'></Image>
                  <Text>车辆评估</Text>
                </View>
              </View>
            </SwiperItem>
            <SwiperItem>
              <View className='displayNormal'>
                <View className='menuItem'>
                  <Image className='icon' src='https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2534199263,3708083788&fm=11&gp=0.jpg'></Image>
                  <Text>违章查询</Text>
                </View>
                <View className='menuItem'>
                  <Image className='icon' src='https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2534199263,3708083788&fm=11&gp=0.jpg'></Image>
                  <Text>检测报告</Text>
                </View>
                <View className='menuItem'>
                  <Image className='icon' src='https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2534199263,3708083788&fm=11&gp=0.jpg'></Image>
                  <Text>维修记录</Text>
                </View>
                <View className='menuItem'>
                  <Image className='icon' src='https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2534199263,3708083788&fm=11&gp=0.jpg'></Image>
                  <Text>事故记录</Text>
                </View>
                <View className='menuItem'>
                  <Image className='icon' src='https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2534199263,3708083788&fm=11&gp=0.jpg'></Image>
                  <Text>车辆评估</Text>
                </View>
              </View>
            </SwiperItem>
          </Swiper>
          <View className='swiperBots'>
            <View className='dot'></View>
            <View className='dot'></View>
          </View>
        </View>
      </View>
    )
  }
}
