/**
 * Created with JetBrains PhpStorm.
 * User: KESSILER
 * Date: 07/04/13
 * Time: 03:38
 * To change this template use File | Settings | File Templates.
 */


var Framework = {
        request: function(form, method) {
            if(method == 'POST') {
                var obj = $(form).serializeArray();
                alert(obj);

            }
        }
}