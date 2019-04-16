<template>
  <div class="auth-container">
    <div class="log-in-wrapper">
      <div class="log-in-need-help-container">
        <a href="#" class="need-help-text-container">
          <h3 class="need-help-text">Need help?</h3>

          <div class="tooltip-container">
            <h3 class="tooltip-title">We're here to help.</h3>

            <div class="tooltip-phone-container">
              <h3 class="tooltip-phone-email-title">You may ring us</h3>

              <h3 class="tooltip-phone-email-details">+65 6254 7889</h3>

              <h3 class="tooltip-phone-email-details">Mon - Fri 10:00 to 19:00</h3>
            </div>

            <h3 class="tooltip-phone-email-title">Drop us a note, anytime</h3>

            <h3 class="tooltip-phone-email-details">happiness@mednefits.com</h3>
          </div>
        </a>
      </div>

      <div class="login-container">
        <div class="portal-log-in-container">
          <div class="portal-img-text-container">
            <img :src="'../assets/img/mednefits_logo_v3_(white).png'">

            <h2 class="text-below-image">for business</h2>
          </div>

          <form>
            <div class="form-group">
              <input class="login-input" type="text" placeholder="Email address" v-model="loginDetails.email">
            </div>

            <div class="form-group">
              <input class="login-input" type="password" placeholder="Enter password" v-model="loginDetails.password">
            </div>

            <div class="login-checkbox">
              <label>
                <input type="checkbox">
                Stay signed in
              </label>
            </div>

            <div class="login-btn-container">
              <button v-on:click.prevent="login">Log in</button>
            </div>

            <div class="fp-container">
              <a href>Forgot password?</a>
            </div>
          </form>
        </div>
      </div>

      <div class="forgot-password-container">
        <div class="portal-log-in-container">
          <div class="portal-img-text-container">
            <img :src="'../assets/img/mednefits_logo_v3_(white).png'">

            <h2 class="text-below-image">for business</h2>
          </div>

          <form>
            <div class="form-group">
              <input class="login-input" type="text" placeholder="Communication Email Address">
            </div>

            <div class="login-btn-container">
              <button>Reset Password</button>
            </div>

            <div class="fp-login-container">
              <a href >Login</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */ 
export default {
  data() {
    return {
			loginDetails: {},
    };
	},
	methods: {
		login() {
			console.log(`Email is ${this.loginDetails.email} Pass is ${this.loginDetails.password}`);

			//empty form
			this.loginDetails.email = '';
			this.loginDetails.password = '';
		},
	}
};
</script>
