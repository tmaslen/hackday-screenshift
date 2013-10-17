function show_screen_shift_controls() {
    $('body').addClass('body--show-shift-controls');
}

function send_command(params) {
    $.ajax('ss://?command('+params+')');
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
    $.ajax('ss://cta');

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

    $('.control_panel--nav-item').removeClass('control_panel--nav-item__selected');
    clicked_item.addClass('control_panel--nav-item__selected');

    $('.control_panel--section').removeClass('control_panel--section__selected');
    var panel_to_select = $('.control_panel--section')[section_number];
    $(panel_to_select).addClass('control_panel--section__selected');

    send_command('tab=conflict_overview');

});

$('.conflict_overview-protests_start').bind('click', function() {
    send_command('click=protests_start');
});
