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
  
  const categories = ['SHIRT', 'TROUSERS', 'SKIRT', 'SHOES', 'OTHERS'];
  let activeCategory = null;
</script>

<div class="container pt-5">
  <div class="level-item mt-3" style="width:100%;">
        <div class="field has-addons" style="width:100%;">
          <p class="control is-expanded">
            <input class="input is-rounded " type="text" placeholder="Search...">
          </p>
          <p class="control">
            <button class="button is-primary is-rounded ">
              <span class="icon is-small">
                <i class="fas fa-search"></i>
              </span>
            </button>
          </p>
        </div>
  </div>



  <p class="is-size-5 has-text-weight-bold mt-5">CATEGORY</p>


<div class="columns is-mobile is-variable is-2 mt-2">
  <div class="column">
    <button 
      class="button is-rounded is-fullwidth
  {activeCategory === 'SHIRT' 
    ? 'is-warning has-text-weight-bold' 
    : 'is-light'}"
  on:click={() => activeCategory = 'SHIRT'}
    >
      Shirt
    </button>
  </div>
  <div class="column">
    <button 
      class="button is-rounded is-fullwidth 
    {activeCategory === 'TROUSERS'
    ? 'is-warning has-text-weight-bold' 
    : 'is-light'}"
      on:click={() => activeCategory = 'TROUSERS'}
    >
      Trouser
    </button>
  </div>
  <div class="column">
    <button 
      class="button is-rounded is-fullwidth 
    {activeCategory === 'SKIRT'
    ? 'is-warning has-text-weight-bold'
    : 'is-light'}"
      on:click={() => activeCategory = 'SKIRT'}
    >
      Skirt
    </button>
  </div>
  <div class="column">
    <button 
      class="button is-rounded is-fullwidth 
    {activeCategory === 'SHOES'
    ? 'is-warning has-text-weight-bold' 
    : 'is-light'}"
      on:click={() => activeCategory = 'SHOES'}
    >
      Shoes
    </button>
  </div>
  <div class="column">
    <button 
      class="button is-rounded is-fullwidth 
    {activeCategory === 'OTHERS' 
    ? 'is-warning has-text-weight-bold' 
    : 'is-light'}"
      on:click={() => activeCategory = 'OTHERS'}
    >
      Others
    </button>
  </div>
</div>

<p class="is-size-5 has-text-weight-bold mt-5">RECOMMENDED FOR YOU</p>

</div>

<div class="columns is-mobile is-multiline mt-1 " style="max-width:1400px; margin:auto;">
  {#each products as item}
    <div class="column is-4 ">
      <div class="box p-0" style="background-color: #f2f2f2; overflow: hidden; border-radius: 12px;">
        <figure class="image is-1by1">
          <img src={item.img} alt={item.name} style="object-fit: cover;">
        </figure>
        <div class="p-3">
          <p class="is-size-6 has-text-weight-semibold mb-1">{item.name}</p>
          <p class="is-size-7 mb-3">{item.detail}</p>
          <p class="has-text-primary has-text-weight-bold is-size-5">฿ {item.price}</p>
          <p class="is-size-7 has-text-grey mt-1">
            <span class="icon is-small"><i class="fas fa-store"></i></span>
            {item.shop}
          </p>
        </div>
      </div>
    </div>
  {/each}

</div>

<style>
  .category-btn.is-active {
    background-color: #ffdd57 !important;
    color: black !important;
    border-color: #ffdd57 !important;
    font-weight: bold;
  }
  
  .product-card {
    background-color: #f2f2f2;
    overflow: hidden;
    border-radius: 12px;
    height: 100%;
  }
</style>

