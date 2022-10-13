function Space(props)
{
    let n = props.n;
    if(!n)
        n = 1;
    let a = '';
    for(let i = 0; i < n; ++i)
        a += '\u00A0';
    return a;
}

export default Space;