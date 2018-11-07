/* eslint-env jquery */

document.addEventListener('DOMContentLoaded', () => {
  const submitButton = $('.contact-us-submit-button');

  submitButton.on('click', () => {
    const contactFormData = {
      firstName: $('.contact-us-firstName').val(),
      lastName: $('.contact-us-lastName').val(),
      emailAddress: $('.contact-us-emailAddress').val(),
      phoneNumber: $('.contact-us-phoneNumber').val(),
      contactMessage: $('.contact-us-contactMessage').val(),
    };

    $.ajax({ url: '/contact', method: 'POST', data: contactFormData })
      .done((res) => {
        console.log(res);
      })
      .fail((error) => {
        submitButton.effect('shake');
        error.responseJSON.details.forEach((err) => {
          console.log(err.message);
        });
      });
  });
});
