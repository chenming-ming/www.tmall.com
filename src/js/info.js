import $ from './lib/jquery.esm.js';
import cookie from './lib/cookie.js';

let id = location.search.split('=')[1];
// console.log(id);

$.ajax({
        type: 'get',
        url: '../interface/getitem.php',
        data: { id },
        dataType: 'json'
    })
    .then(res => {
        let pic = JSON.parse(res.picture);

        let template = `
        <div class="tbdetail-hd">${res.title}</div>
        `;
        let template1 = `
        <img src="./${pic[0].src}" alt="${pic[0].alt}" style="  display: block;
        width: 418px;
        height: 418px;
        margin: 0 auto;">
        `;
        let template2 = `
        <i>${res.price}</i>
        `;
        let template3 = `
        <li> ${res.details}</li>
        <li> ${res.details}</li>
        <li> ${res.details}</li>
        <li> ${res.details}</li>
        <li> ${res.details}</li>
        `;
        let template4 = `
        <a href="#">立即购买</a>
        <input type="button" id="additem" value="加入购物车">
        `;
        let template5 = `
        <span class="number">数量</span>
        <span class="number2">
        <input type="number" style="font-size: 20px;" id="num" value="1" min="1" max="99">
            件
        <span>有货(每人采购100件)</span> 
        </span>
        `;

        $('.manrr-con').html(template);
        $('.manrl-con').html(template1);
        $('.tdb-r').html(template2);
        $('.ffff-con').html(template3);
        $('.tbdetail-hd7').html(template4);
        $('.tbdetail-hd6').html(template5);

        $('#additem').on('click', function() {
            addItem(res.id, $('#num').val());
        });
    })
    .catch(xhr => {
        console.log(xhr.status);
    });


function addItem(id, num) {
    let product = { id, num };

    let shop = cookie.get('shopping'); // 从cookie中获得数据

    if (shop) {
        // 判断是否获得到数据
        shop = JSON.parse(shop);

        // 当商品id在cookie数据中已经存在时 需要修改数量 而不是添加商品
        if (shop.some(el => el.id == id)) {
            let index = shop.findIndex(elm => elm.id == id); // 获得商品对象在数组中的索引
            let count = parseInt(shop[index].num);
            count += parseInt(num);
            shop[index].num = count;
        } else {
            shop.push(product);
        }
    } else {
        shop = [];
        shop.push(product);
    }

    cookie.set('shop', JSON.stringify(shop)); // 将数组转换成JSON字符串存入cookie
}