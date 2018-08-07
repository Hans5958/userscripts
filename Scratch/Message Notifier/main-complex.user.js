// ==UserScript==
// @name          Scratch Message Notifier
// @copyright     Hans5958
// @license       MIT
// @namespace     https://scratch.mit.edu/users/Hans5958
// @description   Notifies every message, checks every 2 seconds
// @include       https://scratch.mit.edu/*
// @version       1.3.1
// @grant         none
// @icon          https://raw.githubusercontent.com/Hans5958/userscripts/master/Scratch/Message%20Notifier/icon.png
// @run-at        document-idle
// ==/UserScript==

// Initial things to do.
function MSGLog(log) {console.log("[MSG] " + log)}
MSGLog("Preparing...");
var originalTitle = document.title;
var originalCount = 0;
var count = 0;
var player = document.createElement('audio');
player.src = 'https://raw.githubusercontent.com/Hans5958/message-notifier/master/Message%20Notifier/notificationsound.wav';
player.preload = 'auto';
// On frontpage, Scratch doesn't fetch the account-nav.json
/*
var Scratch;
if (typeof Scratch === 'undefined') {
   var isFP = true;
} else {
   var isFP = false;
}*/

/*
var xmlHttp = new XMLHttpRequest();
xmlHttp.open('GET', 'https://scratch.mit.edu/fragment/account-nav.json, false);
xmlHttp.send(null);
var request = xmlHttp.responseText;
var Scratch.INIT_DATA = JSON.parse(request);
return parsedData.count;
*/

/*
Creating an function for getting messages count
In Scratch, this is like doing a custom block.
I will only use this on the main page.

this is a dead simple method to check the message
we literally beat world_languages lol
*/

function getCount() {
   try {
        return $('.notificationsCount').html();
    } catch(e) {
        return document.getElementsByClassName("message-count")[0].innerHTML;
    }
}

/*
    if (isFP === false) {
        if (typeof Scratch === 'undefined') {
           var isFP = true;
        } else {
           var isFP = false;
        }
    }
    if (isFP) {
        //var xmlHttp = new XMLHttpRequest();
        //xmlHttp.open('GET', 'https://scratch.mit.edu/messages/ajax/get-message-count/', false);
        //xmlHttp.send(null);
        //var request = xmlHttp.responseText;
        //var parsedData = JSON.parse(request);
        //return parsedData.msg_count;
        return $('.message-count').html(); //congratulations now no html request
    } else {
        return $('.notificationsCount').html();
    }
}
*/

// Thanks to https://github.com/MegaScratchUserscript/Mega-Scratch-Userscript/blob/master/parts/titlemessages.part.js for the script.
var ico = $('<link id="favicon" rel="icon" type="image/x-icon" href="/favicon.ico" />');
ico.appendTo(document.head);
function createIcon() {
    var canvas = document.createElement('canvas'),
        ctx,
        img = document.createElement('img');
    canvas.height = canvas.width = 32;
    ctx = canvas.getContext('2d');
    img.onload = function() {
        ctx.drawImage(this, 0, 0);
        ctx.font = 'bold 21px "helvetica", sans-serif';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 3;
        if (count > 99) {
            ctx.strokeText('99+', 0, 31);
            ctx.fillStyle = '#FFFFFF';
            ctx.fillText('99+', 0, 31);
        } else {
            ctx.strokeText(count + '', 0, 31);
            ctx.fillStyle = '#FFFFFF';
            ctx.fillText(count + '', 0, 31);
        }
        ico.attr({
            'type': 'image/png',
            'href': canvas.toDataURL('image/png')
        });
    };
    img.src = '/favicon.ico';
}

// Here's the script.
if (getCount() !== undefined) {
MSGLog("Starting...");
setInterval(function() {
    count = getCount();
        if (count == 0) {
            document.title = originalTitle;
            ico.attr({
                'type': 'image/x-icon',
                'href': '/favicon.ico'
            });
            originalCount = 0;
            } else {
            if (originalCount != count) {
                document.title = '(' + count + ') New message!';
                player.play();
                originalCount = count;
                createIcon();
            } else {
                document.title = '(' + count + ') ' + originalTitle;
            }
        }
    },
    2000);
} else {
	MSGLog("User not logged in.");
}
