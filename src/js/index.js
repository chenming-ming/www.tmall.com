import $ from './lib/jquery.esm.js';

$.ajax({
        type: 'get',
        url: '../interface/getitems.php',
        dataType: 'json'
    })
    .then(res => {
        let template = '';

        res.forEach(el => {
            let pic = JSON.parse(el.picture);
            // console.log(pic);

            template += `
                <div class="product">
                    <a href="./info.html?id=${el.id}" style="text-decoration: none">
                        <img src="./${pic[0].src}" alt="${pic[0].alt}">
                        <p>${el.title}</p>
                        <div>${el.price}</div>
                    </a>
                </div>
                        `;
        });

        $('.tmallsmtt').html(template);
    })
    .catch(xhr => {
        console.log(xhr.status);
    });