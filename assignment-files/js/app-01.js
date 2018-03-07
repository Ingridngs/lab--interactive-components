const buttons= document.querySelectorAll("button")
const arrayOfButtons=[...buttons]



const membership= document.querySelector(".membership")
const programs= document.querySelector(".programs")
const screenings= document.querySelector(".screenings")
const press= document.querySelector(".press")

const membershipButton=document.querySelector(".membership1")
const programsButton=document.querySelector(".programs1")
const screeningButton=document.querySelector(".screenings1")
const pressButton=document.querySelector(".press1")


for(let i=0; i<arrayOfButtons.length; i++){
	arrayOfButtons[i].addEventListener("click",changeInfo)
	
}


function changeInfo(e){

	if(e.target.textContent==="Membership"){ 
       membership.style.display="block"
       programs.style.display="none"
       screenings.style.display="none"
       press.style.display="none"
       membershipButton.style.backgroundColor="pink"
       programsButton.style.backgroundColor="blue"
       screeningButton.style.backgroundColor="blue"
       pressButton.style.backgroundColor="blue"



	 }
	else if (e.target.textContent==="Programs"){ 
       membership.style.display="none"
       programs.style.display="block"
       screenings.style.display="none"
       press.style.display="none"

       membershipButton.style.backgroundColor="blue"
       programsButton.style.backgroundColor="pink"
       screeningButton.style.backgroundColor="blue"
       pressButton.style.backgroundColor="blue"

	 }

	else if (e.target.textContent==="Screenings"){ 
       screenings.style.display="block"
       membership.style.display="none"
       programs.style.display="none"
       press.style.display="none"

       membershipButton.style.backgroundColor="blue"
       programsButton.style.backgroundColor="blue"
       screeningButton.style.backgroundColor="pink"
       pressButton.style.backgroundColor="blue"
       }

	else if  (e.target.textContent==="Press"){ 
       press.style.display="block"
       screenings.style.display="none"
       membership.style.display="none"
       programs.style.display="none"


       membershipButton.style.backgroundColor="blue"
       programsButton.style.backgroundColor="blue"
       screeningButton.style.backgroundColor="blue"
       pressButton.style.backgroundColor="pink"

	 }


}