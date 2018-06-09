---
title: EasyMock-PropertyUtils Example
date: '2006-09-17T15:26:00.001-05:00'
author: Stephen
tags:
- programming
modified_time: '2009-03-14T23:07:23.713-05:00'
---

Here's the promised example of how to use my [EasyMock-PropertyUtils ](/projects/easymock-propertyutils/index.html){: .internal} library.
It's a TestNG test class with two test methods.  The first, `testSayHelloTo()` uses the single-property matcher test.  The second,
`testSay()` uses the multiple-property matcher test by supplying a `Map` of property names to property values. If you haven't used EasyMock
before, this should also serve as an example of how EasyMock can allow you to unit test in isolation a method that interacts with another
class. Check out the [EasyMock Documentation](http://easymock.org/EasyMock2_2_Documentation.html) for more information.

{% highlight java linenos %}{% raw %}
package test;

import static com.stephenduncanjr.easymock.EasyMockPropertyUtils.propertiesEq;
import static com.stephenduncanjr.easymock.EasyMockPropertyUtils.propertyEq;
import static org.easymock.EasyMock.createMock;
import static org.easymock.EasyMock.replay;
import static org.easymock.EasyMock.verify;

import java.util.HashMap;
import java.util.Map;

import org.testng.annotations.Test;

/**
 * Test the Service class.
 */
public class ServiceTest
{
    /**
     * Test the sayHelloTo method.
     */
    @Test
    public void testSayHelloTo()
    {
        String address = "someone@example.com";
        MessagingService messagingService = createMock(MessagingService.class);
        messagingService.sendMessage(propertyEq(Message.class, "address", address));
        replay(messagingService);

        Service service = new Service();
        service.setMessagingService(messagingService);
        service.sayHelloTo(address);

        verify(messagingService);
    }

    /**
     * Test the say method.
     */
    @Test
    public void testSay()
    {
        String address = "someone@example.com";
        String text = "some text";

        Map<String, Object> properties = new HashMap<String, Object>();
        properties.put("address", address);
        properties.put("message", text);

        MessagingService messagingService = createMock(MessagingService.class);
        messagingService.sendMessage(propertiesEq(Message.class, properties));
        replay(messagingService);

        Service service = new Service();
        service.setMessagingService(messagingService);
        service.say(address, text);

        verify(messagingService);
    }
}
{% endraw %}{% endhighlight %}
