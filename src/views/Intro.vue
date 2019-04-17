<template>
  <div class="welcome-body-container">
  	<div class="container">
	  	<div class="body-content">
	  		<div class="greet-container">
	  			<div class="header-msg-container">
	  				<h2 class="header-greet-msg">Hi <span ng-bind="customer.contact_name" class="ng-binding"></span>, ready to get started?</h2>
	  				<p class="header-text-msg">
							Some of those sections below have been completed. For the uncompleted sections
							<br>make sure you have the required information on hand in order to make this process faster.
							<br>Give us a call at +65 6254 7889 if you have any questions.
						</p>
	  			</div>
	  			<div class="welcome-img-container">
		  			<img :src="'../assets/img/welcome.png'">
		  		</div>
	  		</div>
	  		<div class="body-summary-content">
	  			<p>What to expect:</p>
	  			<table class="table-bordered summary-table">
	  				<thead>
	  					<tr>
	  						<th>
	  							<span>1</span>
	  							<h1>Select plan and provide company information</h1>
	  						</th>
	  					</tr>
	  					<tr>
	  						<th>
	  							<span>2</span>
	  							<h1>Input payment details and send payment</h1>
	  						</th>
	  					</tr>
	  					<tr>
	  						<th>
	  							<span>3</span>
	  							<h1>Enroll all full time employess into this plan</h1>
	  						</th>
	  					</tr>
	  				</thead>
	  				<tbody>
	  					<tr>
	  						<td>
	  							<img :src="'../assets/img/icons/verified.png'">
	  						</td>
	  					</tr>
	  					<tr>
	  						<td>
	  							<span>Required Information</span>
	  							<div>
	  								<p>Payee cheque information (company name, address,ACRA number) can be found in invoice</p>
	  							</div>
	  							<div>
	  								<p>You may download the invoice from Welcome Email or the company portal under Account & Billing.</p>
	  							</div>
	  						</td>
	  					</tr>
	  					<tr>
	  						<td>
	  							<img :src="'../assets/img/icons/verified.png'">
	  						</td>
	  					</tr>
	  				</tbody>
	  			</table>
	  		</div>
	  	</div>
  	</div>
  	<div class="lets-go-container">
  		<button class="btn-info btn-lets-go">Let's Go</button>
  	</div>
  </div>
  
</template>

<script>
import intro from "@/components/intro";

export default intro;
</script>

