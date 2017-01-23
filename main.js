var WIDTH=500,
    preheader="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n",
    header="<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\""+WIDTH+"px\" height=\""+WIDTH+"px\" viewBox=\"0 0 "+WIDTH+" "+WIDTH+"\" enable-background=\"new 0 0 "+WIDTH+" "+WIDTH+"\" xml:space=\"preserve\">\n",
    footer="</svg>",
    REP=Math.floor(Math.random()*4)+2,
    colored=false,
    color="ffffff",
    d1=[],
    d2=[],
    d3=[],
    d4=[],
    RAD=WIDTH/2,
    container=document.getElementById("container"),
    mandala="";

function generate(){
    mandala=header;
    for(i=0; i<REP; ++i)
    {
	d1[i]=Math.random()*RAD;
	d2[i]=Math.random()*RAD;
	d3[i]=Math.random()*RAD;
	d4[i]=Math.random()*RAD;
    }

    d1.sort().reverse();
    d4.sort().reverse();

    for(i=0; i<REP; ++i)
    {
	var curang=0,
	    ang=Math.PI/(1<<(Math.floor(Math.random()*3)+2));
	if(colored)
	{
	    color=Math.floor(Math.random()*16777216).toString(16);
	}
	while(curang<2*Math.PI)
	{
	    mandala+=("<path d=\"M "+(RAD+d1[i]*Math.cos(curang))+","+(RAD+d1[i]*Math.sin(curang))+" C "+(RAD+d2[i]*Math.cos(curang))+","+(RAD+d2[i]*Math.sin(curang))+" "+(RAD+d3[i]*Math.cos(curang+ang))+","+(RAD+d3[i]*Math.sin(curang+ang))+" "+(RAD+d4[i]*Math.cos(curang+ang))+" "+(RAD+d4[i]*Math.sin(curang+ang))+" Z\" stroke=\"black\" fill=\"#"+color+"\" stroke-width=\"2\" />\n");
	    curang+=ang;
	    mandala+=("<path d=\"M "+(RAD+d1[i]*Math.cos(curang+ang))+","+(RAD+d1[i]*Math.sin(curang+ang))+" C "+(RAD+d2[i]*Math.cos(curang+ang))+","+(RAD+d2[i]*Math.sin(curang+ang))+" "+(RAD+d3[i]*Math.cos(curang))+","+(RAD+d3[i]*Math.sin(curang))+" "+(RAD+d4[i]*Math.cos(curang))+" "+(RAD+d4[i]*Math.sin(curang))+" Z\" stroke=\"black\" fill=\"#"+color+"\" stroke-width=\"2\" />\n");
	    curang+=ang;
	}
    }

    REP=Math.floor(Math.random()*3)+1;

    for(i=0; i<REP; ++i)
    {
	d1[i]=Math.random()*RAD;
	d2[i]=Math.random()*RAD;
	d3[i]=Math.random()*RAD;
	d4[i]=Math.random()*RAD;
    }

    d1.sort().reverse();
    d2.sort().reverse();
    d3.sort().reverse();
    d4.sort().reverse();

    for(i=0; i<REP; ++i)
    {
	curang=0;
	ang=Math.PI/(1<<(Math.floor(Math.random()*3)+3));
	if(colored)
	{
	    color=Math.floor(Math.random()*16777216).toString(16);
	}
	while(curang<2*Math.PI)
	{
	    mandala+=("<path d=\"M "+(RAD+d1[i]*Math.cos(curang))+","+(RAD+d1[i]*Math.sin(curang))+" C "+(RAD+d2[i]*Math.cos(curang+ang))+","+(RAD+d2[i]*Math.sin(curang+ang))+" "+(RAD+d3[i]*Math.cos(curang+ang))+","+(RAD+d3[i]*Math.sin(curang+ang))+" "+(RAD+d4[i]*Math.cos(curang))+" "+(RAD+d4[i]*Math.sin(curang))+" Z\" stroke=\"black\" fill=\"#"+color+"\" stroke-width=\"2\" />\n");
	    curang+=ang;
	    mandala+=("<path d=\"M "+(RAD+d1[i]*Math.cos(curang+ang))+","+(RAD+d1[i]*Math.sin(curang+ang))+" C "+(RAD+d2[i]*Math.cos(curang))+","+(RAD+d2[i]*Math.sin(curang))+" "+(RAD+d3[i]*Math.cos(curang))+","+(RAD+d3[i]*Math.sin(curang))+" "+(RAD+d4[i]*Math.cos(curang+ang))+" "+(RAD+d4[i]*Math.sin(curang+ang))+" Z\" stroke=\"black\" fill=\"#"+color+"\" stroke-width=\"2\" />\n");
	    curang+=ang;
	}
    }

    mandala+=footer;
    container.innerHTML=mandala;
    var a=document.getElementById("download");
    a.href = window.URL.createObjectURL(new Blob([preheader+mandala], {type: 'image/svg'}));
    a.download = "mandala.svg";
}

function toggleColor()
{
    if(colored)
	colored=false;
    else
	colored=true;
    color="ffffff";
    generate();
}

generate();
