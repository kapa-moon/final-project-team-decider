function Memcpy(input)
{
    let copy = document.getElementById(input);
    copy.select();
    navigator.clipboard.writeText(copy.value);
    alert('Link copied: ' + copy.value);
}

export default Memcpy;