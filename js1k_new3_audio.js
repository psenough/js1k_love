//
// uncompressed version
// js1k love 2012 entry
// by Filipe Cruz
// http://js1k.com/2012-love/details/1092
//
// mashup of 3 other entries
// http://js1k.com/2012-love/details/1045
// http://js1k.com/2012-love/details/1057
// http://js1k.com/2012-love/details/1080
//

with(Math) {
	
	s=15, z=50; n=[], t=setTimeout;
	c.width = c.height = w = s*z;

	txt = ["Love","Liebe","Amor","Cinta","♥"], img = [];
	colors = ["255,26,0", "255,255,0", "26,255,26"];
	
	tl = txt.length;
	cl = colors.length;
	
	a.font = "240px Georgia";
	a.textBaseline = "middle";
	a.textAlign = "center";
	
	for (var j = 0; j < tl; j++)
	{
		// Draw text
		a.fillStyle = "#f00";
		a.fillText(txt[j],c.width/2,c.height/2);
	
		// Save image data
		img[j] = a.getImageData(0,0,c.width,c.height);
		
		// Clear the canvas
		a.clearRect(0,0,c.width,c.height);
	}


	with(b.style) margin = padding = 0;
	c.style.border = '0px';
	
	fl = .3;
	v = function() { return random() < fl }
	
	function p(k,l) { if(v()) q(k,l) }
	
	function u(k,l) {
		
		t(function() {
			m=k-1; d=k+1; o=l-1; j=l+1;
			p(m,o); p(m,l); p(m,j);
			p(k,o); p(k,j);
			p(d,o); p(d,l); p(d,j);
		},30);
		
	}
	
	function q(k,l) {
		if(n[k] && n[k][l] <= -1) {
			n[k][l] = 1;
			u(k,l)
		}
	}
	
	for(n=[],x=z; x--;) for(n[x]=[],y=z; y--;) n[x][y] = -1;

	hf = function(n){
		return Math.floor(Math.random()*n);
	};
	
	tr = function() {
		h=hf(tl);
		for (var y = 0; y < img[h].height; y+=s)
		{
			for (var x = 0; x < img[h].width; x+=s)
			{	
				var k = (y*img[h].width*4) + (x*4);
				if (img[h].data[k] !== 0)
				{
					n[floor(x/s)][ceil(y/s)] = 1;
					u(floor(x/s),ceil(y/s));
				}
				
			}
		}
	}
	
	c.onclick = function(e) { 
		tr();
	};
	
	
	
	
	//player = new Audio,
	//duration = .2,
	//rate = 44100;
	
	// create wav note audio
	/*function createNote(data) {
		var len = data.length,
			integer = 0,
			header = "RIFF<##>WAVEfmt \x10\x00\x00\x00\x01\x00\x01\x00<##><##>\x02\x00\x10\x00data<##>";

		function insertHeaderData(value) {
			var bytes = "";
			for (i = 0; i < 4; ++i) {
				bytes += String.fromCharCode(value % 256);
				value = Math.floor(value / 256);
			}
			header = header.replace('<##>', bytes);
		}
		insertHeaderData(36 + len * 2);
		insertHeaderData(rate);
		insertHeaderData(rate * 2);
		insertHeaderData(len * 2);
		for (i = 0; i < len; ++i) {
			var note = Math.round(Math.min(1, Math.max(-1, data[i])) * 32767);
			if (note < 0) {
				note += 65536;
			}
			header += String.fromCharCode(note % 256);
			header += String.fromCharCode(Math.floor(note / 256));
		}
		return 'data:audio/wav;base64,' + btoa(header);
	}*/
	
	qp=new Audio;
	ql=String.fromCharCode;
	qn=256;
	qo=44100;
	function qc(qf){
		qb=qf;
		
		function qd(qb){qy="";for(qh=0;4>qh;++qh)qy+=ql(qb%qn),qb=0|qb/qn;qe=qe.replace("<##>",qy)}
		
		qg=qb.length;
		qe="RIFF<##>WAVEfmt \u0010\x00\x00\x00\u0001\x00\u0001\x00<##><##>\u0002\x00\u0010\x00data<##>";qd(36+2*qg);qd(qo);qd(2*qo);qd(2*qg);
		for(qh=0;qh<qg;++qh) {
			//qm=round(qr*min(1,max(-1,qb[qh]))),0>qm&&(qm+=2*qr+2);
			qm=round(qr*qb[qh]);
			//0>qm&&(qm+=2*qr+2);
			
			qe+=ql(qm%qn),qe+=ql(0|qm/qn);
		}
		return"data:audio/wav;base64,"+btoa(qe)
	}
	
	
	yu = 10;
	var counter = 0;
	var red = true;
	(l = function() {
		//if (yu--) yu=10,g();
		// else
		flv = random();
			counter++;
			if (counter > 8) {
				counter = 0, red = !red, tr();
					//player.src = createNote(note(n[12][12]*1000));
					var tone = [];
					//freq = 100+flv*300;
					for(i = 0; i < qo*.2; ++i){
						//tone.push(Math.sin(2 * Math.PI * i / (rate/freq)));
						//tone.push(Math.sin(Math.PI * i / (22050/(100+flv*300)) ));
						tone.push((Math.sin(i*flv/6)+1) );
					
					}
					qp.src = qc(tone);
					qp.play();
			} else
		with(a) {
			clearRect(0,0,w,w), font = s+2+'px a';//, save();
			for(x in n) for(y in n[x]) {
				red ? clrs = colors[hf(cl)] : clrs = colors[0];
				fillStyle = 'rgba('+clrs+','+(n[x][y]-=.1)+')', fillText('♥',s*x,s*y)
			}
			//if(f) fillStyle = 'red', fillText('CLICK 4 LOVE',20,30), restore()
		}
		
		
		t(l,20)
	})()
	
	
}
