<h1>Lecture - 1</h1>

→img tag is used to add image to the webpage.
● src attribute is for image address.
● alt attribute is for alternate text for the image.
```
<img src="https://unsplash.com/photos/A6JxK37IlPo" alt="iphone" height="100px">
```

● Gifs can be added using img tag.

● Video tag is also there
```
<video src=""></video>
```

▶ Lists

● Unordered List
```
<ul type="square">Moives
        <li>Dhol</li>
        <li>Tare Zameen Par</li>
        <li>Welcome</li>
        <li>OMG</li>
</ul>
```

» We can change bullet types to 
&nbsp;&nbsp;&nbsp;&nbsp; – square
&nbsp;&nbsp;&nbsp;&nbsp; – circle
&nbsp;&nbsp;&nbsp;&nbsp; – disc


● Ordered List
```
<ol type="i" start="4">Moives
        <li>Dhol</li>
        <li>Tare Zameen Par</li>
        <li>Welcome</li>
        <li>OMG</li>
    </ol>
```

» Bullet Types present in ordered list are :-
&nbsp;&nbsp;&nbsp;&nbsp; – 1.
&nbsp;&nbsp;&nbsp;&nbsp; – I.
&nbsp;&nbsp;&nbsp;&nbsp; – i.
&nbsp;&nbsp;&nbsp;&nbsp; – A.
&nbsp;&nbsp;&nbsp;&nbsp; – a.

▶ Table

● Basic Structure

```
<table>
    <thead>
        <tr>
            <th> </th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td></td>
        </tr>
    </tbody>

    <tfoot></tfoot>
</table>
```
● Samlpe Table

<table border="2px" cellpadding="20px" cellspacing="10px">
    <thead>
        <tr>
            <th>Col-1</th>
            <th>Col-2</th>
            <th>Col-3</th>
            <th>Col-4</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>Dhol</td>
            <td>ABCD</td>
            <td>Carry on Jatta</td>
            <td>Carry on Jatta - 2</td>
        </tr>

        <tr>
            <td>Dhol</td>
            <td>ABCD</td>
            <td>Carry on Jatta</td>
            <td>Carry on Jatta - 2</td>
        </tr>

        <tr>
            <td>Dhol</td>
            <td>ABCD</td>
            <td>Carry on Jatta</td>
        </tr>
    </tbody>
</table>

» tfoot is optional

<strong>» Cellpadding</strong> :- distance of text from its border

<strong>» Cellspacing</strong> :- distance between two cells it is also called <u>Gutter</u>

<strong>» Colspan</strong> :- merge cells along columns

<strong>» Rowspan</strong> :- merge cells along rows