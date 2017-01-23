#include <bits/stdc++.h>

using namespace std;

char header[400]="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"440px\" height=\"440px\" viewBox=\"0 0 440 440\" enable-background=\"new 0 0 440 440\" xml:space=\"preserve\">\n";
char footer[7]="</svg>";
int RAD=220;

bool cmp(double u, double v)
{
    return u>v;
}

int main()
{
    int REP=rand()%4+2;
    double d1[10], d2[10], d3[10], d4[10], ang, curang=0;
    bool colored=false;
    int color;
    srand(time(NULL));
    printf(header);
    for(int i=1; i<=REP; ++i)
    {
        d1[i]=rand()%RAD;
        d2[i]=rand()%RAD;
        d3[i]=rand()%RAD;
        d4[i]=rand()%RAD;
    }
    sort(d1+1, d1+REP+1, cmp);
    sort(d4+1, d4+REP+1, cmp);
    for(int i=1; i<=REP; ++i)
    {
        curang=0;
        ang=M_PI/(1<<(rand()%3+2));
        if(colored)
            color=rand()%16777216;
        else
            color=16777215;
        while(curang<2*M_PI)
        {
            printf("<path d=\"M %lf,%lf C %lf,%lf %lf,%lf %lf,%lf Z\" stroke=\"black\" fill=\"#%x\" fill-opacity=\"1\" stroke-width=\"2\"/>\n", RAD+d1[i]*cos(curang), RAD+d1[i]*sin(curang), RAD+d2[i]*cos(curang), RAD+d2[i]*sin(curang), RAD+d3[i]*cos(curang+ang), RAD+d3[i]*sin(curang+ang), RAD+d4[i]*cos(curang+ang), RAD+d4[i]*sin(curang+ang), color);
            curang+=ang;
            printf("<path d=\"M %lf,%lf C %lf,%lf %lf,%lf %lf,%lf Z\" stroke=\"black\" fill=\"#%x\" fill-opacity=\"1\" stroke-width=\"2\"/>\n", RAD+d1[i]*cos(curang+ang), RAD+d1[i]*sin(curang+ang), RAD+d2[i]*cos(curang+ang), RAD+d2[i]*sin(curang+ang), RAD+d3[i]*cos(curang), RAD+d3[i]*sin(curang), RAD+d4[i]*cos(curang), RAD+d4[i]*sin(curang), color);
            curang+=ang;
        }
    }
    REP=rand()%3+1;
    for(int i=1; i<=REP; ++i)
    {
        d1[i]=rand()%RAD;
        d2[i]=rand()%RAD;
        d3[i]=rand()%RAD;
        d4[i]=rand()%RAD;
    }
    sort(d1+1, d1+REP+1, cmp);
    sort(d2+1, d2+REP+1, cmp);
    sort(d3+1, d3+REP+1, cmp);
    sort(d4+1, d4+REP+1, cmp);
    for(int i=1; i<=REP; ++i)
    {
        curang=0;
        ang=M_PI/(1<<(rand()%3+3));
        if(colored)
            color=rand()%16777216;
        else
            color=16777215;
        while(curang<2*M_PI)
        {
            printf("<path d=\"M %lf,%lf C %lf,%lf %lf,%lf %lf,%lf\" stroke=\"black\" fill=\"#%x\" fill-opacity=\"1\" stroke-width=\"2\"/>\n", RAD+d1[i]*cos(curang), RAD+d1[i]*sin(curang), RAD+d2[i]*cos(curang+ang), RAD+d2[i]*sin(curang+ang), RAD+d3[i]*cos(curang+ang), RAD+d3[i]*sin(curang+ang), RAD+d4[i]*cos(curang), RAD+d4[i]*sin(curang), color);
            curang+=ang;
            printf("<path d=\"M %lf,%lf C %lf,%lf %lf,%lf %lf,%lf\" stroke=\"black\" fill=\"#%x\" fill-opacity=\"1\" stroke-width=\"2\"/>\n", RAD+d1[i]*cos(curang+ang), RAD+d1[i]*sin(curang+ang), RAD+d2[i]*cos(curang), RAD+d2[i]*sin(curang), RAD+d3[i]*cos(curang), RAD+d3[i]*sin(curang), RAD+d4[i]*cos(curang+ang), RAD+d4[i]*sin(curang+ang), color);
            curang+=ang;
        }
    }
    printf(footer);
    return 0;
}
