with(Math)with(a){l=256;s=15,z=50,t=setTimeout,W=floor,P=random,c.width=c.height=w=s*z;A=["Love","Liebe","Amor","Cinta","♥"],R=[],B=[l+",26,0",l+",255,0","26,255,26"],L=A.length;C="\u0010",D="\u0001",r="\x00",U="data",J="<##>";S=new Audio;T=String.fromCharCode;H=l*l;Z='px a';
function V(){
function K(G){for(N=E="";4>E;++E)N+=T(G%l),G=0|G/l;F=F.replace(J,N)}
I=G.length;F="RIFF<##>WAVEfmt "+C+r+r+r+D+r+D+r+J+J+"\u0002"+r+C+r+U+J;K(36+2*I);K(H);K(2*H);K(2*I);for(E=0;E<I;++E)M=G[E],F+=T(M%l),F+=T(0|M/l);
return U+":audio/wav;base64,"+btoa(F)
}for(j=0;j<L;j++){c.width=w;fillStyle="red";font=l+Z;textAlign="center";fillText(A[j],w/2,w/2);R[j]=getImageData(0,0,w,w);}
function p(k,l){P()<f&&n[k]&&n[k][l]<=-1?(n[k][l]=1,u(k,l)):a}
function u(k,l){t(function(){m=k-1;d=k+1;o=l-1;j=l+1;p(m,o);p(m,l);p(m,j);p(k,o);p(k,j);p(d,o);p(d,l);p(d,j);},s)}for(n=[],x=z;x--;) for(n[x]=[],y=z;y--;) n[x][y]=-1;
Q=s;(O=function(){f=P();if(Q--){c.width=w,font=s+Z;h=W(P()*L);for(x in n) for(y in n[x]){fillStyle='rgba('+B[Q?0:W(P()*B.length)|0]+','+(n[x][y]-=.1)+')', fillText('♥',s*x,s*y);if(!Q){if(R[h].data[60*(+x+w*y)]!==0) n[x][y]=1,u(x,y)}}}else{for(i=0,G=[];i<H;G.push((sin(++i*f)+1)*l*z)){Q=s}S.src=V();S.play();}t(O,s)})()}
