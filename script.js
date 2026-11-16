

//experience filter
    //get all buttons for types pf holidays
    const holidayTypePicked = document.querySelectorAll(".filter-btn")
    //get all experiences card
    const experiences = document.querySelectorAll("#experiences .col")

    //get the price range slider input and element of current value
    const priceRange = document.getElementById("priceRange");
    const priceOutput = document.getElementById("priceOutput");

    //current state of filter default
    let currentType = "all";
    let currentMaxPrice = 1000;

    // have button change highlight when clicked
    holidayTypePicked.forEach(button =>{
        //event listener for each button
        button.addEventListener("click", function()
        {

        // loop through all buttons and clear highlight then add to button that was clicked
        holidayTypePicked.forEach(btn => btn.classList.remove("active"))
        this.classList.add("active")

                    //get type clicked
                     currentType = this.getAttribute("data-filter");
                    //call fiter function
                     filterExperiences();

         });
    });





// function to loop through the experience cards and check it they match the current type click and price set, then displays them.
function filterExperiences() {
    experiences.forEach(experience => {
        //get price and type of each card
        const typeOfExperience = experience.getAttribute("data-category");
        const priceOfExperience = Number(experience.getAttribute("data-price"));
        //check if they match the type that is active and are less then or equal current price
        const matchesType = (currentType == "all" || typeOfExperience == currentType);
        const matchesPrice = (priceOfExperience <= currentMaxPrice);

         if(matchesType && matchesPrice)
          {
          experience.style.display = "block";  //show experience not hide which you would think would block would mean
          } else
          {
           experience.style.display = "none"; // Hide experience
           }


    });


}

    // listens for changes on price range slider
    if(priceRange && priceOutput){
        priceRange.addEventListener("input", function(){
            currentMaxPrice = Number(this.value);
            priceOutput.textContent = currentMaxPrice;
            filterExperiences();
        });
    }









// forgot JS for contact page https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation use example build on.


// contact form validation
const form = document.getElementById("contactForm");
const resultMsg = document.getElementById("result");

if(form) {
    form.addEventListener("submit", function (event)
    {
        // stop page refreshing
        event.preventDefault();

        const emailChar = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneChar = /^[0-9+\s\-()]{7,15}$/;

        const name = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const enquiry = document.getElementById("enquiry").value.trim();
        const message = document.getElementById("message").value.trim();

        //check if fields are empty
        if(!name || !email || !phone || !enquiry || !message)
        {
              resultMsg.textContent = "Please fill in all required fields. ";
              resultMsg.style.color =  "red";
              return;
        }

        if(!emailChar.test(email))
        {
            resultMsg.textContent = "Please enter a valid email address. ";
            resultMsg.style.color =  "red";
            return;
        }

        if(!phoneChar.test(phone))
        {
            resultMsg.textContent = "Please enter a valid phone number. ";
            resultMsg.style.color =  "red";
            return;
        }

        if(message.length < 20)
        {
            resultMsg.textContent = "Your message is too short. Please provide more details.";
            resultMsg.style.color = "red"
            return;
        }

        resultMsg.textContent = "Thank you! Your message has been sent successfully ";
        resultMsg.style.color =  "green";
        form.reset();

    })

}


