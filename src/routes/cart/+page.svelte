<script>
  
  let products = [
    { name: 'pink mini skirt', price: 79, shop: 'beuty collab', detail: 'เอว 24, ยาว 14', img: '/images/skirt.jpg' },
    { name: 'สายเดี่ยว งาน patch work', price: 58, shop: 'beuty collab', detail: 'อก 32, ยาว 22', img: '/images/tanktop.jpg' },
    { name: 'เสื้อเชิ้ตสีขาว', price: 99, shop: '987 shop', detail: 'Free size', img: '/images/whiteshirt.jpg' },
    { name: 'Nike Jordan 1 Low', price: 1150, shop: '987 shop', detail: 'สีขาว/ดำ, ไซส์ 6 ผู้หญิง', img: '/images/jordan.png' },
    { name: 'Converse All Star รุ่นคลาสสิค', price: 799, shop: '987 shop', detail: 'ไซส์ 40', img: '/images/converse.webp' },
    { name: 'กางเกงยีนส์', price: 159, shop: 'destiny of love', detail: 'สีฟอก เอวสูง', img: '/images/jeans.jpg' },
    { name: 'กระโปรงยีนส์ จับจีบ', price: 129, shop: 'destiny of love', detail: 'เอว 24, ยาว 14', img: '/images/skirtjeans.jpg' },
    { name: 'เสื้อครอปริ้วเทา', price: 79, shop: 'beuty collab', detail: 'อก 32, ยาว 22', img: '/images/crop.jpg' },
    { name: 'กางเกงยาว', price: 159, shop: 'destiny of love', detail: 'ทรงกระบอกใหญ่', img: '/images/longpant.jpg' }
  ];
  
  const shops = [...new Set(products.map(p => p.shop))];
</script>

<section class="section pt-3">
  <div class="container">
    
    <nav class="level is-mobile mt-5">
      <div class="level-left">
        <div class="level-item">
          <h1 class="title is-4">Shopping Cart</h1>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <div class="field has-addons">
            <div class="control">
              <input class="input is-rounded" type="text" placeholder="Search...">
            </div>
            <div class="control">
              <button class="button is-primary is-rounded">
                <span class="icon"><i class="fas fa-search"></i></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  
  <div class="box mb-5">
      <div class="is-flex is-align-items-center mb-4">
        <input type="checkbox" class="mr-2">
        <strong>987 shop</strong>
      </div>
      <hr>

      <div class="columns is-mobile is-vcentered">
        <div class="column is-narrow"><input type="checkbox" checked></div>
        <div class="column is-narrow">
          <figure class="image is-square" style="width: 80px;">
            <img src={products[3].img} alt="" style="object-fit: cover; border-radius: 8px;" />
          </figure>
        </div>
        <div class="column">
          <p class="has-text-weight-bold">{products[3].name}</p>
          <p class="is-size-7 has-text-grey">{products[3].detail}</p>
          <p class="has-text-primary">฿{products[3].price}</p>
        </div>
      </div>

      <div class="columns is-mobile is-vcentered">
        <div class="column is-narrow"><input type="checkbox" checked></div>
        <div class="column is-narrow">
          <figure class="image is-square" style="width: 80px;">
            <img src={products[4].img} alt="" style="object-fit: cover; border-radius: 8px;" />
          </figure>
        </div>
        <div class="column">
          <p class="has-text-weight-bold">{products[4].name}</p>
          <p class="is-size-7 has-text-grey">{products[4].detail}</p>
          <p class="has-text-primary">฿{products[4].price}</p>
        </div>
      </div>
    </div>

    <div class="box mb-5">
      <div class="is-flex is-align-items-center mb-4">
        <input type="checkbox" class="mr-2">
        <strong>beuty collab</strong>
      </div>
      <hr>

      <div class="columns is-mobile is-vcentered">
        <div class="column is-narrow"><input type="checkbox" checked></div>
        <div class="column is-narrow">
          <figure class="image is-square" style="width: 80px;">
            <img src={products[1].img} alt="" style="object-fit: cover; border-radius: 8px;" />
          </figure>
        </div>
        <div class="column">
          <p class="has-text-weight-bold">{products[1].name}</p>
          <p class="is-size-7 has-text-grey">{products[1].detail}</p>
          <p class="has-text-primary">฿{products[1].price}</p>
        </div>
      </div>
    </div>

    <div class="box has-background-primary has-text-white">
      <div class="level is-mobile">
        <div class="level-left">
          <div class="level-item">
            <div>
              <p class="heading">Total</p>
              <p class="title is-4 has-text-white">฿ 2,007</p>
            </div>
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
            <button class="button is-warning is-rounded has-text-weight-bold">
              CHECKOUT (3)
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>
