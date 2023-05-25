function volume_sphere() {
    let v1 = document.getElementById("radius");
	// alert(v1.value)
	
	
	 let cal = 4/3 * Math.PI * Math.pow(v1.value, 3);
	 cal = cal.toFixed(4);
	document.getElementById("volume").value = cal;
	return false;
} 
	
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
