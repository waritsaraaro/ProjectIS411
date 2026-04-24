<!-- หน้า Post Detail — แสดงโพสที่กดมาจากฟีด พร้อมคอมเมนต์ -->
<script>
  let { data } = $props()
  let isTyping = $state(false);

  import { currentUser } from '$lib/shared';
  import { goto } from '$app/navigation';

  let post = data.post;

  //  Recent เป็น dropdown
  let sortMode = $state('Recent');
  let dropdownOpen = $state(false);

  // กดpost commentเม้นแล้วขึ้นเม้นใหม่
  let commentText = "";
  let comments = $state([]);

  // ถ้ายังไม่ได้ signin ให้เด้งไปหน้า signin
  function postComment() {
    if (!$currentUser) {
      goto('/signin');
      return;
    }
    if (commentText.trim() === "") return;
    comments = [...comments, commentText.trim()];
    commentText = "";
  }
</script>

<!-- ถ้าหาโพสไม่เจอ -->
{#if !post}
  <p>ไม่พบโพสนี้</p>

{:else}

<section class="section pt-3">
  <div class="post-detail-card">

    <!-- ข้อมูลคนโพส: รูป ชื่อ username -->
    <div class="is-flex is-align-items-center mb-2">
      <figure class="image is-32x32 mr-2">
        <img class="is-rounded" src={post.avatar}
          style="object-fit:cover; width:100%; height:100%;">
      </figure>
      <div>
        <p style="font-size:0.85rem; font-weight:600; margin:0;">{post.name}</p>
        <p style="font-size:0.75rem; color:#888; margin:0;">{post.username}</p>
      </div>
    </div>

    <!-- เนื้อหาโพส -->
    <p style="font-size:0.85rem; margin-bottom:10px;">{post.content}</p>

    <!-- Horizontal Carousel รูปภาพ -->
    <!-- Horizontal Carousel รูปภาพ -->
    <div style="display:flex; justify-content:center; overflow-x:auto; gap:8px; scroll-snap-type:x mandatory; -webkit-overflow-scrolling:touch;">
      <img src={post.image} alt="post"
        style="aspect-ratio:4/5; width:260px; border-radius:8px; flex-shrink:0; scroll-snap-align:start; object-fit:cover;" />
    </div>

    <!-- ไอคอน reaction: หัวใจ คอมเมนต์ รีโพส แชร์ -->
    <div class="is-flex mt-2" style="justify-content:space-between;">
      <span class="icon-text" style="font-size:0.8rem;">
        <span class="icon is-small"><i class="fas fa-heart"></i></span>
        <span>{post.likes ?? 0}</span>
      </span>
      <span class="icon-text" style="font-size:0.8rem;">
        <span class="icon is-small"><i class="fas fa-comment"></i></span>
        <span>{post.staticComments.length + comments.length}</span>
      </span>
      <span class="icon-text" style="font-size:0.8rem;">
        <span class="icon is-small"><i class="fas fa-retweet"></i></span>
        <span>{post.reposts ?? 0}</span>
      </span>
      <span class="icon-text" style="font-size:0.8rem;">
        <span class="icon is-small"><i class="fas fa-paper-plane"></i></span>
        <span>{post.shares ?? 0}</span>
      </span>
    </div>

    <!-- dropdown เลือก Recent หรือ Popular -->
    <div style="border-top: 1px solid #eaeaea; border-bottom: 1px solid #eaeaea; padding: 8px 0; margin-top:12px;">
      <div style="position:relative; display:inline-block;">

        <!-- ปุ่มที่แสดงตัวเลือกปัจจุบัน -->
        <button class="button is-white is-small" on:click={() => dropdownOpen = !dropdownOpen}>
          <span style="font-size:0.8rem;">{sortMode}</span>
          <span class="icon is-small"><i class="fas fa-chevron-down"></i></span>
        </button>

        <!-- dropdown ที่โผล่เมื่อกด -->
        {#if dropdownOpen}
          <div style="position:absolute; background:white; border:1px solid #eaeaea; border-radius:6px; z-index:10; min-width:120px;">
            {#each ['Recent', 'Popular'] as mode}
              <a class="dropdown-item" style="font-size:0.8rem; display:block; padding:8px 16px; cursor:pointer;"
                on:click={() => { sortMode = mode; dropdownOpen = false; }}>
                {mode}
              </a>
            {/each}
          </div>
        {/if}

      </div>
    </div>

    <div class="mt-3">

      <!-- คอมเมนต์ static ของแต่ละโพส -->
      {#each post.staticComments as c}
        <div class="is-flex mb-3" style="gap:10px;">
          <figure class="image is-32x32" style="flex-shrink:0;">
            <img class="is-rounded" src={c.avatar}
              style="object-fit:cover; width:100%; height:100%;" />
          </figure>
          <div>
            <p style="font-size:0.8rem; font-weight:600; margin:0;">{c.name}</p>
            <p style="font-size:0.8rem; margin:0;">{c.text}</p>
            <p style="font-size:0.72rem; color:#aaa; margin:0;">{c.time} · <a>Like</a> · <a>Reply</a></p>
          </div>
        </div>
      {/each}

      <!-- คอมเมนต์ dynamic จาก user -->
      {#each comments as comment}
        <div class="is-flex mb-3" style="gap:10px;">
          <figure class="image is-32x32" style="flex-shrink:0;">
            {#if $currentUser?.avatar}
              <img class="is-rounded" src={$currentUser.avatar}
                style="object-fit:cover; width:100%; height:100%;" />
            {:else}
              <span style="width:32px; height:32px; background:#e0e0e0; border-radius:50%; display:flex; align-items:center; justify-content:center;">
                <i class="fas fa-user" style="font-size:0.7rem;"></i>
              </span>
            {/if}
          </figure>
          <div>
            <p style="font-size:0.8rem; font-weight:600; margin:0;">{$currentUser?.name ?? 'You'}</p>
            <p style="font-size:0.8rem; margin:0;">{comment}</p>
          </div>
        </div>
      {/each}

      <!-- กล่องพิมพ์คอมเมนต์ใหม่ -->
      <div class="is-flex mt-3" style="gap:10px;">
        <figure class="image is-32x32" style="flex-shrink:0;">
          {#if $currentUser?.avatar}
            <img class="is-rounded" src={$currentUser.avatar}
              style="object-fit:cover; width:100%; height:100%;" />
          {:else}
            <span style="width:32px; height:32px; background:#e0e0e0; border-radius:50%; display:flex; align-items:center; justify-content:center;">
              <i class="fas fa-user" style="font-size:0.7rem;"></i>
            </span>
          {/if}
        </figure>

        <div style="flex:1;">

          <!-- reply to ขึ้นเมื่อกดกล่องพิมพ์ -->
          {#if isTyping}
            <p style="font-size:0.72rem; color:#aaa; margin-bottom:4px;">
              Reply to <strong>{post.username}</strong>
            </p>
          {/if}

          <textarea class="textarea" style="font-size:0.85rem;"
            bind:value={commentText}
            placeholder="Add a comment..."
            on:focus={() => isTyping = true}
            on:blur={() => { if (!commentText) isTyping = false }}>
          </textarea>

          <!-- ไอคอนรูปภาพและ GIF + ปุ่ม post -->
          {#if isTyping}
            <div class="is-flex is-align-items-center is-justify-content-space-between mt-2">
              <div class="is-flex" style="gap:12px;">
                <span class="icon" style="cursor:pointer;">
                  <i class="fas fa-image"></i>
                </span>
                <span style="cursor:pointer; font-size:0.72rem; font-weight:bold; border:1px solid #aaa; border-radius:4px; padding:2px 6px;">
                  GIF
                </span>
              </div>
              <button class="button is-primary is-small is-rounded" on:click={postComment}>
                Post
              </button>
            </div>
          {/if}

        </div>
      </div>

    </div>
  </div>
</section>

{/if}

<style>
  /* การ์ด post detail จัดกึ่งกลาง ขนาดเดียวกับหน้าฟีด */
  .post-detail-card {
    max-width: 520px;
    width: 100%;
    margin: 0 auto;
    background: white;
    border-radius: 12px;
    padding: 16px;
    border: 1px solid #efefef;
  }
</style>