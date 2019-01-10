function getData()
{
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = writefun;
    let rawparam =
    {
        'test' : 'test1',
        'name' : 'test2'
    };
    let param = JSON.stringify(rawparam);
    //console.log(param);
    // xhttp.open("GET", "ajax.php?get="+param, true);
    // xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // xhttp.send();
    xhttp.open("POST", "ajax.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send('test=test1&name=test2');
}
function writefun()
{
    if(this.readyState == 4 && this.status == 200)
    {
        console.log(this.responseText);
    }
}