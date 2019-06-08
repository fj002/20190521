<template>
    <div class="star star-24">
        <span class="star-item" v-for="(s,index) in stars" :key="index" :class="s"></span>
    </div>
</template>

<script>
    const STAR_ON='on'
    const STAR_HALF='half'
    const STAR_OFF='off'
    export default {
        props:{
            score:Number,
        },computed:{
            //计算获得stars的值根据score的值
            stars(){
                const {score} =this
                const stars=[]
                const scoreCount=Math.floor(score);
                for (let i = 0; i <scoreCount ; i++) {
                    stars.push(STAR_ON)
                }
                if(score*10-scoreCount*10>=5){
                    stars.push(STAR_HALF)
                }
                while (stars.length<5){
                    stars.push(STAR_OFF)
                }
                return stars
            }

        }
    }
</script>

<style lang="stylus" ref="stylesheet/stylus">
    @import "../../common/stylus/mixins.styl"
    //2x图 3x图
    .star
        float left
        font-size 0
        .star-item
            display inline-block
            background-repeat no-repeat
        &.star-48
            .star-item
                width 20px
                height 20px
                margin-right 22px
                background-size 20px 20px
                &:last-child
                    margin-right: 0
                &.on
                    bg-image('./images/star48_on')
                &.half
                    bg-image('./images/star48_half')
                &.off
                    bg-image('./images/star48_off')
        &.star-36
            .star-item
                width 15px
                height 15px
                margin-right 6px
                background-size 15px 15px
                &:last-child
                    margin-right 0
                &.on
                    bg-image('./images/star36_on')
                &.half
                    bg-image('./images/star36_half')
                &.off
                    bg-image('./images/star36_off')
        &.star-24
            .star-item
                width 10px
                height 10px
                margin-right 3px
                background-size 10px 10px
                &:last-child
                    margin-right 0
                &.on
                    bg-image('./images/star24_on')
                &.half
                    bg-image('./images/star24_half')
                &.off
                    bg-image('./images/star24_off')
</style>