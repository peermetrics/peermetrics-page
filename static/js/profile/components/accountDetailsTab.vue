<template>
  <div class="container">
    <div class="row mb-4">
      <div class="col">
        <h5>Account Details</h5>
      </div>
    </div>

    <div class="row">
      <div class="col-12 col-md-4 order-md-2">
        <div class="alert alert-info text-small" role="alert">
          <i class="icon-shield"></i>
          <span>
            We will never distribute your email address to third
            parties. Read about email communication in our
            <a :href="privacyLink" target="_blank">privacy policy</a>.
          </span>
        </div>
      </div>
      <!--end of col-->
      <div class="col-12 col-md-8 order-md-1">
        <form class="row" :action="profileUrl" method="post">
          <input
            type="hidden"
            name="csrfmiddlewaretoken"
            :value="csrf"
          />
          <div class="col-6">
            <div class="form-group">
              <label for="first-name"
                >First Name:
                <span class="text-red">*</span>
              </label>
              <input
                class="form-control form-control-lg"
                type="text"
                name="firstname"
                id="first-name"
                v-model="user.first_name"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="form-group">
              <label for="last-name">Last Name:</label>
              <input
                class="form-control form-control-lg"
                type="text"
                name="lastname"
                id="last-name"
                v-model="user.last_name"
              />
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label for="emailaddress"
                >Email Address:
                <span class="text-red">*</span>
              </label>
              <input
                class="form-control form-control-lg"
                type="email"
                name="emailAddress"
                id="emailaddress"
                v-model="user.email"
                disabled
              />
              <small>Used to log in to your account</small>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <button class="btn btn-primary" type="submit">
                Save changes
              </button>
            </div>
          </div>
        </form>
      </div>
      <!--end of col-->
    </div>
  </div>
</template>
<script>
export default {
  name: 'AccountDetails',
  props: {
    profileUrl: {
      type: String,
      required: true,
    },
    csrf: {
      type: String,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    },
    privacyLink: {
      type: String,
      required: true
    }
  },
};
</script>
