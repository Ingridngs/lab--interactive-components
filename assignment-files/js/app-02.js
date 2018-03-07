const frm = document.forms.logIn

frm.addEventListener("submit", function(e){

e.preventDefault()



let userName= frm.elements.username.value
let password= frm.elements.userpassword.value
let confirmPassword=frm.elements.confirmpassword.value
let taxIdNumber=frm.elements.taxid.value
let accountType=frm.elements.account
let terms=frm.elements.termsofservice
const error= document.querySelector(".form-group__validation.validation--username")
const confirmMessage=document.querySelector(".form-group__validation.validation--confirm-password")
const passMessage= document.querySelector(".form-group__validation.validation--user-password")
const taxMessage= document.querySelector(".form-group__validation.validation--tax-id")
const accountMessage=document.querySelector(".form-group__validation.validation--account")
const termsMessage= document.querySelector(".form-group__validation.validation--terms-of-service")
const complete=document.querySelector(".form-group__validation.validation--entire-form")

if(userName === ""){
	error.textContent = "Username cannot be blank"
} else error.textContent="Success"

if(password.length < 8){
	passMessage.textContent ="Password must have a minimum of 8 characters"
}else passMessage.textContent="Success"

if(confirmPassword!==password){
  confirmMessage.textContent="Passwords must match"
}else confirmMessage.textContent="Success"

if(taxIdNumber === ""){
	taxMessage.textContent="Must provide Tax ID Number"
} else taxMessage.textContent="Success"

const selection=accountType.options[accountType.selectedIndex].textContent
if(selection === "Checking" || selection === "Savings" || selection === "Trading"){
	accountMessage.textContent="Success"
} else accountMessage.textContent="Must select account type"

if(terms.checked===true){
	termsMessage.textContent="Success"
}else termsMessage.textContent="Must approve terms of service"

if (
		userName !== "" 
		&& password.length >= 8
		&& confirmPassword === password
		&& taxIdNumber !== ""
		&& ( selection === "Checking" || selection === "Savings" || selection === "Trading" )
		&& terms.checked === true
		) complete.textContent = "Form Complete"



})