var serverBase = 'http://localhost:8000'
export default {
    BASE_SERVER_URL: serverBase,
    //获取导航栏图片
    API_GET_INDEX_IMAGE:serverBase + "/indeximage/",
    //一级分类
    API_GET_FIRST_CLASSIFICATION:serverBase + "/Firstclasscar/",
    //二级分类
    API_GET_SECOND_CLASSIFICATION:serverBase + "/Secondclasscar/",
    //三级分类
    API_GET_THIRD_CLASSIFICATION:serverBase + "/Thirdclasscar/",
    //分类下所有车辆详情信息
    API_GET_DETAILCAR:serverBase + "/detailCar/",
    //用户操作
    API_POST_MODIFYUSERMESSAGE:serverBase + "/modify/",
    //地址管理
    API_ADDERSS_MANAGE:serverBase + "/adderss/",
    //车辆技术数据
    API_CARTACHINCALDATA:serverBase + "/techincalCar/",
    // 页面基本数据
    API_PAGEBASEDATA:serverBase + "/pagemessage/",
    // 支付
    API_PAY:serverBase + "/payment/"
}