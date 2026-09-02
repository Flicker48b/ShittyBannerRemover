(function () {
    'use strict';

    function hideBanner() {
        document.querySelectorAll('.rui-login-html-1').forEach(element => {
            element.style.display = 'none';
        });
    }
    hideBanner();
    new MutationObserver(hideBanner).observe(document.documentElement, {
        childList: true,
        subtree: true
    });
})();