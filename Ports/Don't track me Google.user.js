// ==UserScript==
// @name           	Don't track me Google.user.js
// @namespace      	Rob W
// @author			Rob W (ported by Hans5958)
// @description    	Removes the annoying link-conversion at Google Search/maps/... The Referrer is also hidden to improve your privacy. Designed for Firefox and Google Chrome. (Deprecated)
// @version        	4.21
// @match    		*://*.google.com/*
// @match    		*://*.google.ad/*
// @match    		*://*.google.ae/*
// @match    		*://*.google.com.af/*
// @match    		*://*.google.com.ag/*
// @match    		*://*.google.com.ai/*
// @match    		*://*.google.am/*
// @match    		*://*.google.co.ao/*
// @match    		*://*.google.com.ar/*
// @match    		*://*.google.as/*
// @match    		*://*.google.at/*
// @match    		*://*.google.com.au/*
// @match    		*://*.google.az/*
// @match    		*://*.google.ba/*
// @match    		*://*.google.com.bd/*
// @match    		*://*.google.be/*
// @match    		*://*.google.bf/*
// @match    		*://*.google.bg/*
// @match    		*://*.google.com.bh/*
// @match    		*://*.google.bi/*
// @match    		*://*.google.bj/*
// @match    		*://*.google.com.bn/*
// @match    		*://*.google.com.bo/*
// @match    		*://*.google.com.br/*
// @match    		*://*.google.bs/*
// @match    		*://*.google.co.bw/*
// @match    		*://*.google.by/*
// @match    		*://*.google.com.bz/*
// @match    		*://*.google.ca/*
// @match    		*://*.google.cd/*
// @match    		*://*.google.cf/*
// @match    		*://*.google.cg/*
// @match    		*://*.google.ch/*
// @match    		*://*.google.ci/*
// @match    		*://*.google.co.ck/*
// @match    		*://*.google.cl/*
// @match    		*://*.google.cm/*
// @match    		*://*.google.cn/*
// @match    		*://*.google.com.co/*
// @match    		*://*.google.co.cr/*
// @match    		*://*.google.com.cu/*
// @match    		*://*.google.cv/*
// @match    		*://*.google.com.cy/*
// @match    		*://*.google.cz/*
// @match    		*://*.google.de/*
// @match    		*://*.google.dj/*
// @match    		*://*.google.dk/*
// @match    		*://*.google.dm/*
// @match    		*://*.google.com.do/*
// @match    		*://*.google.dz/*
// @match    		*://*.google.com.ec/*
// @match    		*://*.google.ee/*
// @match    		*://*.google.com.eg/*
// @match    		*://*.google.es/*
// @match    		*://*.google.com.et/*
// @match    		*://*.google.fi/*
// @match    		*://*.google.com.fj/*
// @match    		*://*.google.fm/*
// @match    		*://*.google.fr/*
// @match    		*://*.google.ga/*
// @match    		*://*.google.ge/*
// @match    		*://*.google.gg/*
// @match    		*://*.google.com.gh/*
// @match    		*://*.google.com.gi/*
// @match    		*://*.google.gl/*
// @match    		*://*.google.gm/*
// @match    		*://*.google.gp/*
// @match    		*://*.google.gr/*
// @match    		*://*.google.com.gt/*
// @match    		*://*.google.gy/*
// @match    		*://*.google.com.hk/*
// @match    		*://*.google.hn/*
// @match    		*://*.google.hr/*
// @match    		*://*.google.ht/*
// @match    		*://*.google.hu/*
// @match    		*://*.google.co.id/*
// @match    		*://*.google.ie/*
// @match    		*://*.google.co.il/*
// @match    		*://*.google.im/*
// @match    		*://*.google.co.in/*
// @match    		*://*.google.iq/*
// @match    		*://*.google.is/*
// @match    		*://*.google.it/*
// @match    		*://*.google.je/*
// @match    		*://*.google.com.jm/*
// @match    		*://*.google.jo/*
// @match    		*://*.google.co.jp/*
// @match    		*://*.google.co.ke/*
// @match    		*://*.google.com.kh/*
// @match    		*://*.google.ki/*
// @match    		*://*.google.kg/*
// @match    		*://*.google.co.kr/*
// @match    		*://*.google.com.kw/*
// @match    		*://*.google.kz/*
// @match    		*://*.google.la/*
// @match    		*://*.google.com.lb/*
// @match    		*://*.google.li/*
// @match    		*://*.google.lk/*
// @match    		*://*.google.co.ls/*
// @match    		*://*.google.lt/*
// @match    		*://*.google.lu/*
// @match    		*://*.google.lv/*
// @match    		*://*.google.com.ly/*
// @match    		*://*.google.co.ma/*
// @match    		*://*.google.md/*
// @match    		*://*.google.me/*
// @match    		*://*.google.mg/*
// @match    		*://*.google.mk/*
// @match    		*://*.google.ml/*
// @match    		*://*.google.mn/*
// @match    		*://*.google.ms/*
// @match    		*://*.google.com.mt/*
// @match    		*://*.google.mu/*
// @match    		*://*.google.mv/*
// @match    		*://*.google.mw/*
// @match    		*://*.google.com.mx/*
// @match    		*://*.google.com.my/*
// @match    		*://*.google.co.mz/*
// @match    		*://*.google.com.na/*
// @match    		*://*.google.com.nf/*
// @match    		*://*.google.com.ng/*
// @match    		*://*.google.com.ni/*
// @match    		*://*.google.ne/*
// @match    		*://*.google.nl/*
// @match    		*://*.google.no/*
// @match    		*://*.google.com.np/*
// @match    		*://*.google.nr/*
// @match    		*://*.google.nu/*
// @match    		*://*.google.co.nz/*
// @match    		*://*.google.com.om/*
// @match    		*://*.google.com.pa/*
// @match    		*://*.google.com.pe/*
// @match    		*://*.google.com.ph/*
// @match    		*://*.google.com.pk/*
// @match    		*://*.google.pl/*
// @match    		*://*.google.pn/*
// @match    		*://*.google.com.pr/*
// @match    		*://*.google.ps/*
// @match    		*://*.google.pt/*
// @match    		*://*.google.com.py/*
// @match    		*://*.google.com.qa/*
// @match    		*://*.google.ro/*
// @match    		*://*.google.ru/*
// @match    		*://*.google.rw/*
// @match    		*://*.google.com.sa/*
// @match    		*://*.google.com.sb/*
// @match    		*://*.google.sc/*
// @match    		*://*.google.se/*
// @match    		*://*.google.com.sg/*
// @match    		*://*.google.sh/*
// @match    		*://*.google.si/*
// @match    		*://*.google.sk/*
// @match    		*://*.google.com.sl/*
// @match    		*://*.google.sn/*
// @match    		*://*.google.so/*
// @match    		*://*.google.sm/*
// @match    		*://*.google.st/*
// @match    		*://*.google.com.sv/*
// @match    		*://*.google.td/*
// @match    		*://*.google.tg/*
// @match    		*://*.google.co.th/*
// @match    		*://*.google.com.tj/*
// @match    		*://*.google.tk/*
// @match    		*://*.google.tl/*
// @match    		*://*.google.tm/*
// @match    		*://*.google.tn/*
// @match    		*://*.google.to/*
// @match    		*://*.google.com.tr/*
// @match    		*://*.google.tt/*
// @match    		*://*.google.com.tw/*
// @match    		*://*.google.co.tz/*
// @match    		*://*.google.com.ua/*
// @match    		*://*.google.co.ug/*
// @match    		*://*.google.co.uk/*
// @match    		*://*.google.com.uy/*
// @match    		*://*.google.co.uz/*
// @match    		*://*.google.com.vc/*
// @match    		*://*.google.co.ve/*
// @match    		*://*.google.vg/*
// @match    		*://*.google.co.vi/*
// @match    		*://*.google.com.vn/*
// @match    		*://*.google.vu/*
// @match    		*://*.google.ws/*
// @match    		*://*.google.rs/*
// @match    		*://*.google.co.za/*
// @match    		*://*.google.co.zm/*
// @match    		*://*.google.co.zw/*
// @match    		*://*.google.cat/*
// @grant    		GM_getValue
// ==/UserScript==

