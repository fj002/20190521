<template>
        <section class="pwd">
            <section class="login_message">
                <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name">
            </section>
            <section class="login_verification">
                <input type="text" maxlength="8" placeholder="密码" v-model="pwd" v-if="value">
                <input type="password" maxlength="8" placeholder="密码" v-model="pwd" v-else>
                <mt-switch v-model="value"  class="switch_button"></mt-switch>
            </section>
            <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
                <img class="get_verification" src="http://localhost:4000/captcha" alt="captcha" @click="clickCaptcha" ref="captcha">
            </section>
        </section>
</template>

<script>
    export default {
        data(){
            return{
                pwd:'',
                name:'',
                captcha:"",
                value:false,
                computeTime:''

            }
        },
        computed:{
            phoneState(){
                return /^1\d{10}$/.test(this.name)
            }
        },methods:{

            clickCaptcha(){
                this.$refs.captcha.src='http://localhost:4000/captcha?time='+Date.now()
            }
        }
    }
</script>

<style lang="stylus" ref="stylesheet/stylus">
    @import "../../../common/stylus/mixins.styl"
    .pwd
        input
            width 100%
            height 100%
            padding-left 10px
            box-sizing border-box
            border 1px solid #ddd
            border-radius 4px
            outline 0
            font 400 14px Arial
            &:focus
                border 1px solid #02a774
        .login_message
            position relative
            margin-top 16px
            height 48px
            font-size 14px
            background #fff
            .get_verification
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                border 0
                color #ccc
                font-size 14px
                background transparent
        .login_verification
            position relative
            margin-top 16px
            height 48px
            font-size 14px
            background #fff
            .switch_button
                position absolute
                right 10px
                transform translateY(-50%)
                top 50%


</style>