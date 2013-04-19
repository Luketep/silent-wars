window._sw.ajax = (function() {
    var _http;
    
    // private constructor
    (function () {
        _http = null;
    })();
    
    function _createAjaxObject() {
        if(window.XMLHttpRequest) {
            _http = new XMLHttpRequest();
        } else {
            _http = new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
    
    function _getAjaxObject() {
        if (_http === null) _createAjaxObject();
        return _http;
    }
    
    return {
        send : function(url, data, options) {
            options = options || {};
            data    = data    || {};
        }
    };
})();