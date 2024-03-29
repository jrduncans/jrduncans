---
title: JQuery For Archives
date: '2009-03-15T20:47:00.002-05:00'
author: Stephen
tags:
- meta
- programming
- web
modified_time: '2009-03-15T21:01:20.578-05:00'
---

Instead of working on the conversion of the blog to [Webby](http://webby.rubyforge.org/), I spent much of the day playing with
[jQuery](http://jquery.com/) and JavaScript.  A good portion was mostly wasted time attempting to make the loading of the
syntax-highlighting scripts more dynamic.  While this ultimately failed, it did get me to re-learn a lot of JavaScript and jQuery.

Rather than put that time completely to waste, I decided to prettify the archives section.  Without JavaScript enabled, you get a linked
list of links for each month of each year that I've published something.  Now, with JavaScript, I transform that list of links into
drop-downs for each year, where you can select the month within the year, and it will take you to the archive page for that month.

Now, for the code.  First, on each blog page (via the template), I load my JavaScript file, and I load jQuery via
[Google AJAX Libraries API](http://code.google.com/apis/ajaxlibs/):
{% highlight html linenos %}{% raw %}
<script type="text/javascript" src="/js/main.js"></script>
<script type="text/javascript" src="http://www.google.com/jsapi"></script>
<script type="text/javascript">
    google.load('jquery', '1.3.2');

    google.setOnLoadCallback(function() {
            prettify_archives();
    });
</script>
{% endraw %}{% endhighlight %}
This runs `prettify_archives` function:
{% highlight javascript linenos %}{% raw %}
function prettify_archives() {
    var years = [];

    $("#archives > ul > li").each(function() {
        var year = new RegExp(/\s(\d{4})/).exec($(this).text())[1];

        if ($.inArray(year, years) == -1) {
            years.push(year);
        }
    });

    years.reverse();

    var html = ['<h4 style="margin:0;">Archives</h4>'];

    $(years).each(function() {
        html.push('<select style="width: 11em;" ' +
            'onchange="document.location.href=this.options[this.selectedIndex].value;">');
        html.push('<option selected="selected">' + this + '</option>');
        $("#archives > ul > li:contains('" + this + "') > a").each(function() {
            html.push('<option value="' +
                $(this).attr('href')
                + '">'
                + $(this).text()
                + '</option>');
        });

        html.push('</select><br />');
    });

    $('#archives > ul').replaceWith(html.join("\n"));
}
{% endraw %}{% endhighlight %}
