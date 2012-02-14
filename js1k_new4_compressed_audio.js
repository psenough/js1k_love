with(Math)with(a){l=256;s=15,z=50,t=setTimeout,ra=random,c.width=c.height=w=s*z;a=["Love","Liebe","Amor","Cinta","♥"],ru=[],co=[l+",26,0",l+",255,0","26,255,26"],tl=a.length,font=l+"px Georgia",textAlign="center";r1="\u0010",r3="\u0001",r="\x00",rd="data",uu="<##>";qp=new Audio;ql=String.fromCharCode;qo=l*l;
function qc(){function qd(qt){qy="";for(qh=0;4>qh;++qh)qy+=ql(qt%l),qt=0|qt/l;qe=qe.replace(uu,qy)}qg=qt.length;qe="RIFF<##>WAVEfmt "+r1+r+r+r+r3+r+r3+r+uu+uu+"\u0002"+r+r1+r+rd+uu;qd(36+2*qg);qd(qo);qd(2*qo);qd(2*qg);for(qh=0;qh<qg;++qh)qm=qt[qh],qe+=ql(qm%l),qe+=ql(0|qm/l);
return rd+":audio/wav;base64,"+btoa(qe)
}for(j=0;j<tl;j++){fillStyle="#f00";fillText(a[j],w/2,w/2);ru[j]=getImageData(0,0,w,w);clearRect(0,0,w,w)}v=function(){return ra()<f}
function p(k,l){v()?q(k,l):a}
function u(k,l){t(function(){m=k-1;d=k+1;o=l-1;j=l+1;p(m,o);p(m,l);p(m,j);p(k,o);p(k,j);p(d,o);p(d,l);p(d,j);},s)}
function q(k,l){if(n[k]&&n[k][l]<=-1){n[k][l]=1;u(k,l)}}
for(n=[],x=z;x--;) for(n[x]=[],y=z;y--;) n[x][y]=-1;
hf=function(n){return floor(ra()*n)}
tr=function(){h=hf(tl);for(x in n) for(y in n[x]) {k=(y*w*s*4)+(x*s*4);if (ru[h].data[k]!==0) n[x][y]=1,u(x,y)}}
hi=s;(ll=function(){f=ra();if(!hi--){hi=10,tr(),c=!c;qt=[];for(i=0;i<qo;++i)qt.push((sin(i*f)+1)*l*z);qp.src=qc(qt);qp.play();}else{clearRect(0,0,w,w),font=s+'px a';for(x in n) for(y in n[x]){c?b=hf(co.length):b=0;fillStyle='rgba('+co[b]+','+(n[x][y]-=.1)+')', fillText('♥',s*x,s*y)}}	t(ll,s)})()}
