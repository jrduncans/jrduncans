---
title: Turntable Bookmarklets
date: '2012-06-26T13:47:00.001-05:00'
author: Stephen
modified_time: '2012-08-17T08:52:43.392-05:00'
---

I've created two turntable bookmarklets to help you pick random songs from your playlist (**Note**: these have now been updated to match the
new Turntable UI 2012AUG17, and can only select from the top 300 songs in your queue):

[pick a random song](javascript:(function(){$('#queue .song').eq(Math.floor(Math.random() * $('#queue .song').length)).find('.goTop').click();})())

[pick a random song from the top 'x'](javascript:(function(){var size = parseInt(window.prompt('Pick from how many songs from the top?', $('#queue .song').length)); $('#queue .song').eq(Math.floor(Math.random() * size)).find('.goTop').click();})())

[How to install a bookmarklet](http://blog.qoiob.com/post/721510709/bookmarklet) for those who aren't familiar with them.
