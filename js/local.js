const swiper = new Swiper('.swiper', {
    
      centeredSlides: true,
       loop: true,
      speed: 800,
      slidesPerView: 'auto',
     
      spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
       navigation: {
          nextEl: '#right-button',
          prevEl: '#left-button',
  },
    
  breakpoints: {
    0: { /* when window >=0px - webflow mobile landscape/portriat */
        slidesPerView: 1,
       slidesPerGroup:1,
      spaceBetween: 20,
    },
        480: { /* when window >=0px - webflow mobile landscape/portriat */
        slidesPerView: 1.5,
       slidesPerGroup:1,
      spaceBetween: 20,
    },
    767: { /* when window >= 767px - webflow tablet */
          slidesPerView: 2,
       slidesPerGroup:1,
      spaceBetween: 30,
    },
    992: { /* when window >= 988px - webflow desktop */
       slidesPerView: 3,
       slidesPerGroup:1,
      spaceBetween: 30,
    }
  },
});

$('.hamburger-menu').click( function() {
    $('.nav-menu-links').toggleClass('active');
    $(this).toggleClass('active');
});


$('.tab-02-link').click( function() {
    $(this).siblings().removeClass('w--current');
    $(this).addClass('w--current');
});

$('.faq-item').click( function() {
    // $(this).siblings().removeClass('active');
    $(this).toggleClass('active');
});
$('#tab-1').click( function() {
    $('#w-tabs-0-data-w-pane-1').siblings().removeClass('w--tab-active');
    $('#w-tabs-0-data-w-pane-1').addClass('w--tab-active');
});
$('#tab-2').click( function() {
    $('#w-tabs-0-data-w-pane-2').siblings().removeClass('w--tab-active');
    $('#w-tabs-0-data-w-pane-2').addClass('w--tab-active');
});
$('#tab-3').click( function() {
    $('#w-tabs-0-data-w-pane-3').siblings().removeClass('w--tab-active');
    $('#w-tabs-0-data-w-pane-3').addClass('w--tab-active');
});



$('#custom-tab-1').click( function() {
    $('#tab-content-1').siblings().removeClass('active');
    $('#tab-content-1').addClass('active');
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
});
$('#custom-tab-2').click( function() {
    $('#tab-content-2').siblings().removeClass('active');
    $('#tab-content-2').addClass('active');
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
});
$('#custom-tab-3').click( function() {
    $('#tab-content-3').siblings().removeClass('active');
    $('#tab-content-3').addClass('active');
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
});


$(function() {
      // initialize counter
        var counter = 0;

        // set the + functionality
        $('#plus').click( function(){$('#display').html( ++counter )} );
        // set the - functionality
        $('#minus').click( function(){$('#display').html( (counter-1<0)?counter:--counter )} );
        // initialize display
        $('#display').html( counter );
  });



$(".addmore").click(function() {
        var newRow = '<div class="addFields added-row">' + '<div class="form-group">' + '<div class="inputBx mb-1">' + '<select name="role[]" class="form-control" required>' + '<option value="" selected disabled>Role</option>' + '<option value="Software Developer/Engineer">Software Developer/Engineer</option>' + '<option value="Front-End Developer">Front-End Developer</option>' + '<option value="Back-End Developer">Back-End Developer</option>' + '<option value="Full-Stack Developer">Full-Stack Developer</option>' + '<option value="Mobile Developer">Mobile Developer</option>' + '<option value="Game Developer">Game Developer</option>' + '<option value="DevOps Engineer">DevOps Engineer</option>' + '<option value="Blockchain Developer">Blockchain Developer</option>' + '<option value="Systems Developer">Systems Developer</option>' + '<option value="QA Developer">QA Developer</option>' + '<option value="Data Scientist">Data Scientist</option>' + '<option value="Data Engineer">Data Engineer</option>' + '<option value="Data Analyst">Data Analyst</option>' + '<option value="AI/ML Engineer">AI/ML Engineer</option>' + '<option value="Business Intelligence (BI) Developer">Business Intelligence (BI) Developer</option>' + '<option value="Data Security Analyst">Data Security Analyst</option>' + '<option value="Statistician">Statistician</option>' + '<option value="UI/UX Designer">UI/UX Designer</option>' + '<option value="Graphic Designer">Graphic Designer</option>' + '<option value="Motion Graphics Designer">Motion Graphics Designer</option>' + '<option value="Industrial Designer">Industrial Designer</option>' + '<option value="3D Artist">3D Artist</option>' + '<option value="Project Manager">Project Manager</option>' + '<option value="Product Manager">Product Manager</option>' + '<option value="Accountant">Accountant</option>' + '</select>' + '</div>' + '</div>' + '<div class="form-group">' + '<div class="inputBx mb-1">' + '<select name="experience[]" class="form-control" required>' + '<option value="" selected disabled>Year of Experience</option>' + '<option value="Fresher (0-1 Years)">Fresher (0-1 Years)</option>' + '<option value="Mid Level (2-4 Years)">Mid Level (2-4 Years)</option>' + '<option value="Senior (More than 5 Years)">Senior (More than 5 Years)</option>' + '</select>' + '</div>' + '</div>' + '<div class="qtyCLsWrp">' +  '<div class="qtyCLs">' + '<span id="minus">-</span>' + '<div id="display">0</div>' + '<span id="plus">+</span>'  + '</div>' +  '</div>' + '<div class="fullWidth">' + '<button class="removeBtn"><img src="images/cross.png"/></button>' + ' </div>' + ' </div>';
        $(".addmore").before(newRow);
    });
    // Remove Button
    $(document).on('click', '.removeBtn', function() {
        $(this).closest('.added-row').remove();
    });



