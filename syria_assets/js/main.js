function show_screen_shift_controls() {
    $('body').addClass('body--show-shift-controls');
}

function send_command(params) {
    window.location = 'ss://?'+params;
    console.log('command: ' + params);
}

function control_panel_mode() {
    $('body').removeClass('screenshots_mode').removeClass('body--show-shift-controls').addClass('control_panel_mode');
}

/*
    **********************************************************
    SHIFT TO TV
    **********************************************************
*/

$('.shift_cta').bind('click', function() {

    // open the second screen
    window.location = 'ss://cta';

    // convert page to control panel mode
    control_panel_mode();

});

/*
    **********************************************************
    CONTROL PANEL
    **********************************************************
*/

$('.control_panel--nav-item').bind('click', function() {

    var clicked_item   = $(this),
        section_number = clicked_item.attr('data-section');

    // highlight tab
    $('.control_panel--nav-item').removeClass('control_panel--nav-item__selected');
    clicked_item.addClass('control_panel--nav-item__selected');

    // show right panel
    $('.control_panel--section').removeClass('control_panel--section__selected');
    var panel_to_select = $('.control_panel--section')[section_number];
    $(panel_to_select).addClass('control_panel--section__selected');

    // send command
    if (clicked_item.attr('data-command')) {
        send_command('tab=' + clicked_item.attr('data-command'));
    }

});

/*
    **********************************************************
    CONFLICT OVERVIEW
    **********************************************************
*/

$('.conflict_overview--button').bind('click', function() {

    var clicked_item = $(this),
        is_selected  = clicked_item.hasClass('conflict_overview--button__selected');

    // hightlight button
    $('.conflict_overview--button').removeClass('conflict_overview--button__selected');
    if (!is_selected) {
        clicked_item.addClass('conflict_overview--button__selected');
    }

    // send command
    if (clicked_item.attr('data-command')) {
        send_command('tab=' + clicked_item.attr('data-command'));

        if (clicked_item.attr('data-command') == 'protests_start') {
            $('.conflict_overview-protests_start--section').show();
        }

    }

});

$('.conflict_overview-protests_start--section-back-button').bind('click', function() {
    $('.conflict_overview-protests_start--section').hide();
    $('.conflict_overview--button').removeClass('conflict_overview--button__selected');
});

/*
    **********************************************************
    REFUGEE EXODUS
    **********************************************************
*/


$('.refugee-exodus--image').bind('click', function() {

    var clicked_item = $(this),
        is_selected  = clicked_item.hasClass('refugee-exodus--image__selected');

    // hightlight button
    $('.refugee-exodus--image').removeClass('refugee-exodus--image__selected');
    if (!is_selected) {
        clicked_item.addClass('refugee-exodus--image__selected');
    }

    // send command
    if (clicked_item.attr('data-command')) {
        send_command('tab=' + clicked_item.attr('data-command'));

        // if (clicked_item.attr('data-command') == 'protests_start') {
        //     $('.refugee_exodus--image--section').show();
        // }

    }

});

$('.refugee-exodus--map-item').bind('click', function() {

    var clicked_item = $(this),
        is_selected  = clicked_item.hasClass('refugee-exodus--map-item__selected');

    // hightlight button
    $('.refugee-exodus--map-item').removeClass('refugee-exodus--map-item__selected');
    if (!is_selected) {
        clicked_item.addClass('refugee-exodus--map-item__selected');
    }

    // send command
    if (clicked_item.attr('data-command')) {
        send_command('tab=' + clicked_item.attr('data-command'));

        if (clicked_item.attr('data-command') == 'refugee-exodus--aleppo') {
            $('.refugee-exodus--aleppo-section').show();
        }

        if (clicked_item.attr('data-command') == 'refugee-exodus--aleppo-play-video') {
            $('.refugee-exodus--aleppo-video').show();
        }

    }

});

$('.refugee-exodus--aleppo-section-back-button').bind('click', function() {
    $('.refugee-exodus--aleppo-section').hide();
    $('.refugee-exodus--map-item').removeClass('refugee-exodus--map-item__selected');
});
