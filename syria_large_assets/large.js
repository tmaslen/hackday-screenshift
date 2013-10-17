// var _global = {};

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
        $('#display_' + $(this).attr('href')).addClass('active').removeClass('inactive').siblings().removeClass('active').addClass('inactive');
    });

    $('.navigable').on('click', function () {
        $('.navigable').attr('class', 'navigable');
        $(this).attr('class', 'navigable active_path');
    });


    $('.item').on('click', function (ev) {
        ev.preventDefault();
        if ($(this).attr('href') === 'protests_start') {
            $('#homs').trigger('click');
        } else if ($(this).attr('href') === 'item2') {
            $('#aleppo').trigger('click');
        } else {
            return;
        }
        $('.item').removeClass('active_item')
        $(this).addClass('active_item')

        //set delay of 3seconds
        $(this).parent().siblings().hide();

    })


});