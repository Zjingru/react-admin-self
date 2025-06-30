// const Mock = require('mockjs');
import Mock from 'mockjs'

const categories = ['手机数码', '家用电器', '服装鞋包', '美妆个护', '食品生鲜', '运动户外'];

const products = Mock.mock({
  'list|15-30': [{
    'id': '@id',                          // 商品ID
    'category': '@pick(' + JSON.stringify(categories) + ')', // 商品分类
    'name|1': function() {
      const categoryMap = {
        '手机数码': ['@ctitle(3,5)手机', '@ctitle(2,4)耳机', '@ctitle(2,3)智能手表'],
        '家用电器': ['@ctitle(2,4)冰箱', '@ctitle(3,5)洗衣机', '@ctitle(2,3)空调'],
        '服装鞋包': ['@ctitle(2,3)男士夹克', '@ctitle(3,5)女士手提包', '@ctitle(2,4)运动鞋'],
        '美妆个护': ['@ctitle(3,5)护肤套装', '@ctitle(2,4)香水', '@ctitle(3,6)口红礼盒'],
        '食品生鲜': ['@ctitle(4,6)有机大米', '@ctitle(3,5)进口牛排', '@ctitle(5,7)时令水果礼盒'],
        '运动户外': ['@ctitle(3,5)登山杖', '@ctitle(4,6)瑜伽垫套装', '@ctitle(3,5)露营帐篷']
      };
      return Mock.mock('@pick(' + JSON.stringify(categoryMap[this.category]) + ')');
    },
    'price|50-9999.2': 1,                 // 价格（保留两位小数）
    'stock|0-1000': 1,                     // 库存
    'sales|0-50000': 1,                    // 销量
    'isHot|1': '@boolean',                 // 是否热卖
    'images|1-5': ['@image("200x200", "@color", "@ctitle(2,3)")'], // 商品图片
    'description': '@cparagraph(3,5)',     // 商品简介
    'detail': '@cparagraph(10,15)',        // 商品详情
    'specs': {
      'weight|0.1-10.1': 1,               // 重量（kg）
      'color': '@color',                   // 主色调
      'material': '@pick(["塑料","金属","棉质","皮革","玻璃"])', // 材质
      'size': '@pick(["S","M","L","XL","XXL","通用"])' // 尺寸
    },
    'createdAt': '@datetime("yyyy-MM-dd HH:mm:ss")' // 上架时间
  }]
});
export default{
  products
}
// console.log(JSON.stringify(products, null, 2),'---------');