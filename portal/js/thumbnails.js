if(! ("thumbnails"in wso2_ui)) {
    wso2_ui.thumbnails = {};
}
wso2_ui.thumbnails.init = function(){
    $('#thumbnail_container').on('mouseenter','div.thumbnail',function(){
        $('.btn-group', this).show();
    }).on('mouseleave','div.thumbnail',function(){
        $('.btn-group', this).hide();
    })
};

$(document).ready(function(){
    wso2_ui.thumbnails.init();
});
