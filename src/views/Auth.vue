<template>
	<div class="auth-container">
	  sample

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
