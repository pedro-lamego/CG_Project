class Ball extends THREE.Object3D { /* lacks attributes such as direction */

	constructor(x, y, z) {
        'use strict';
		
        super();

        var material = new THREE.MeshBasicMaterial({color: '#be9b7b', wireframe: true});
        var geometry = new THREE.SphereGeometry(3, 16, 16);
        var mesh = new THREE.Mesh(geometry, material);
		this.add(mesh);
	
		this.position.set(x, y, z);
	}

    showHideAxis() {
        
    }

    update() {  /* needs to check if its out of bounds and colisions */
        return true;
    }
}