with(a){s=15;z=50;n=[];t=setTimeout;R=Math.random;A=["Love","Liebe","Amor","Cinta","\u2665"];r=[];C=["255,26,0","255,255,0","26,255,26"];L=A.length;c.width=c.height=w=s*z;J=10;
font="240px Georgia";textBaseline="middle";textAlign="center";fillStyle="#f00";for(j=L;j--;c.width=w)fillText(A[j],w/2,w/2),r[j]=getImageData(0,0,w,w);font="17px a";
p=function(k,l){f>R()&&q(k,l)}
u=function(k,l){t(function(){p(--k,l-1);p(k,l);p(k,l+1);p(++k,l-1);p(k,l+1);p(++k,l-1);p(k,l);p(k,l+1)},s)}
q=function(k,l){if(n[k]&&n[k][l]<0)n[k][l]=1,u(k,l)}
for(n=[],x=z;x--;)for(n[x]=[],y=z;y--;)n[x][y]=-1;
(l=function(){f=R();if(J--){c.width=w;for(x in n)for(y in n[x])fillStyle="rgba("+C[z?R()*C.length|0:0]+","+(n[x][y]-=.1)+")",fillText("\u2665",s*x,s*y)}else{J=10;h=0|R()*L;for(x in n)for(y in n[x])if(r[h].data[4*s*(+x+w*y)])n[x][y]=1,u(x,y);z=!z}t(l,s)})()}