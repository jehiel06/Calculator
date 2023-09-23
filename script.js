function disp(value)
{
    document.getElementById("res").value+=value;
}
function Clear()
{
    document.getElementById("res").value="";
}
function del()
{
    const d=document.getElementById("res").value;
    let r=d.slice(0,-1);
    document.getElementById("res").value=r;
}
function Calc()
{
    const a=document.getElementById("res").value;
    b=eval(a.replaceAll(',',''));
    document.getElementById("res").value=b;
}
