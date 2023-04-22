
        function sendEmail() {
          Email.send({
          Host : "smtp.elasticmail.com",
          Username : "wilson.dallas82@gmail.com",
          Password : "Dwilson1982",
          To : 'wilson.dallas82@gmail.com',
          From : "wilson.dallas82@gmail.com",
          Subject : "New Enquiry",
          Body : "Test",  
          }).then(
              message => alert("Thank you for your Enquiry")
          );
        }
