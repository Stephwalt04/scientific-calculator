function del() {
    var x= document.getElementById('screen').value;
    document.getElementById('screen').value = x.substr(0, x.length - 1);
}