setupAggresiveUglyLinkPreventer();
blockTrackingBeacons();

var forceNoReferrer = true;

function getReferrerPolicy() {
    return forceNoReferrer ? 'origin' : '';
}

function handlePointerPress(e) {
    var a = e.target;
    while (a && !a.href) {
        a = a.parentElement;
    }
    if (!a) {
        return;
    }
    var inlineMousedown = a.getAttribute('onmousedown');
    // return rwt(....); // E.g Google search results.
    // return google.rwt(...); // E.g. sponsored search results
    // return google.arwt(this); // E.g. sponsored search results (dec 2016).
    if (inlineMousedown && /\ba?rwt\(/.test(inlineMousedown)) {
        a.removeAttribute('onmousedown');
        // Just in case:
        a.removeAttribute('ping');
        // In Chrome, removing onmousedown during event dispatch does not
        // prevent the inline listener from running... So we have to cancel
        // event propagation just in case.
        e.stopImmediatePropagation();
    }
    var realLink = getRealLinkFromGoogleUrl(a);
    if (realLink) {
        a.href = realLink;
    }
    a.referrerPolicy = getReferrerPolicy();
}

// This is specifically designed for catching clicks in Gmail.
// Gmail binds a click handler to a <div> and cancels the event after opening
// a window with an ugly URL. It uses a blank window + meta refresh in Firefox,
// which is too crazy to patch. So we just make sure that the browser's default
// click handler is activated (=open link in new tab).
// The entry point for this crazy stuff is shown in my comment at
// https://github.com/Rob--W/dont-track-me-google/issues/2
function handleClick(e) {
    if (e.button !== 0) {
        return;
    }
    var a = e.target;
    while (a && !a.href) {
        a = a.parentElement;
    }
    if (!a) {
        handleClickNonStandardLink(e);
        return;
    }
    if (a.dataset && a.dataset.url) {
        var realLink = getSanitizedIntentUrl(a.dataset.url);
        if (realLink) {
            a.dataset.url = realLink;
        }
    }
    if (!location.hostname.startsWith('mail.')) {
        // This hack was designed for Gmail, but broke other Google sites:
        // - https://github.com/Rob--W/dont-track-me-google/issues/6
        // - https://github.com/Rob--W/dont-track-me-google/issues/19
        // So let's disable it for every domain except Gmail.
        return;
    }
    // TODO: Consider using a.baseURI instead of location in case Gmail ever
    // starts using <base href>?
    if (a.origin === location.origin && a.pathname === location.pathname) {
        // Same URL except for query string and/or reference fragment.
        // E.g. an in-page navigation at Google Docs (#...)
        // or an attachment at Gmail (?ui=2&...)
        return;
    }
    if (a.protocol !== 'http:' &&
        a.protocol !== 'https:' &&
        a.protocol !== 'ftp:') {
        // Be conservative and don't block too much. E.g. Gmail has special
        // handling for mailto:-URLs, and using stopPropagation now would
        // cause mailto:-links to be opened by the platform's default mailto
        // handler instead of Gmail's handler (=open in new window).
        return;
    }
    if (a.target === '_blank') {
        e.stopPropagation();
        a.referrerPolicy = getReferrerPolicy();
    }
}

// Google Calendar sometimes uses `<div role="link" href=...>` instead of `<a>`.
// Their custom JavaScript code detects clicks on such elements and then call
// `window.open` with its "href" attribute as destination.
function handleClickNonStandardLink(e) {
    var a = e.target.closest('[role="link"][href]');
    var href = a && a.getAttribute('href');
    if (!href) {
        return;
    }
    var referrerPolicy = getReferrerPolicy();
    if (referrerPolicy) {
        // Temporarily override the referrer policy.
        var meta = document.createElement('meta');
        meta.name = 'referrer';
        meta.content = referrerPolicy;
        document.head.appendChild(meta);

        // Give the 'click' handler a chance to process the event
        // (and call `window.open`) before removing the element.
        setTimeout(function() {
            meta.remove();
        }, 50);
    }
    var realLink = getRealLinkFromGoogleUrl(newURL(href));
    if (realLink) {
        a.setAttribute('href', realLink);
    }
}

/**
 * @param {URL|HTMLHyperlinkElementUtils} a
 * @returns {String} the real URL if the given link is a Google redirect URL.
 */
function getRealLinkFromGoogleUrl(a) {
    if (a.protocol !== 'https:' && a.protocol !== 'http:') {
        return;
    }
    if ((a.hostname === location.hostname || a.hostname === 'www.google.com') &&
        (a.pathname === '/url' || a.pathname === '/local_url' ||
         a.pathname === '/searchurl/rr.html')) {
        // Google Maps / Dito (/local_url?q=<url>)
        // Mobile (/url?q=<url>)
        var url = /[?&](?:q|url)=((?:https?|ftp)[%:][^&]+)/.exec(a.search);
        if (url) {
            return decodeURIComponent(url[1]);
        }
        // Help pages, e.g. safe browsing (/url?...&q=%2Fsupport%2Fanswer...)
        url = /[?&](?:q|url)=((?:%2[Ff]|\/)[^&]+)/.exec(a.search);
        if (url) {
            return a.origin + decodeURIComponent(url[1]);
        }
        // Redirect pages for Android intents (/searchurl/rr.html#...&url=...)
        // rr.html only supports http(s). So restrict to http(s) only.
        url = /[#&]url=(https?[:%][^&]+)/.exec(a.hash);
        if (url) {
            return decodeURIComponent(url[1]);
        }
    }
}

/**
 * @param {string} intentUrl
 * @returns {string|undefined} The sanitized intent:-URL if it was an intent URL
 *   with embedded tracking link.
 */
function getSanitizedIntentUrl(intentUrl) {
    if (!intentUrl.startsWith('intent:')) {
        return;
    }
    // https://developer.chrome.com/multidevice/android/intents#syntax
    var BROWSER_FALLBACK_URL = ';S.browser_fallback_url=';
    var indexStart = intentUrl.indexOf(BROWSER_FALLBACK_URL);
    if (indexStart === -1) {
        return;
    }
    indexStart += BROWSER_FALLBACK_URL.length;
    var indexEnd = intentUrl.indexOf(';', indexStart);
    indexEnd = indexEnd === -1 ? intentUrl.length : indexEnd;

    var url = decodeURIComponent(intentUrl.substring(indexStart, indexEnd));
    var realUrl = getRealLinkFromGoogleUrl(newURL(url));
    if (!realUrl) {
        return;
    }
    return intentUrl.substring(0, indexStart) +
        encodeURIComponent(realUrl) +
        intentUrl.substring(indexEnd);
}

/**
 * Intercept the .href setter in the page so that the page can never change the
 * URL to a tracking URL. Just intercepting mousedown/touchstart is not enough
 * because e.g. on Google Maps, the page rewrites the URL in the contextmenu
 * event at the bubbling event stage and then stops the event propagation. So
 * there is no event-driven way to fix the URL. The DOMAttrModified event could
 * be used, but the event is deprecated, so not a viable long-term solution.
 */
function setupAggresiveUglyLinkPreventer() {
    // This content script runs as document_start, so we can have some assurance
    // that the methods in the page are reliable.
    var s = document.createElement('script');
    s.textContent = '(' + function(getRealLinkFromGoogleUrl) {
        var proto = HTMLAnchorElement.prototype;
        // The link target can be changed in many ways, but let's only consider
        // the .href attribute since it's probably the only used setter.
        var hrefProp = Object.getOwnPropertyDescriptor(proto, 'href');
        var hrefGet = Function.prototype.call.bind(hrefProp.get);
        var hrefSet = Function.prototype.call.bind(hrefProp.set);

        Object.defineProperty(proto, 'href', {
            configurable: true,
            enumerable: true,
            get() {
                return hrefGet(this);
            },
            set(v) {
                hrefSet(this, v);
                try {
                    v = getRealLinkFromGoogleUrl(this);
                    if (v) {
                        hrefSet(this, v);
                    }
                } catch (e) {
                    // Not expected to happen, but don't break the setter if for
                    // some reason the (hostile) page broke the link APIs.
                }
                updateReferrerPolicy(this);
            },
        });
        var setAttribute = Function.prototype.call.bind(proto.setAttribute);
        proto.setAttribute = function(name, value) {
            // Attribute names are not case-sensitive, but weird capitalizations
            // are unlikely, so only check all-lowercase and all-uppercase.
            if (name === 'href' || name === 'HREF') {
                this.href = value;
            } else {
                setAttribute(this, name, value);
            }
        };

        var aDispatchEvent = Function.prototype.apply.bind(proto.dispatchEvent);
        proto.dispatchEvent = function() {
            updateReferrerPolicy(this);
            return aDispatchEvent(this, arguments);
        };

        var aClick = Function.prototype.apply.bind(proto.click);
        proto.click = function() {
            updateReferrerPolicy(this);
            return aClick(this, arguments);
        };

        var CustomEvent = window.CustomEvent;
        var currentScript = document.currentScript;
        var dispatchEvent = currentScript.dispatchEvent.bind(currentScript);
        var getScriptAttribute = currentScript.getAttribute.bind(currentScript);

        function updateReferrerPolicy(a) {
            try {
                dispatchEvent(new CustomEvent('dtmg-get-referrer-policy'));
                var referrerPolicy = getScriptAttribute('referrerPolicy');
                if (typeof referrerPolicy === 'string' && referrerPolicy) {
                    setAttribute(a, 'referrerPolicy', referrerPolicy);
                }
            } catch (e) {
                // Not expected to happen, but don't break callers if it happens
                // anyway.
            }
        }
        currentScript.dataset.jsEnabled = 1;
    } + ')(' + getRealLinkFromGoogleUrl + ');';
    s.addEventListener('dtmg-get-referrer-policy', function(event) {
        s.setAttribute('referrerPolicy', getReferrerPolicy());
    });
    (document.head || document.documentElement).appendChild(s);
    s.remove();
    if (!s.dataset.jsEnabled) {
        cleanLinksWhenJsIsDisabled();
    }
}

// Block sendBeacon requests with destination /gen_204, because Google
// asynchronously sends beacon requests in response to mouse events on links:
// https://github.com/Rob--W/dont-track-me-google/issues/20
//
// This implementation also blocks other forms of tracking via gen_204 as a side
// effect. That is not fully intentional, but given the lack of obvious ways to
// discern such link-tracking events from others, I will block all of them.
function blockTrackingBeacons() {
    var s = document.createElement('script');
    s.textContent = '(' + function() {
        var navProto = window.Navigator.prototype;
        var navProtoSendBeacon = navProto.sendBeacon;
        if (!navProtoSendBeacon) {
            return;
        }
        var sendBeacon = Function.prototype.apply.bind(navProtoSendBeacon);

        // Blocks the following:
        //   gen_204
        //   /gen_204
        //   https://www.google.com/gen_204
        var isTrackingUrl = RegExp.prototype.test.bind(
            /^(?:(?:https?:\/\/[^\/]+)?\/)?gen_204(?:[?#]|$)/);

        navProto.sendBeacon = function(url, data) {
            if (isTrackingUrl(url)) {
                // Lie that the data has been transmitted to avoid fallbacks.
                return true;
            }
            return sendBeacon(this, arguments);
        };
    } + ')();';
    (document.head || document.documentElement).appendChild(s);
    s.remove();
}

function cleanLinksWhenJsIsDisabled() {
    // When JavaScript is disabled, Google sets the "href" attribute's value to
    // an ugly URL. Although the link is rewritten on click, we still need to
    // rewrite the link even earlier because otherwise the ugly URL is shown in
    // the tooltip upon hover.

    // When JS is disabled, the links won't change after the document finishes
    // loading. Until the DOM has finished loading, use the mouseover event to
    // beautify links (the DOMContentLoaded may be delayed on slow networks).
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('DOMContentLoaded', function() {
        document.removeEventListener('mouseover', handleMouseOver);
        var as = document.querySelectorAll('a[href]');
        for (var i = 0; i < as.length; ++i) {
            var href = getRealLinkFromGoogleUrl(as[i]);
            if (href) {
                as[i].href = href;
            }
        }
    }, {once: true});

    function handleMouseOver(e) {
        var a = e.target;
        var href = a.href && getRealLinkFromGoogleUrl(a);
        if (href) {
            a.href = href;
        }
    }
}

function newURL(href) {
    try {
        return new URL(href);
    } catch (e) {
        var a = document.createElement('a');
        a.href = href;
        return a;
    }
}