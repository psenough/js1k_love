with(Math)with(a){s=15,z=50,n=[],t=setTimeout,ra=random,c.width=c.height=w=s*z;
a=["Love","Liebe","Amor","Cinta","♥"],r=[],co=["255,26,0","255,255,0","26,255,26"],tl=a.length,font="240px Georgia",textBaseline="middle",textAlign="center";
for(j=0;j<tl;j++){fillStyle="#f00";fillText(a[j],w/2,w/2);r[j]=getImageData(0,0,w,w);clearRect(0,0,w,w)}
v=function(){return ra()<f}
function p(k,l){if(v())q(k,l)}
function u(k,l){t(function(){m=k-1;d=k+1;o=l-1;j=l+1;p(m,o);p(m,l);p(m,j);p(k,o);p(k,j);p(d,o);p(d,l);p(d,j);},30)}
function q(k,l){if(n[k]&&n[k][l]<=-1){n[k][l]=1;u(k,l)}}
for(n=[],x=z;x--;) for(n[x]=[],y=z;y--;) n[x][y]=-1;
hf=function(n){return floor(ra()*n);}
tr=function(){h=hf(tl);for(x in n) for(y in n[x]) {k=(s*y*w*4)+(s*x*4);if (r[h].data[k]!==0) n[x][y]=1,u(x,y)}}
hi=10;(l=function(){f=ra();if(!hi--){hi=10,tr(),z=!z}else{clearRect(0,0,w,w), font=s+2+'px a';for(x in n) for(y in n[x]) {z?b=hf(co.length):b=0;fillStyle='rgba('+co[b]+','+(n[x][y]-=.1)+')', fillText('♥',s*x,s*y)}}	t(l,20)})()}
