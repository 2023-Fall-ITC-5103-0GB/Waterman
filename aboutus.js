
function searchPlace(){
    const placeName=['cape breton','tofino','charlevoix','pegges cove','toronto','kitchener','brampton'
         ,'mississauga','london'];
    var inputPlace=document.getElementById('place').value;
    inputPlace=inputPlace.toLowerCase();
    if(placeName.includes(inputPlace)){
        var output=document.getElementById('result1');
        output.innerHTML="We provide our services at "+inputPlace;
        output.style.color='blue';
        output.style.fontSize='150%';
    }
    else if(inputPlace===''){
        alert("Please enter a location")
    }
    else{
        alert("Oops..No store located at "+ inputPlace);
    }
}


    window.onscroll = function() {//take action only when user scrolls
        buttonVisibility();
    };

    function buttonVisibility() {
        var scrollTopoutput= document.getElementById("scrollTopBtn");
        if (document.body.scrollTop > 20) {//shows button only when scroll position > 20 pixels
            scrollTopoutput.style.display = "block";
        } else {
            scrollTopoutput.style.display = "none";
        }
    }

    // Scroll to the top of the page
    function scrolltoTop() {
        document.body.scrollTop = 0; // assign scroll =0 pixels
    }

