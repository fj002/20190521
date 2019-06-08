/*
* 包含多个接口函数*/
import ajax from './ajax'
const BASE_URL='/api'
/**
 * 获取地址信息 ( 根据经纬度串 )
 */
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)
/**
 * 获取 msite 页面食品分类列表
 */
export const reqFoodCategorys = () => ajax(BASE_URL+'/index_category')
/**
 * 获取 msite 商铺列表 ( 根据经纬度 )
 */
export const reqShops = (latitude, longitude) => ajax(BASE_URL+'/shops', {latitude,
    longitude})
/**
 * 4、根据经纬度和关键字搜索商铺列表
*
 * */
export const reqSearchShops = (keyword, geohash) => ajax(BASE_URL+'/search_shops', {keyword,
    geohash})
/**
*
*获取一次性验证码
*
*/
export const reqCaptcha = () => ajax(BASE_URL+'/captcha')

/**
 * 账号密码登录
 */
export const reqPwdLogin = (name, pwd, captcha) => ajax(BASE_URL+'/login_pwd', {
    name,
    pwd,
    captcha
}, 'POST')
/**
 * 获取短信验证码
 */
export const reqSendCode = phone => ajax(BASE_URL+'/sendcode', {phone})
/**
 * 手机号验证码登录
 */
export const reqSmsLogin = (phone, code) => ajax(BASE_URL+'/login_sms', {phone, code}, 'POST')
/**
 * 获取用户信息 ( 根据会话 )
 */
export const reqUser = () => ajax(BASE_URL+'/userinfo')
    /**
     * 请求登出
    */
export const reqLogout = () => ajax(BASE_URL+'/logout')