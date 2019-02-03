$(document).ready(function () {
  // Add smooth scrolling to all links in navbar + footer link
  $("#myNavbar a, nav a, a.to-top, a[href='#home'], a[href='#work']").on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $(window).scroll(function () {
    $(".slideanim").each(function () {
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
    });
  });

  $('.more_text').hide();
  $('span.read_more').click(function (event) { /* find all a.read_more elements and bind the following code to them */

    event.preventDefault(); /* prevent the a from changing the url */
    $(this).parents('blockquote, div').find('.more_text').show(); /* show the .more_text span */
    $(this).hide();

  });

  $('span.read_less').click(function (event) { /* find all a.read_more elements and bind the following code to them */

    event.preventDefault(); /* prevent the a from changing the url */
    $(this).parents('blockquote, div').find('.more_text').hide(); /* show the .more_text span */
    $(this).parents('blockquote, div').find('span.read_more').show();

  });

  $("#contact-form").submit(function () {
    $.ajax({
      url: "https://usebasin.com/f/25fc84e69933.json",
      method: "POST",
      data: $(this).serialize(),
      dataType: "json",
      success: function (data) {
        $("#form-submitted").css("display","block");
        $("#contact-form").css("display","none");
      },
      error: function (xhr, err) {
        alert('something went wrong! please try again');
      }
    })

    return false;
  });
})

function w3_open() {
  $("#mySidebar").css("display", "block");
}

function w3_close() {
  $("#mySidebar").css("display", "none");
}