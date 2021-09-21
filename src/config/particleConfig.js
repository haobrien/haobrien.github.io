const particleConfig = {
    "particles": {
        "number": {
            "value": 150,
                "density": {
                "enable": false
            }
        },
        "size": {
            "value": 5,
                "random": true,
                    "anim": {
                "speed": 4,
                    "size_min": 0.3
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "random": true,
                "speed": 1,
                    "direction": "none",
                        "out_mode": "bounce",
                            "bounce": true,
                                "attract": true
        },
        "color": {
            "value": ["#ffa69e", "#aed9e0", "#b8f2e6"]
            // old styles: "value": ["#f64f55", "#ed9479", "#f1e076", "#97d4b9", "#65b8ce", "#ec95ce"]
        },
        "shape": {
            "type": ["polygon"],
                        },
        "opacity": {
            "value": 0.9,
                "random": true,
                    "anim": {
                "enable": true,
                    "speed": 1,
                        "opacity_min": 0.5
            },
        },
    },
}

export default particleConfig