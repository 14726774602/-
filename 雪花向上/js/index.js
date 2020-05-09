particlesJS("particles-js", {
	"particles": {
		"number": {
			"value": upupooConfig.density.value*1*3+1,
			/*粒子数量 upupoo*/
			"density": {
				"enable": true,
				"value_area": 472.6270185112248	
			}
		},
		"color": {
			"value": "#FFFFFF"
			/*粒子颜色*/
		},
		"shape": {
			"type": "circle",/*粒子形状  circle圆圈  polygon多边形  upupoo*/
			"stroke": {
				"width": 0,
				"color": "#000000"
			},
			"polygon": {
				"nb_sides": 5
			},
			"image": {
				"src": "img/github.svg",
				"width": 100,
				"height": 100
			}
		},
		"opacity": {
			"value": upupooConfig.transparent.value*1/100+0.1,/*粒子透明度  upupoo*/
			"random": false,
			"anim": {
				"enable": false,
				"speed": 1,
				"opacity_min": 0.1,
				"sync": false
			}
		},
		"size": {
			"value": upupooConfig.size.value*1*0.57,/*粒子大小  upupoo*/
			"random": true,
			"anim": {
				"enable": false,
				"speed": 40,
				"size_min": 0.1,
				"sync": false
			}
		},
		"line_linked": {
			"enable": false,/*粒子是否连线  upupoo*/
			"distance": 150,
			"color": "#ffffff",
			"opacity": 0.4,
			"width": 1
		},
		"move": {
			"enable": true,/*粒子是否自动移动  upupoo*/
			"speed": upupooConfig.speed.value*1*0.38,/*粒子移动的速度  upupoo*/
			"direction": "none",
			"random": true,
			"straight": false,
			"out_mode": "out",
			"bounce": false,
			"attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 1200
			}
		}
	},
	"interactivity": {
		"detect_on": "canvas",
		"events": {
			"onhover": {
				"enable": true,/*粒子是否有鼠标划上效果  upupoo*/
				"mode": "repulse"
			},
			"onclick": {
				"enable": true,/*粒子是否有鼠标点击效果  upupoo*/
				"mode": "push"/*粒子是否有鼠标点击添加  upupoo*/
			},
			"resize": true
		},
		"modes": {
			"grab": {
				"distance": 400,
				"line_linked": {
					"opacity": 1
				}
			},
			"bubble": {
				"distance": 400,
				"size": 40,
				"duration": 2,
				"opacity": 8,
				"speed": 3
			},
			"repulse": {/*粒子击退效果  upupoo*/
				"distance": 140,
				"duration": 0.4
			},
			"push": {/*粒子添加效果  upupoo*/
				"particles_nb": 4
			},
			"remove": {/*粒子删除效果  upupoo*/
				"particles_nb": 2
			}
		}
	},
	"retina_detect": false
});
var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() {
	stats.begin();
	stats.end();
	if(window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
		count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
	}
	requestAnimationFrame(update);
};
requestAnimationFrame(update);