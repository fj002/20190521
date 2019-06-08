<template>
    <section class="loginContainer">
        <div class="loginInner">
            <div class="login_header">
                <h2 class="login_logo">硅谷外卖</h2>
                <div class="login_header_title">
                    <!--<span class="login_child" :class="{on:'/login/noteLogin'===$route.path}" @click="goTo('/login/noteLogin')">短信登录</span>
                    <span class="login_child" :class="{on:'/login/pwdLogin'===$route.path}" @click="goTo('/login/pwdLogin')">密码登录</span>-->
                    <span class="login_child" :class="{on:loginWay}" @click="loginWay=true">短信登录</span>
                    <span class="login_child" :class="{on:!loginWay}" @click="loginWay=false">密码登录</span>
                </div>
            </div>
            <div class="login_content">
                <form>
                    <NoteLogin v-if="loginWay"/>
                    <PwdLogin v-else/>
                    <button class="login_submit">登录</button>
                </form>
                <a href="javascript:;" class="about_us">关于我们</a>
            </div>
            <a href="javascript:" class="go_back" @click="$router.back()">
                <i class="iconfont iconjiantou1"></i>
            </a>
        </div>
    </section>
</template>

<script>
    import NoteLogin from './NoteLogin/NoteLogin'
    import PwdLogin from './PwdLogin/PwdLogin'
    export default {
        data(){
          return{
              loginWay:true
            }
        },
        methods:{

        },
        components:{
            NoteLogin,
            PwdLogin
        }
    }
</script>

<style lang="stylus" ref="stylesheet/stylus">
    .loginContainer
        width 100%
        height 100%
        background #fff
        .loginInner
            padding-top 60px
            width 80%
            margin 0 auto
            .login_header
                .login_logo
                    font-size 40px
                    font-weight bold
                    color #02a774
                    text-align center
                .login_header_title
                    padding-top 40px
                    text-align center
                    .login_child
                        color #333
                        font-size 14px
                        padding-bottom 4px
                        &:first-child
                            margin-right 40px
                        &.on
                            color #02a774
                            font-weight 700
                            border-bottom 2px solid #02a774
            .login_content
                >form
                    .login_submit
                        display block
                        width 100%
                        height 42px
                        margin-top 30px
                        border-radius 4px
                        background #4cd96f
                        color #fff
                        text-align center
                        font-size 16px
                        line-height 42px
                        border 0
                .about_us
                    display block
                    font-size 12px
                    margin-top 20px
                    text-align center
                    color #999
            .go_back
                position absolute
                top 5px
                left 5px
                width 30px
                height 30px
                >.iconfont
                    font-size 20px
                    color #999
</style>