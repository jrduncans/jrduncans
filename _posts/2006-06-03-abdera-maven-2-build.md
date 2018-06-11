---
title: Abdera Maven 2 Build
date: '2006-06-03T17:14:00.000-05:00'
author: Stephen
tags:
- programming
modified_time: '2006-06-05T17:07:11.773-05:00'
---

I attempted to make a [Maven 2](http://maven.apache.org) build for the proposed
[Abdera project](http://wiki.apache.org/incubator/AbderaProposal). I've never made a patch before, so I attempted it by checking in the
contents of the [original tar](http://www.snellspace.com/public/abdera.tar.gz) into my local-file-system SVN repository, and then made my
changes against that, and finally [generated a patch](/files/abdera-maven2-patch.txt){: .internal} using the
[Subclipse tools](http://subclipse.tigris.org/). In case that isn't good enough, I'm also providing
[the resulting tar](/files/abdera-maven2.tar.gz){: .internal}.

The most important thing to note is that when I switched it from Ant to Maven, one unit test now fails that passed before. The resulting
XML that is supposed to be checked contains some unexpected spaces. This is probably due to some dependency version difference. The
dependencies will need to be looked at and worked on; I just specified enough to get the projects to compile for the most part.

I did update the Ant build file, so that still works. The security and examples modules also build now in Maven (but I did not add them to
the Ant build). There's plenty of stuff to be improved/changed. The test module should probably go away, and the tests should be moved into
the module that is being tested. The "bin" folders should go away. The `.project` files should go away in my opinion (they are assumably
broken right now, as I didn't update them).
