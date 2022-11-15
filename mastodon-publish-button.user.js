// ==UserScript==
// @name         Mastodon - Publish-button
// @namespace    https://github.com/phpmacher/mastodon-publish-button/
// @downloadURL  https://github.com/phpmacher/mastodon-publish-button/mastodon-publish-button.user.js
// @updateURL    https://github.com/phpmacher/mastodon-publish-button/mastodon-publish-button.user.js
// @version      0.1
// @description  rename publish button back to trööt (or toot or to whatever)
// @author       @phpmacher@sueden.social
// @match        https://sueden.social/*
// @match        https://chaos.social/*
// @match        https://mastodon.social/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener('load', function() {

        // Edit this variable to change the text of the publish-button
        var buttonText = 'Tröt!';

        document.querySelector(".compose-form__publish-button-wrapper .button.button--block").innerHTML = buttonText;
    }, false);

})();