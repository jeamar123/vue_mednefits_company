<template>
	<div class="auth-container">
	  
	  <div class="log-in-wrapper">
	  	<div class="log-in-need-help-container">
	  		<a href="#" class="need-help-text"><h3>Need help?</h3></a>
	  	</div>
	  	<div class="portal-log-in-container">
	  		<div class="portal-img-text-container">
	  			<img :src="'../assets/img/mednefits_logo_v3_(white).png'">
	  			<h2 class="text-below-image">for business</h2>
	  		</div>
	  		<form>
  				<div class="form-group">
  					<input class="login-input" type="text" placeholder="Email address">
  				</div>
  				<div class="form-group">
  					<input class="login-input" type="text" placeholder="Enter password">
  				</div>
  				<div class="login-checkbox">
  					<label>
  						<input type="checkbox"> Stay signed in
  					</label>
  				</div>
  				<div class="login-btn-container">
  					<button>Log in</button>
  				</div>
  				<div class="forgot-password-container">
  					<a href="">Forgot password?</a>
  				</div>
	  		</form>
	  	</div>
	  </div>

  </div>
  
</template>

<script>
	export default {
		data() {
			return {
				sampleData : true,
			}
		},
		created() {
			this.sampleFunc();
		},
		methods: {
      sampleFunc() {
      	console.log('Hello World!');
      },
    }
	}
</script>
