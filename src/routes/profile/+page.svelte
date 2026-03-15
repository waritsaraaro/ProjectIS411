<script>
  let user = {
    name: 'beuty collab',
    username: '@beutycollab',
    bio: 'ขายเสื้อผ้ามือสอง สภาพดี คัดเองทุกตัว ✨',
    location: 'Bangkok, Thailand',
    avatar: '/images/profile.jpg'
  };

  let stats = {
    posts: 3,
    followers: 1280,
    following: 215
  };

  let products = [
    { name: 'pink mini skirt', price: 79, shop: 'beuty collab', detail: 'เอว 24, ยาว 14', img: '/images/skirt.jpg' },
    { name: 'สายเดี่ยว งาน patch work', price: 58, shop: 'beuty collab', detail: 'อก 32, ยาว 22', img: '/images/tanktop.jpg' },
    { name: 'เสื้อครอปริ้วเทา', price: 79, shop: 'beuty collab', detail: 'อก 32, ยาว 22', img: '/images/crop.jpg' }
  ];
</script>

<section class="section">
  <div class="container">
    <div class="columns is-vcentered">
      <div class="column is-4 has-text-centered">
        <figure class="image is-128x128 is-inline-block">
          <img class="is-rounded" src={user.avatar} alt={user.name} />
        </figure>
      </div>

      <div class="column is-8">
        <div class="is-flex is-align-items-center is-flex-wrap-wrap mb-4">
          <p class="title is-4 mr-4 mb-2">{user.username}</p>

          <div class="buttons mb-2">
            <button class="button is-primary is-light">Edit profile</button>
            <button class="button is-light">Share profile</button>
          </div>
        </div>

        <div class="columns is-mobile mb-4">
          <div class="column">
            <p><strong>{stats.posts}</strong> posts</p>
          </div>
          <div class="column">
            <p><strong>{stats.followers}</strong> followers</p>
          </div>
          <div class="column">
            <p><strong>{stats.following}</strong> following</p>
          </div>
        </div>

        <div class="content">
          <p class="has-text-weight-semibold mb-1">{user.name}</p>
          <p class="mb-1">{user.bio}</p>
          <p class="has-text-grey">{user.location}</p>
        </div>
      </div>
    </div>

    <hr />

    <div class="tabs is-centered is-boxed">
      <ul>
        <li class="is-active"><a>POSTS</a></li>
        <li><a>TAGGED</a></li>
      </ul>
    </div>

    <div class="columns is-multiline is-mobile">
      {#each products as item}
        <div class="column is-12-mobile is-6-tablet is-4-desktop">
          <div class="card">
            <div class="card-image">
              <figure class="image is-square">
                <img src={item.img} alt={item.name} />
              </figure>
            </div>

            <div class="card-content">
              <p class="has-text-weight-bold">{item.name}</p>
              <p class="is-size-7 has-text-grey">{item.detail}</p>
              <p class="has-text-primary has-text-weight-bold mt-2">฿ {item.price}</p>
              <p class="is-size-7">{item.shop}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>