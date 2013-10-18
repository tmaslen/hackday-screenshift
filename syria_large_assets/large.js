$( document ).ready(function() {
    window.command = function (instructions) {
        var inst = instructions.split('=');
        
        $('#' + inst[1]).trigger('click');

        // if (inst[0] === 'tab') {
        //     $('#' + inst[1]).trigger('click');
        // } else if (inst[0] === 'item') {
        //     if (inst[1] === 'protests_start') {
        //         $('#homs').trigger('click');
        //     }
        //     // $('#' + inst[1]).trigger('click');
        //     // protests_start
        // }
        
    };

    $('#nav a').on('click', function (ev) {
        ev.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        // console.log($('#display_' + $(this).attr('href')))
        //$('#display_' + $(this).attr('href')).addClass('active').removeClass('inactive').siblings().removeClass('active').addClass('inactive');
    
        $('.big-panel').removeClass('big-panel--show');

        $('.navigable').attr('class', 'navigable');
        $($(this).attr('data-show')).addClass('big-panel--show');
    });

    $('.navigable').on('click', function () {
        $('.navigable').attr('class', 'navigable');
        $(this).attr('class', 'navigable active_path');
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

        //set delay of 3seconds
        //$(this).parent().siblings().hide();

    })


});