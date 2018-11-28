(function () {
    console.log("Bookmarklet starting");
    let paragraph = document.getElementsByTagName('p');
    for (let i=0 ; i<paragraph.length; i++){
        paragraph[i].style['font-size'] = '150px';
    }
}) ();

