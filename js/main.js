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
