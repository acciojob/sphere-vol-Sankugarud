function volume_sphere() {
    let v1 = document.getElementById("radius");
	// alert(v1.value)
	let cal = 4/3 * (3.14159 * v1.value);
	let v2 = document.getElementById("volume")
	 v2.value= cal;
} 
	
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
