let cont = 0

function registerLogin(){
	
	let login = localStorage.getItem("login")
	
	if(login === null){
		
		localStorage.setItem("login", "icet2024")
		localStorage.setItem("password","icet2024")
		
	}
	
}

/*function userValidation(){
	
	let loginStorage = localStorage.getItem('login')
	
	let passwordStorage = localStorage.getItem('password')
	
	if(loginStorage === null || passwordStorage === null){
		
		alert("Realize seu cadastro")
		
	}
	
	const loginInput = document.getElementById('login').value
	
	const passwordInput = document.getElementById('password').value
	
	if(loginStorage == loginInput && passwordStorage == passwordInput)&&
	(loginStorage != '' && psswordStorage != ''){
		
	window.location.href="home.html"	
		
	}else{
	
		if(const == 0){
			
			createElementsinId('span', 'wrongPassword', 'Login ou senha errado')
			const = 1
			
		}
	
	}
	
}*/