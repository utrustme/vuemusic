import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'
import axios from 'axios'

export function getRecommend() {
  const url =
    'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uni: 0,
    needNewCode: 1
  })

  return jsonp(url, data, options)
}

export function getDiscList() {
  const url = '/getDiscList'

  const data = Object.assign({}, commonParams, {
    platform: 'yqq.json',
    hostUni: 0,
    sin: 0,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json',
    ein: 19
  })

  return axios
    .get(url, {
      params: data
    })
    .then(res => {
      return Promise.resolve(res.data)
    })
}

export function getDiscInfo(disstid, pageNumber, pageSize) {
  const url = '/getDiscInfo'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    new_format: 1,
    pic: 500,
    sin: 0,
    sortId: 5,
    needNewCode: 1,
    notice: 0,
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    g_tk: 45727115,
    nosign: 1,
    disstid: disstid,
    format: 'json',
    song_begin: pageNumber,
    song_num: pageSize
  })

  return axios
    .get(url, {
      params: data
    })
    .then(res => {
      return Promise.resolve(res.data)
    })
}
