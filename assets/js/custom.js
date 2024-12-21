$(document).ready(function () {
    $('.aj-promotion-slider').slick({
        infinite: true,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.aj-info-view').on('click', function () {
        if ($(this).children('.aj-btn-text').text() == "View Detail") {
            $(this).children('.aj-btn-text').text("Hide Detail")
        } else {
            $(this).children('.aj-btn-text').text("View Detail");
        }
        $(this).parents('.aj-flight-details').siblings('.aj-flight-info-wrapper').toggleClass('show')
    })

    const whereFrom = ["LAX(Los Angeles International) |", "IAD (Dulles International Airport)"];
    if ($('#whereFrom').length) {
        $("#whereFrom, #whereTo, #whereFrom2, #whereTo2, #whereFrom3, #whereTo3, #whereFrom4, #whereTo4").autocomplete({
            source: whereFrom,
            minLength: 1, // Minimum characters to trigger suggestions
        });
    }
    var country_list = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];
    if ($('#country').length) {
        $("#country").autocomplete({
            source: country_list,
            minLength: 1, // Minimum characters to trigger suggestions
        });
    }

    $('.aj-profile-form .form-control').on('click', function () {
        $(this).parents('.aj-profile-content__inner').children('.aj-dashboard-card').removeClass('aj-form-card-disabled');
        $(this).parents('.aj-dashboard-card').siblings('.aj-dashboard-card').addClass('aj-form-card-disabled');
        var btn = $(this).parents('.aj-dashboard-card').find('button').removeAttr('disabled');
    });

    $('.aj-password-icon').on('click', function () {
        let passwordInput = $(this).siblings('.form-control').attr('type');
        if (passwordInput === 'password') {
            $(this).siblings('.form-control').attr("type", "text");
            $(this).children('img').attr("src", "assets/images/eye.svg");
        } else {
            $(this).siblings('.form-control').attr("type", "password");
            $(this).children('img').attr("src", "assets/images/eyeSlash.svg");
        }
    });

    $('.aj-change-mail-btn').on('click', function () {
        var target = $(this).data('target')
        $('.aj-mail-step').removeClass('show');
        $('.aj-mail-step__' + target).addClass('show');
        if (target == "") {
            $('.aj-mail-step__1').addClass('show');
        }
    });
    $('.aj-back-icon').on('click', function () {
        var target = $(this).data('target')
        $('.aj-mail-step').removeClass('show');
        $('.aj-mail-step__' + target).addClass('show');
    });

    $('.aj-site-header-icon').on('click', function () {
        $(this).siblings('.aj-member-details').toggleClass('show');
    });

    $('.aj-sidebar-icon').on('click', function () {
        $('.aj-site-sidebar').toggleClass('aj-menu-open');
    });

    if ($('#accountChart').length) {
        var ctx = document.getElementById("accountChart").getContext('2d');
        // Create the gradient
        var gradient = ctx.createLinearGradient(0, 0, 0, 150); // Vertical gradient from top to bottom
        gradient.addColorStop(0, 'rgba(0, 4, 53, 0.2)'); // Start color (semi-transparent dark blue)
        gradient.addColorStop(1, 'rgba(0, 4, 53, 0)'); // End color (transparent dark blue)
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["JAN", "FAB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
                datasets: [{
                    label: '',
                    data: [50, 80, 120, 100, 90, 95, 120, 100, 130, 120, 135, 125],
                    fill: true,
                    borderColor: '#000435',
                    backgroundColor: gradient,
                    borderWidth: 2,
                    pointRadius: 1,
                    pointBackgroundColor: '#000435',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false // Completely remove legend box
                    },
                    tooltip: {
                        backgroundColor: '#',
                        titleColor: '#BFC0CC',
                        bodyColor: '#ffffff',
                        displayColors: false,
                        caretSize: 8
                    }
                },
                scales: {
                    x: {
                        grid: {
                            display: false,
                        },
                        ticks: {
                            font: {
                                size: 12,
                                weight: '500',
                                family: 'Figtree',
                            },
                            color: '#33365D', // Set color of X-axis ticks
                        }
                    },
                    y: {
                        grid: {
                            display: false, // Hide grid lines
                        },
                        ticks: {
                            display: false, // Hide ticks
                        }
                    }
                }
            }
        });
    }



    if ('[data-scrollbar]') {
        Scrollbar.initAll();
    }
});