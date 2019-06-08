import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS
} from './mutation-types'
import {reqAddress,reqFoodCategorys,reqShops} from '../api/index'
export default {
    //获取地址
    async getAddress({commit,state}){
        //获取参数 geohash
        const geohash=state.latitude+','+state.longitude
        //获取数据,提交给mutation
        const result=await reqAddress(geohash);
        if (result.code===0){
            const address=result.data
            commit(RECEIVE_ADDRESS,{address})
        }
    },
    //获取食品分类
    async getCateGorys({commit}){
        //获取数据,提交给mutation
        const result=await reqFoodCategorys();
        if (result.code===0){
            const categorys=result.data
            commit(RECEIVE_CATEGORYS,{categorys})
        }
    },
    //获取商铺分类
    async getShops({commit,state}){
        const {latitude,longitude}=state;
        //获取数据,提交给mutation
        const result=await reqShops(latitude,longitude);
        if (result.code===0){
            const shops=result.data
            commit(RECEIVE_SHOPS,{shops});
        }
    }
}