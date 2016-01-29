function a1() { 
	'use strict'; 
	if (true) { 
		function b() {}
	} 
	b(); 
} 

function a2() { 
	'use strict'; 
	if (true) { 
		b(); 
		function b() {} 
	} 
} 
