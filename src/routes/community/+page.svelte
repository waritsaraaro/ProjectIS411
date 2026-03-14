

<script>
</script>


<section class="section pt-3">

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

  <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img
        src="https://bulma.io/assets/images/placeholders/1280x960.png"
        alt="Placeholder image"
      />
    </figure>
  </div>
  <div class="card">

  <!-- รูป -->
  <div class="card-image image-wrapper">
    <figure class="image is-4by3">
      <img src="https://bulma.io/assets/images/placeholders/1280x960.png">
    </figure>

    <!-- overlay บนรูป -->
    <div class="image-overlay">
      <p class="has-text-white has-text-weight-bold">@johnsmith</p>
      <p class="has-text-white is-size-7">Lorem ipsum dolor sit amet</p>
    </div>

  </div>

  <!-- คอมเมนต์ด้านล่าง -->
  <div class="card-content">
    <p class="is-size-7 has-text-grey">Comments</p>
    <p>Nice outfit!</p>
    <p>Where did you buy this?</p>
  </div>

</div>
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