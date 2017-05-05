function sendMail() {
         var link = "mailto:shubham.wahal@iaeste.in"
         + "?cc="
         + "&subject=" + escape(document.getElementById('name').value)
         + "&body=" + escape(document.getElementById('message').value)
     ;

     window.location.href = link;
 }