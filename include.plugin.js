(function($)
{
    $.fn.extend(
    {
        include:function(includefn)
        {
            $(this).append($('<img>',{src:'img/loading.gif'}));            
            $(this).load(includefn);
        }
    });
})(jQuery);