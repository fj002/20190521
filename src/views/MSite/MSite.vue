<template>
    <div class="msite">
        <!--首页头部-->
        <HeaderTop :title="address.name">
            <span class="header_search" slot="left">
                <i class="iconfont iconsousuo2"></i>
            </span>
            <span class="header_login" slot="right">
                <span class="header_login_text">登录|注册</span>
            </span>
        </HeaderTop>
        <!--首页导航-->
        <nav class="msite_nav">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <mt-swipe :auto="4000">
                        <mt-swipe-item v-for="(categorys,index) in categorysArry" :key="index">
                                <a href="javascript:" class="link_to_food" v-for="(category,index) in categorys" :key="index">
                                    <div class="food_container">
                                        <img src="./images/nav/1.jpg">
                                    </div>
                                    <span>{{category.title}}</span>
                                </a>
                        </mt-swipe-item>

                    </mt-swipe>


                </div>
            </div>
        </nav>
        <!--首页附近商家-->
        <div class="msite_shop_list">
            <div class="shop_header">
                <i class="iconfont iconxuanxiang"></i>
                <span class="shop_header_title">附近商家</span>
            </div>
           <ShopList/>
        </div>
    </div>
</template>

<script>
    import HeaderTop from '../../components/HeaderTop/HeaderTop'
    import ShopList from '../../components/ShopList/ShopList'
    import {mapState,mapActions} from 'vuex'
    export default {

        computed:{
            ...mapState(['address','categorys']),
            //
            categorysArry(){
                const ca=[]
                let minArr=[]
                const {categorys}=this
                categorys.forEach(c=>{
                    if (minArr.length===8){
                        minArr=[]
                    }
                    if(minArr.length===0){
                        ca.push(minArr)
                    }

                    minArr.push(c)
                })

                return ca;
            }

        },
        mounted(){
            this.getCateGorys()
        },
        methods:{
            ...mapActions(['getCateGorys'])

        },
        components:{
            HeaderTop,
            ShopList
        }
    }
</script>

<style lang="stylus" ref="stylesheet/stylus">
    @import "../../common/stylus/mixins.styl"
    .msite  //首页
        width 100%
        .msite_nav
            position absolute
            bottom-border-1px(#e4e4e4)
            height 200px
            margin-top 45px
            background #fff
            .swiper-container
                width 100%
                height 100%
                .swiper-wrapper
                    width 100%
                    height 100%
                    .link_to_food
                        width 25%
                        display: inline-block
                        .food_container
                            display block
                            width 100%
                            text-align center
                            padding-bottom 10px
                            font-size 0
                            img
                               display inline-block
                               width 50px
                               height 50px
                        span
                            display block
                            width 100%
                            text-align center
                            font-size 13px
                            color #666

        .msite_shop_list
            top-border-1px(#e4e4e4)
            margin-top 10px
            background #fff
            .shop_header
                padding 10px 10px 0
                .shop_icon
                    margin-left 5px
                    color #999
                .shop_header_title
                    color #999
                    font-size 14px
                    line-height 20px

</style>