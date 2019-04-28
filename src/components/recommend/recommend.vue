<template>
  <div class="recommend">
    <div class="recommend-content">
      <div class="slider-wrapper">
        <swiper :options="swiperOption">
          <swiper-slide v-for="item in recommends" :key="item.id">
            <a :href="item.linkUrl">
              <img class="needsclick" :src="item.picUrl" />
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="recommend-list">
        <h1 class="list-title">热门歌曲推荐</h1>
        <ul>
          <li class="item" v-for="(item, index) in discList" :key="index">
            <router-link
              :to="{ path: 'dicInfo', query: { dissid: item.dissid } }"
            >
              <div class="icon">
                <img width="60" height="60" v-lazy="item.imgurl" alt="" />
              </div>
              <div class="text">
                <h2 class="name" v-html="item.creator.name"></h2>
                <p class="desc" v-html="item.dissname"></p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { getRecommend, getDiscList } from 'api/recommend'
import { ERR_OK } from 'api/config'
export default {
  data() {
    return {
      recommends: [],
      discList: [],
      swiperOption: {
        autoplay: {
          stopOnLastSlide: false
        },
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  created() {
    this._getRecommend()
    this._getDiscList()
  },
  methods: {
    _getRecommend() {
      getRecommend().then(res => {
        if (res.code === ERR_OK) {
          // console.log(res)
          this.recommends = res.data.slider
        }
      })
    },
    _getDiscList() {
      getDiscList().then(res => {
        if (res.code === ERR_OK) {
          this.discList = res.data.list
          // console.log(res)
        }
      })
    }
  }
}
</script>

<style lang="less">
@import '~common/style/variable';

.recommend {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
  &-content {
    height: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    .slider-wrapper {
      position: relative;
      width: 100%;
      height: 150px;
      overflow: hidden;
      .swiper-container,
      .swiper-slide {
        touch-action: none;
      }
      .swiper-container {
        width: 100%;
        height: 150px;
        a {
          display: block;
          img {
            width: 100%;
            height: 150px;
          }
        }
        .swiper-pagination {
          .swiper-pagination-bullet {
            &.swiper-pagination-bullet-active {
              width: 20px;
              border-radius: 8px;
              background: hsla(0, 0%, 100%, 0.8);
            }
          }
        }
      }
    }
    .recommend-list {
      .list-title {
        height: 65px;
        line-height: 65px;
        text-align: center;
        font-size: @font-size-medium;
        color: @color-theme;
      }
      .item {
        a {
          display: flex;
          box-sizing: border-box;
          align-items: center;
          padding: 0 20px 20px 20px;
        }
        .icon {
          flex: 0 0 60px;
          width: 60px;
          padding-right: 20px;
        }
        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          line-height: 20px;
          overflow: hidden;
          font-size: @font-size-medium;
          .name {
            margin-bottom: 10px;
            color: @color-text;
          }
          .desc {
            color: @color-text-d;
          }
        }
      }
    }
  }
}
</style>
