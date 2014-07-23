if(! ("form_general"in wso2_ui)) {
    wso2_ui.form_general = {};
}
wso2_ui.form_general.init = function(){
    $('#username').focus();  //Setting the focus to the username field

    jQuery.validator.addMethod("uservalid", function(value, element, params) {
        var userNotFound = true;
        wso2_ui.form_general.getUser(value).done(function(data) {
            console.info(data);
            if(data=="false"){
                userNotFound = false;
            }
        });
        return  userNotFound;
    }, jQuery.validator.format("Username is already taken."));

    $('#addUserForm').validate({
        rules:{
            username:{
                required:true,
                uservalid:true
            }
        }
    });

};
wso2_ui.form_general.getUser = function(username_in){
    var dynamicData = {};
    dynamicData["username"] = username_in;
    // Returns the jQuery ajax method
    return $.ajax({
        url: "controls/getName.jag",
        type: "get",
        async:false, //Set the async false since it wouldn't do the validation otherwise.
        data: dynamicData
    });
};

$(document).ready(function(){
    wso2_ui.form_general.init();
});
