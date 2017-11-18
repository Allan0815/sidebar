(function ($) {
    $.fn.extend({
        qc_Sidebar: function (option) {
            var _init = { _width: 505, _height: $(window).height(),_title:'',_content:''};
            var param = $.extend(_init, option);
            
            if ($('.qc_sideBar').length == 0) {
                var _s = '<div class="qc_sideBar">' +
                    '<div class="model"></div>' +
                    '<div class="qc_sideBar_Contain">' +
                        '<div class="title" style="' + (param._title == undefined || param._title == '' ? 'display:none;' : '') + '">' +
                            param._title +
                        '</div>' +
                        '<div class="content">' +
                            param._content +
                        '</div>' +
                    '</div>' +
                '</div>';
                $('body').append(_s);
            }
            else {
                $('.qc_sideBar').css('display', '');
                $('.qc_sideBar .qc_sideBar_Contain .title').html(param._title);
                $('.qc_sideBar .qc_sideBar_Contain .content').html(param._content);
            }

            $('.qc_sideBar_Contain').animate({ right: '0' }, 800);
            $('.qc_sideBar').find('.model').click(function () {
                $('.qc_sideBar_Contain').animate({ right: '-' + param._width }, 500);
                setTimeout(function () { $('.qc_sideBar').remove(); }, 500);
            })
            return this;
        }
    });
}(jQuery));
