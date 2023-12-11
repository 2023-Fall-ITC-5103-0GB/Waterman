
function searchPlace(){
    
    var noResultsMessage = document.querySelector('.nosearch');
    // noResultsMessage.style.display = 'none';                                            // assign places to an array
    const placeName=['cape breton','tofino','charlevoix','pegges cove','toronto','kitchener','brampton'
         ,'mississauga','london'];
                                                //getting input from search bar
    var inputPlace=document.getElementById('place').value;
    inputPlace=inputPlace.trim().toLowerCase();
    
                                                //checking whether the input is present in the array
    if(placeName.includes(inputPlace)){
        noResultsMessage.style.display = 'none';
        var output=document.getElementById('result1');
                                                //get html element by id for displaying output
        output.innerHTML="Search results found for "+inputPlace;
                                                //change output styles
        output.style.color='blue';
        output.style.fontSize='150%';
    }
                                                //give output user enter empty space
    else if(inputPlace === ''){
      noResultsMessage.style.display = 'none';
      alert("Please enter a valid location");
    }
                                            //give output when user enter wrong place
    else{
        noResultsMessage.style.display = 'block';
    }
}

    //take action only when user scrolls
    window.onscroll = function() {
        buttonVisibility();
    };

function buttonVisibility() {
    //get button id 
    var scrollTopoutput= document.getElementById("scrollTopBtn");
    //check whether scroll position > 20 pixels
    if (document.body.scrollTop > 20) {
    //display button else do not display
        scrollTopoutput.style.display = "block";
    } else {
        scrollTopoutput.style.display = "none";
    }
}

// Scroll to the top of the page
function scrolltoTop() {
    // assign scroll =0 pixels
    document.body.scrollTop = 0; 
}

