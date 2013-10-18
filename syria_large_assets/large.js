$( document ).ready(function() {
    var goto_screen_two = false;

    window.command = function (instructions) {
        var inst = instructions.split('=');
        
        if (inst[1] == 'video-play') {
            document.querySelector('video').play();
        }

        if (inst[1] == 'video-pause') {
            document.querySelector('video').pause();
        }

        $('#' + inst[1]).trigger('click');
        
    };

    $('#nav a').on('click', function (ev) {
        ev.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
    
        $('.big-panel').removeClass('big-panel--show');

        $('.navigable').attr('class', 'navigable');
        $($(this).attr('data-show')).addClass('big-panel--show');
        $('#syria_arrows').attr('class', 'hide_arrows');
        goto_screen_two = false;
    });

    $('.navigable').on('click', function () {
        $('.navigable').attr('class', 'navigable');
        $(this).attr('class', 'navigable active_path');
        if ($(this).attr('id') === 'aleppo') {
// console.log($('#syria_arrows').attr('class'))
            $('#syria_arrows').attr('class', 'show_arrows');
            // .attr('transform', 'translate(30, 50)')

            if (goto_screen_two) {
                $('.map_with_info')
                    .addClass('map_with_info__displayed')
                    .removeClass('map_with_info_hidden');
                $('.main_map').addClass('big_map_hidden');
                $('#syria_arrows').attr('class', 'show_arrows')
            } else {
                goto_screen_two = true;
            }
             
        }
    });


    $('.conflict_overview--item').on('click', function (ev) {

        ev.preventDefault();
        var item = $(this),
            is_selected = item.hasClass('conflict_overview--item__selected');
        $('.conflict_overview--item').removeClass('conflict_overview--item__selected');
        $('.conflict_overview--panel').removeClass('show');

        $('.navigable').attr('class', 'navigable');


        if (!is_selected) {

            $(this).addClass('conflict_overview--item__selected');

            if (item.attr('href') === 'conflict_overview--protests_start') {
                $('#homs').trigger('click');
                setTimeout(function() {
                    $('.conflict_overview--protests_start_panel').addClass('show');
                }, 500);
            } else if ($(this).attr('href') === 'conflict_overview--armed_conflict_starts') {
                $('#aleppo').trigger('click');
                setTimeout(function() {
                    $('.conflict_overview--armed_conflict_starts_panel').addClass('show');
                }, 500);

            } else {
                return;
            }

        }
        else {
            $('.conflict_overview--panel').removeClass('show');
        }

    })


});