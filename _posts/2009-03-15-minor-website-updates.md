---
title: Minor Website Updates
date: '2009-03-15T09:18:00.003-05:00'
author: Stephen
tags:
- meta
- programming
- web
modified_time: '2009-03-15T09:32:53.152-05:00'
---

So, I stayed up *way* too late last night uploading version after version of this website.  I updated the version of the
[syntax-highlighter](http://alexgorbatchev.com/wiki/SyntaxHighlighter) I used on the one code sample I've posted. Nothing special
there, but the fall-back when Javascript isn't enabled is nicer, as it's a pre-tag, instead of a text-area like before.

I fixed all the pages to have the extension .html instead of .shtml. The .shtml was leftover from when I used to use server-side-includes
instead of a combination of [Blogger](http://www.blogger.com) templates & [Webby](http://webby.rubyforge.org/) layouts to handle common
layout issues. Here's the content of the .htaccess file I used to make sure old links are given a permanent (301) redirect to the new
extension:
{% highlight apache linenos %}
RewriteEngine On
RewriteBase /
RewriteRule ^(.*)\.shtml$ /$1.html [R=301,L]
{% endhighlight %}

During the process, I noticed that Blogger wasn't producing an archive index page anymore.  So I added archives to the sidebar for each
blog.  I made my css rules a bit more generic by making sidebar sections a class, instead of duplicating rules for different ids.

All of this took a bit longer than it should because any changes on the Blogger side required republishing the whole site (actually twice,
once for the main blog, once for the politics blog). Whereas, for the non-blog content, I could run Webby locally, rsync it to my
VirtualBox Ubuntu Server VM, and test it locally. So my next task is to figure out how to turn an export of this blog into Webby source
files so that I can manage the whole process locally (and get my blog posts into version control as a bonus).
