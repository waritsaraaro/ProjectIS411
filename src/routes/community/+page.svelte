

<script>
  import { onMount } from 'svelte';

  let commentText = "";
  let comments = [];

  function postComment() {
    if (commentText.trim() === "") return;
    comments = [...comments, commentText.trim()];
    commentText = "";
  }
</script>


<section class="section pt-3">
  <div class="container">
     <div class="columns is-vcentered mb-5">

      <!-- Title -->
      <div class="column is-narrow mt-5">
        <h1 class="title is-4 mb-0">Community Post</h1>
      </div>

      <!-- Search -->
      <div class="column mt-5">
        <div class="field has-addons">
          
          <p class="control is-expanded">
            <input class="input is-rounded" type="text" placeholder="Search...">
          </p>

          <p class="control">
            <button class="button is-primary is-rounded">
              <span class="icon is-small">
                <i class="fas fa-search"></i>
              </span>
            </button>
          </p>

        </div>
      </div>

    </div>

  </div>
      

<div class="container">
  <!-- แท็ก -->
  <div class="tag-filter-box">
    <div class="container" style="max-width:1400px;">
      
      <div class="is-flex is-align-items-center is-flex-wrap-wrap">

        <p class="title is-5 mr-4 mb-2">TAGS</p>

        <div class="field is-grouped is-grouped-multiline">

          <div class="control">
            <span class="tag is-success is-medium">Woman</span>
          </div>

          <div class="control">
            <span class="tag is-success is-medium">Men</span>
          </div>

          <div class="control">
            <span class="tag is-success is-medium">Vintage</span>
          </div>

          <div class="control">
            <span class="tag is-success is-medium">Y2K</span>
          </div>

          <div class="control">
            <span class="tag is-success is-medium">Others</span>
          </div>

        </div>

      </div>

    </div>
  </div>
</div>

<div class="card" style="max-width:1400px; margin:auto;">
      <!-- คนโพส -->
      <div class="card-content">

  <div class="media">
    
    <div class="media-left">
      <figure class="image is-48x48">
        <img class="is-rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOxqzW9JSe7pOmbjCUXdlPxBzEvkhKBUrI5g&s"
          style="object-fit: cover; width:100%; height:100%;"
        >
      </figure>
    </div>

    <div class="media-content">
      <p class="title is-4">ลีน่าจัง</p>
      <p class="subtitle is-6">@kikidoyouloveme</p>
    </div>

  </div>

      <div class="content">
      เสื้อแบบนี้ใส่กับกระโปรงแบบไหนดีคะ ของแบรนด์ <a>@littlemonday</a>. <a href="#">#matching</a>
      <a href="#">#whitetop</a>
      <br />
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>

  <!-- รูปที่จขโพสลง -->  
  <div class="card-image">
    <figure class="image is-4by3">
      <img
        src="https://i.pinimg.com/1200x/6a/ae/d0/6aaed02da72d5373c07eaf7b69116a8b.jpg"
        alt="Placeholder image"
      />
    </figure>
  </div>
 
<p class = "has-text-weight-bold mt-3">
  <span class="icon"><i class="fas fa-comment"></i></span>
  3 comments
</p>

<p class="mt-2 mb-2">Recent</p>

<div style="display: flex; flex-direction: column;">
<!-- พั้นคุง -->
<article class="media">
  <figure class="media-left">
    <p class="image is-48x48">
      <img class="is-rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZi_CHzIU68gmOMxUUtfMQUtDKnC9B_s4mHA&s" 
        style="object-fit: cover; width:100%; height:100%;" />
    </p>
  </figure>


  <div class="media-content">
    <div class="content">
      <p>
        <strong>พั้นคุง</strong>
        <br />
        ใส่กะกระโปรงสีอ่อนๆมั้ยค้าฟคนสวย
        <br />
        <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
      </p>
    </div>
    </div>
</article>

<article class="media">
  <figure class="media-left">
    <p class="image is-48x48">
      <img class="is-rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyszNIwM59Yja6anjgdZoSeP6XACdto22acQ&s" 
        style="object-fit: cover; width:100%; height:100%;" />
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        <strong>น้องผัก</strong>
          <br />
          กระโปรงสั้นๆก็สวยน้าอ้วน
          <br />
          <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
        </p>
      </div>
    </div>
  </article>

  <article class="media">
      <figure class="media-left">
        <p class="image is-48x48">
          <img class="is-rounded" src="https://hauterrfly.com/wp-content/uploads/2025/10/aespa-giselle-tattoo-backlash-misogynistic-backlash.jpg" 
            style="object-fit: cover; width:100%; height:100%;" />
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>มาดามจือ</strong>
            <br />
            ขอพิกัดได้มั้ยคะ
            <br />
            <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
          </p>
        </div>
      </div>
    </article>

<!-- แสดง comment ที่เพิ่มเข้ามา -->
{#each comments as comment}
  <article class="media">

    <figure class="media-left">
      <p class="image is-48x48">
        <img class="is-rounded" 
          src="https://wimg.mk.co.kr/news/cms/202511/04/news-p.v1.20251104.99da17c02e474bde9d60f44d8240eb8d_P1.jpeg" 
          style="object-fit: cover; width:100%; height:100%;" />
      </p>
    </figure>

    <div class="media-content">
      <div class="content">
        <p>
          <strong>You</strong><br>
          {comment}
        </p>
      </div>
    </div>

  </article>
{/each}

<!-- Add comment -->
<article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <img class="is-rounded" src="https://wimg.mk.co.kr/news/cms/202511/04/news-p.v1.20251104.99da17c02e474bde9d60f44d8240eb8d_P1.jpeg" 
        style="object-fit: cover; width:100%; height:100%;" />
    </p>
  </figure>
  <div class="media-content">
    <div class="field">
      <p class="control">
        <textarea class="textarea" bind:value={commentText} placeholder="Add a comment..."></textarea>
      </p>
    </div>
    <div class="field">
      <p class="control">
        <button class="button is-primary is-rounded" on:click={postComment}>
          Post comment
        </button>
      </p>
    </div>
  </div>
</article>
</div>

</section>

<style>
  .tag-filter-box{
  background: white;
  border-top: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
  padding: 16px 0;

  position: sticky;
  top: 0;
  z-index: 30;
}

.tag {
  cursor: pointer;
}

.tag:hover {
  opacity: 0.85;
}

.image-wrapper{
  position: relative;
}

.image-overlay{
  position: absolute;
  bottom: 10px;
  left: 12px;
  right: 12px;
  color: white;
  background: rgba(0,0,0,0.35);
  padding: 8px 10px;
  border-radius: 8px;
}
</style>