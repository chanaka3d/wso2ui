//Constraints
var WSO2_UI_MAIN_LEFTMENU = "WSO2_UI_MAIN_LEFTMENU";
var WSO2_UI_FIXED_CONTAINER = "WSO2_UI_FIXED_CONTAINER";
if( !('wso2_ui' in window) ) window['wso2_ui'] = {}; //see the object wso2_ui exists and create it if not.

//methods for right side pane
wso2_ui.rightPanel = {};
wso2_ui.rightPanel.setRightSize = function(){
    $('.scrollable').height($(document).height() - 160 - parseInt($('.scrollable').position().top));
};
wso2_ui.rightPanel.init = function(){
    $(window).resize(function(){
        wso2_ui.rightPanel.setRightSize();
    });
    wso2_ui.rightPanel.setRightSize();

    $('#wso2-right-panel-btn').click(function(){
        $(this).toggleClass("open");
        $('#wso2-right-panel-box').toggleClass("open");
    });
    $(window).resize(function(){
        wso2_ui.rightPanel.setRightSize();
    });
    wso2_ui.rightPanel.setRightSize();
};
wso2_ui.leftmenu = {};
wso2_ui.leftmenu.init = function(){
    $('#leftmenu-collapse').click(function(){
        var $obj = $('i',this);
        var $leftmenu =  $('#leftmenu');

        if($obj.hasClass("fa-chevron-left")){                                      //Minified state
            $obj.removeClass("fa-chevron-left").addClass("fa-chevron-right");
            $leftmenu.addClass("menu-min");
            amplify.store(WSO2_UI_MAIN_LEFTMENU,"minified");
        }else{                                                                          //Big state
            $obj.removeClass("fa-chevron-right").addClass("fa-chevron-left");
            $leftmenu.removeClass("menu-min");
            amplify.store(WSO2_UI_MAIN_LEFTMENU,"");

        }
    });

    $('#leftmenu .dropdown-toggle').click(function(){
        var $target = $(this);
        var $submenu = $('> .submenu',$target.parent());
        if(! $target.parent().hasClass("open")){
            $target.parent().addClass("open");
            $submenu.removeClass('nav-show').addClass('nav-hide').slideToggle('fast');
        }else{
            $target.parent().removeClass("open");
            $submenu.removeClass('nav-hide').addClass('nav-show').slideToggle('fast');
        }
    });


    var $obj = $('#leftmenu-collapse i');
    var $leftmenu =  $('#leftmenu');

    if(amplify.store(WSO2_UI_MAIN_LEFTMENU) == "minified" && $obj.hasClass("fa-chevron-left")){                                      //Minified state
        $obj.removeClass("fa-chevron-left").addClass("fa-chevron-right");
        $leftmenu.addClass("menu-min");

    }else if($obj.hasClass("fa-chevron-right")){
        $obj.removeClass("fa-chevron-right").addClass("fa-chevron-left");
        $leftmenu.removeClass("menu-min");
    }
};
wso2_ui.settings_box = {};
wso2_ui.settings_box.init = function(){
    $('#wso2-ui-main-settings').on("click","input, label", function(e){
        var $checkBox = $(this);
        if($checkBox.prop("checked")){
            wso2_ui.settings_box.toggleFixedSize('fixed');
        }else{
            wso2_ui.settings_box.toggleFixedSize('');
        }
        e.stopPropagation();
    });

    if(amplify.store(WSO2_UI_FIXED_CONTAINER) == "fixed"){
        $('#main-container').addClass("container");
        $('#navbar-container').addClass("container");
    }else{
        $('#main-container').removeClass("container");
        $('#navbar-container').removeClass("container");
    }


};
wso2_ui.settings_box.toggleFixedSize = function(state){
    if(state == "fixed"){
        $('#main-container').addClass("container");
        $('#navbar-container').addClass("container");
        amplify.store(WSO2_UI_FIXED_CONTAINER,"fixed");
    }else{
        $('#main-container').removeClass("container");
        $('#navbar-container').removeClass("container");
        amplify.store(WSO2_UI_FIXED_CONTAINER,"");
    }
};