<script setup>
import Header from '../components/Header.vue';

import Footer from '../components/Footer.vue';   
</script>

<template>
<Header />


<main>
    <div class="maior">  	
		<input type="checkbox" id="chk" aria-hidden="true">

			<div class="login">
				<form class="form" action="/catalogo" method="post">
					<label for="chk" aria-hidden="true">Login</label>
					<input class="input" type="email" name="email" placeholder="Email" required="">
					<input class="input" type="password" name="password" placeholder="Password" required="">
					<button id="login">Log in</button>
				</form>
			</div>

      <div class="register">
				<form class="form" action="http://localhost:8090/cadastrar" method="post">
					<label for="chk" aria-hidden="true">Registrar</label>
					<input class="input" type="email" name="email" placeholder="Email" required="">
					<input class="input" type="password" name="password" placeholder="Password" required="">
					<button id="register">Register</button>
				</form>
			</div>
	</div>
</main>

<Footer />
</template>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

main{
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1050px;
    margin: 80px auto;
}

.maior {
  display: flex;
  flex-direction: column;
  background-color: #282923;
  max-height: 420px;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 7px 7px 10px 3px #24004628;
  margin: auto;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 24px;
  margin: auto;
}

/*checkbox to switch from sign up to login*/
#chk {
  display: none;
}

/*Login*/
.login {
  position: relative;
  width: 100%;
  height: 100%;
}

.login label {
  margin: 25% 0 5%;
}

label {
  color: #fff;
  font-size: 2rem;
  justify-content: center;
  display: flex;
  font-weight: bold;
  cursor: pointer;
  transition: .5s ease-in-out;
}

.input {
  width: 100%;
  height: 40px;
  background: #e0dede;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 4px;
}

/*Register*/
.register {
  background: #eee;
  border-radius: 60% / 10%;
  transform: translateY(5%);
  transition: .8s ease-in-out;
}

.register label {
  color: #282923;
  transform: scale(.6);
}

#chk:checked ~ .register {
  transform: translateY(-60%);
}

#chk:checked ~ .register label {
  transform: scale(1);
  margin: 10% 0 5%;
}

#chk:checked ~ .login label {
  transform: scale(.6);
  margin: 5% 0 5%;
}   
/*Button*/
.form button {
  width: 85%;
  height: 40px;
  margin: 12px auto 10%;
  color: #fff;
  background: #282923;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: .2s ease-in;
}

.form button:hover {
  background-color: #282923;
}

</style>