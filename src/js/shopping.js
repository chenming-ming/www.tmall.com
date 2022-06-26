import $ from '../js/lib/jquery.esm.js'
import cookie from './lib/cookie.js'

let shop = cookie.get('shop')

shop = JSON.parse(shop)

let id = shop.map((el) => el.id).join()

$.ajax({
  type: 'get',
  url: '../interface/shopping.php',
  data: { id },
  dataType: 'json',
})
  .then((res) => {
    // let template = ''
    // let template1 = ''
    // let template2 = ''
    // let template3 = ''
    // let template4 = ''
    // let template5 = ''
    let template6 = ''

    res.forEach((el, i) => {
      let pic = JSON.parse(el.picture)

      let current = shop.filter((elm) => elm.id === el.id)

      // template += `
      //       <img src="./${pic[0].src}" alt="" class="itempic J_ItemImg" style="display:inline-block;width:80px;height:80px;">
      //       `
      // template1 += `
      //       ${el.title}
      //       `
      // template2 += `
      //       <div class="price-line"><em class="price-original">￥288.00</em></div>
      //       <div class="price-line"><em class="J_Price price-now" tabindex="0">${(+el.price.substring(1)).toFixed(
      //         2
      //       )}</em></div>
      //       `
      // template3 += `
      //       <input type="number" value="${current[0].num}" min="1" class="text text-amount J_ItemAmount" data-max="129" data-now="${current[0].num}" autocomplete="off">
      //       `
      // template4 += `
      //       <a title="移入收藏夹" class="btn-fav J_Fav J_MakePoint" data-point-url="//www.atpanel.com/jsclick?cache=16559696405081&amp;mycart=collect" href="#">移入收藏夹</a>
      //       <a href="javascript:;" data-point-url="//www.atpanel.com/jsclick?cache=16559696405082&amp;cartlist=delete" class="removeitem J_Del J_MakePoint" data-id="${el.id}">删除</a>
      //       `
      // template5 += `
      //       <div class="td-inner"><em tabindex="0" class="J_ItemSum number">${(
      //         +el.price.substring(1) * current[0].num
      //       ).toFixed(2)}</em>
      //           <div class="J_ItemLottery"></div>
      //           <div class="weight">进口税:商品已包税</div>
      //       </div>
      //       `
      template6 += `
      <div id="J_Cart" class="cart">
      <div id="J_FilterBar" class="cart-filter-bar"><span id="J_CartSwitch" class="switch-cart">购物车（全部2）</span>
        <div class="cart-sum">
          <span class="pay-text">已选商品（不含运费）</span>
          <strong class="price">
            <em id="J_SmallTotal">
              <span class="total-symbol">
                &nbsp;
              </span>
              0.00
            </em>
          </strong>
          <a id="J_SmallSubmit" class="submit-btn submit-btn-disabled">
            结&nbsp;算
          </a>
        </div>
      </div>
      <div id="J_CartMain" class="cart-main">
        <div class="cart-table-th">
          <div class="wp">
            <div class="th th-chk">
              <div id="J_SelectAll1" class="select-all J_SelectAll">
                <div class="cart-checkbox">
                  <input class="J_CheckBoxShop" id="J_SelectAllCbx1" type="checkbox" name="select-all" value="true">
                  <label for="J_SelectAllCbx1">
                    勾选购物车内所有商品
                  </label>
                </div>
                &nbsp;&nbsp;全选
              </div>
            </div>
            <div class="th th-item">
              <div class="td-inner">商品信息</div>
            </div>
            <div class="th th-info">
              <div class="td-inner">&nbsp;</div>
            </div>
            <div class="th th-price">
              <div class="td-inner">单价</div>
            </div>
            <div class="th th-amount">
              <div class="td-inner">数量</div>
            </div>
            <div class="th th-sum">
              <div class="td-inner">金额</div>
            </div>
            <div class="th th-op">
              <div class="td-inner">操作</div>
            </div>
            <div class="th th-vil hidden">
              <div class="td-inner">购买客户信息</div>
            </div>
          </div>
        </div>

        <div id="J_OrderList" data-spm="1997196601">
          <div id="J_OrderHolder_s_2206604872698_1" style="height: auto;">
            <div id="J_Order_s_2206604872698_1" class="J_Order clearfix order-body">
              <div class="J_ItemHead shop clearfix">
                <div class="shop-info">
                  <div class="cart-checkbox ">
                    <input class="J_CheckBoxShop" id="J_CheckShop_s_2206604872698_1" type="checkbox" name="orders[]"
                      value="s_2206604872698_1">
                    <label for="J_CheckShop_s_2206604872698_1">
                      勾选此店铺下所有商品
                    </label>
                  </div>
                  &nbsp;&nbsp;
                  <img src="//img.alicdn.com/imgextra/i3/O1CN01YQXXUw1rmHc2iSZt2_!!6000000005673-2-tps-24-20.png"
                    class="shop-img">
                  店铺：
                  <a href="//store.taobao.com/shop/view_shop.htm?user_number_id=2206604872698" target="_blank"
                    title="聚仕达海外专营店" class="J_MakePoint" data-point="tbcart.8.15">
                    聚仕达海外专营店
                  </a>
                  <span class="ww-light ww-small" data-items="s_2206604872698_1" data-icon="small" data-nick="聚仕达海外专营店"
                    data-display="inline">
                    <a href="https://amos.alicdn.com/getcid.aw?v=3&amp;groupid=0&amp;s=1&amp;charset=utf-8&amp;uid=%E8%81%9A%E4%BB%95%E8%BE%BE%E6%B5%B7%E5%A4%96%E4%B8%93%E8%90%A5%E5%BA%97&amp;site=cntaobao&amp;fromid=cntaobaotb653699765454"
                      target="_blank" class="ww-inline ww-online" title="点此可以直接和卖家交流选好的宝贝，或相互交流网购体验，还支持语音视频噢。">
                      <span>
                        旺旺在线
                      </span>
                    </a>
                  </span>
                </div>
              </div>
              <div class="order-content">
                <div id="J_BundleList_s_2206604872698_1" class="item-list">
                  <div id="J_Bundle_s_2206604872698_1_0" class="bundle  bundle-last ">
                    <div id="J_ItemHolder_4148160230936" class="item-holder">
                      <div id="J_Item_4148160230936"
                        class="J_ItemBody item-body clearfix item-normal  first-item  last-item   ">
                        <ul class="item-content clearfix">
                          <li class="td td-chk">
                            <div class="td-inner">
                              <div style="height: 82px;position: relative;">
                                <div class="cart-checkbox "><input class="J_CheckBoxItem" id="J_CheckBox_4148160230936"
                                    type="checkbox" name="items[]" value="4148160230936">
                                  <label for="J_CheckBox_4148160230936">
                                    勾选商品
                                  </label>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li class="td td-item">
                            <div class="td-inner">
                              <div class="item-pic J_ItemPic img-loaded">
                                <a href="//detail.tmall.com/item.htm?id=606835291057" target="_blank"
                                  data-title="正品Under Armour安德玛运动t恤UA男健身速干衣夏季新款透气短袖"
                                  class="J_MakePoint J_GoldReport M_GoldReport" data-point="tbcart.8.12">
                                  <img src="./${pic[0].src}" alt="" class="itempic J_ItemImg"
                                    style="display:inline-block;width:80px;height:80px;">
                                </a>
                              </div>
                              <div class="item-info">
                                <div class="item-basic-info">
                                  <a href="//detail.tmall.com/item.htm?id=606835291057" target="_blank"
                                    title="正品Under Armour安德玛运动t恤UA男健身速干衣夏季新款透气短袖"
                                    class="item-title J_GoldReport J_MakePoint J_MakePointt" data-point="tbcart.8.11">
                                    ${el.title}
                                  </a>
                                </div>
                                <div class="item-other-info">
                                  <div class="promo-logos"></div>
                                  <div class="item-icon-list clearfix">
                                    <div class="item-icons J_ItemIcons  item-icons-fixed ">
                                      <span class="item-icon item-icon-0" title="支持信用卡支付"><img
                                          src="//assets.alicdn.com/sys/common/icon/trade/xcard.png" alt=""></span>
                                      <a href="//rule.tmall.hk/rule/rule_detail.htm?id=2882" target="_blank"
                                        class="item-icon item-icon-1 J_MakePoint" data-point="tbcart.8.26"
                                        title="七天无理由退"><img src="//img.alicdn.com/tps/i3/T1Vyl6FCBlXXaSQP_X-16-16.png"
                                          alt=""></a>
                                    </div>
                                  </div>
                                  <div class="item-tips"></div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li class="td td-info">
                            <div class="item-props item-props-can">
                              <p class="sku-line" tabindex="0">颜色分类：灰白色速干衣1326413-002</p>
                              <p class="sku-line" tabindex="0">尺码：XL[200斤以上]</p><span tabindex="0"
                                class="btn-edit-sku J_BtnEditSKU J_MakePoint" data-point="tbcart.8.10">修改</span>
                            </div>
                          </li>
                          <li class="td td-price">
                            <div class="td-inner">
                              <div class="item-price price-promo-">
                                <div class="price-content">
                                  <div class="price-line">
                                    <em class="price-original">￥288.00</em>
                                  </div>
                                  <div class="price-line">
                                    <em class="J_Price price-now" tabindex="0">${(+el.price.substring(1)).toFixed(
                                      2
                                    )}</em>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li class="td td-amount">
                            <div class="td-inner">
                              <div class="amount-wrapper ">
                                <div class="item-amount ">
                                  <a href="#" class="J_Minus minus M_Minus">
                                    <input type="number" value="${current[0].num}" min="1"
                                      class="text text-amount J_ItemAmount" data-max="129" data-now="${current[0].num}"
                                      autocomplete="off">
                                  </a>
                                  <div class="amount-msg J_AmountMsg"></div>
                                </div>
                              </div>
                          </li>
                          <li class="td td-sum">
                            <div class="td-inner"><em tabindex="0" class="J_ItemSum number">${(
                              +el.price.substring(1) * current[0].num
                            ).toFixed(2)}</em>
                                <div class="J_ItemLottery"></div>
                                <div class="weight">进口税:商品已包税</div>
                            </div>
                          </li>
                          <li class="td td-op">
                            <div class="td-inner td-innerre">
                              <a title="移入收藏夹" class="btn-fav J_Fav J_MakePoint"
                                data-point-url="//www.atpanel.com/jsclick?cache=16559696405081&amp;mycart=collect"
                                href="#">移入收藏夹</a>
                              <a href="javascript:;"
                                data-point-url="//www.atpanel.com/jsclick?cache=16559696405082&amp;cartlist=delete"
                                class="removeitem J_Del J_MakePoint" data-id="${el.id}">删除</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="J_FloatBarHolder" class="float-bar-holder">
            <div id="J_FloatBar" class="float-bar clearfix default" style="position: static;">
              <div id="J_SelectedItems" class="group-wrapper group-popup hidden" style="display: none;">
                <div id="J_SelectedItemsList" class="group-content"></div>
                <span class="arrow"></span>
              </div>
              <div class="float-bar-wrapper">
                <div id="J_SelectAll2" class="select-all J_SelectAll">
                  <div class="cart-checkbox">
                    <input class="J_CheckBoxShop" id="J_SelectAllCbx2" type="checkbox" name="select-all" value="true">
                    <label for="J_SelectAllCbx2">
                      勾选购物车内所有商品
                    </label>
                  </div>
                  &nbsp;全选
                </div>
                <div class="operations">
                  <a href="#" hidefocus="true" class="J_DeleteSelected">
                    删除
                  </a>
                  <a href="#" hidefocus="true" class="J_BatchFav">
                    移入收藏夹
                  </a>
                </div>
                <div class="float-bar-right">
                  <div id="J_ShowSelectedItems" class="amount-sum">
                    <span class="txt">已选商品</span>
                    <em id="J_SelectedItemsCount">${current[0].num}</em>
                    <span class="txt">件</span>
                    <div class="arrow-box">
                      <span class="selected-items-arrow"></span>
                      <span class="arrow"></span>
                    </div>
                  </div>
                  <div id="J_CheckCOD" class="check-cod" style="display: none;"><span class="icon-cod"></span><span
                      class="s-checkbox J_CheckCOD"></span>货到付款
                  </div>
                  <div class="pipe"></div>
                  <div class="price-sum"><span class="txt">合计（不含运费）：</span><strong class="price"><em id="J_Total"><span
                          class="total-symbol">&nbsp;</span>
                          ${(+el.price.substring(1) * current[0].num).toFixed(2)}
                          </em></strong>
                  </div>
                  <div class="btn-area"><a href="javascript:void(0)" id="J_Go" class="submit-btn submit-btn-disabled"
                      aria-label="请注意如果没有选择宝贝，将无法结算"><span>结&nbsp;算</span><b></b></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      `
    })

    // $('.M_GoldReport').html(template)
    // $('.J_MakePointt').html(template1)
    // $('.price-content').html(template2)
    // $('.M_Minus').html(template3)
    // $('.td-innerre').html(template4)
    // $('.td-sum').html(template5)
    $('.container').html(template6)

    // $('.cart-checkbox #J_SelectAllCbx1').on('change', function () {
    //   $('.j-checkbox, .checkall').prop('checked', $(this).prop('checked'))
    //   if ($(this).prop('checked')) {
    //     // 让所有的商品添加 check-cart-item 类名
    //     $('.cart-item').addClass('check-cart-item')
    //   } else {
    //     // check-cart-item 移除
    //     $('.cart-item').removeClass('check-cart-item')
    //   }
    // })

    $('.td-innerre .removeitem').on('click', function () {
      let res = shop.filter((el) => el.id != $(this).attr('data-id')) // 筛选被点击的元素
      cookie.set('shop', JSON.stringify(res)) // 剩余内容写回cookie
      location.reload() // 刷新页面
    })
  })
  .catch((xhr) => {
    console.log(xhr.status)
  })
