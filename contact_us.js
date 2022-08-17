function contact_us_submit(){
    if ( confirm("Are you sure you want to send this message")==true)
    {
        alert("Message has been sent");

    }else if( confirm("Are you sure you want to send this message")==false){
        alert("Message has been canceled");
    }    
}
