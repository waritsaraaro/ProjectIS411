<script>
  let { form } = $props();
</script>

<section class="hero is-primary">
  <div class="hero-body py-3">
    <div class="container has-text-centered">
      <p class="title is-4 mb-0">Sign In</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-4-desktop is-5-tablet">
        <div class="box">
          
          <form method="POST">
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  class="input is-primary"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={form?.email ?? ''}
                  required
                />
              </div>
            </div>

            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input
                  class="input is-primary"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            {#if form?.error}
              <p class="has-text-danger is-size-7 mb-3">{form.error}</p>
            {/if}

            <div class="is-flex is-justify-content-flex-end mb-4">
              <a class="is-size-7 has-text-primary" href="/forgetpassword">Forgot password?</a>
            </div>

            <button class="button is-primary is-fullwidth mb-4" type="submit">
              Sign In
            </button>
          </form>

          <p class="has-text-centered is-size-7 has-text-grey mb-3">or continue with</p>

          <div class="buttons">
            <button class="button is-light is-fullwidth">Google</button>
            <button class="button is-light is-fullwidth">Facebook</button>
            <button class="button is-light is-fullwidth">Apple</button>
          </div>

          <div class="has-text-centered mt-4">
            <p class="is-size-7">
              Don’t have an account?
              <a class="has-text-primary" href="/createaccount">Create account</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>