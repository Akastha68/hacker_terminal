// script.js
const terminalOutput = document.getElementById('terminal-output');
const terminalInput = document.getElementById('terminal-input');
const threatMap = document.getElementById('threat-map');
const dataVisualization = document.getElementById('data-visualization');
const backgroundSound = document.getElementById('background-sound');

// Matrix Rain Effect
const matrixRain = () => {
    const canvas = document.createElement('canvas');
    document.querySelector('.matrix-rain').appendChild(canvas);
    const ctx = canvas.getContext('2d');

    // Set up canvas size
    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix effect settings
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(0);

    // Characters used in the rain effect
    const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%^&*()";
    const charArray = matrixChars.split("");

    const draw = () => {
        // Create fading effect
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#00ff00';
        ctx.font = `${fontSize}px monospace`;

        drops.forEach((y, i) => {
            const text = charArray[Math.floor(Math.random() * charArray.length)];
            ctx.fillText(text, i * fontSize, y);

            // Reset drop with a slight delay for a natural effect
            if (y > canvas.height && Math.random() > 0.98) {
                drops[i] = 0;
            } else {
                drops[i] += fontSize;
            }
        });

        setTimeout(() => {
            requestAnimationFrame(draw);
        }, 50); // Adjust speed of the rain effect
    };

    draw();
};

matrixRain();

// Terminal Commands
/**const commands = {
    help: () => "Available commands: help, bruteforce, scan, decrypt, trace, stegano, darkweb, exploit, sniff, exit",
    bruteforce: () => "Bruteforce attack initiated...\n[+] Scanning for vulnerabilities...\n[+] Exploiting weak passwords...\n[+] Access granted!",
    scan: () => "Scanning network...\n[+] Found 3 active devices.\n[+] IPs: 192.168.1.1, 192.168.1.2, 192.168.1.3",
    decrypt: () => "Decrypting data...\n[+] Using AES-256 algorithm...\n[+] Decryption complete!",
    trace: () => "Tracing IP...\n[+] Target: 192.168.1.1\n[+] Location: New York, USA",
    stegano: () => "Steganography simulation...\n[+] Hiding message in image...\n[+] Message extracted: 'Secret Data'",
    darkweb: () => "Searching dark web...\n[+] Found 5 results:\n1. Fake Passport\n2. Stolen Credit Cards\n3. Hacking Tools\n4. Illegal Drugs\n5. Counterfeit Money",
    exploit: () => "Searching exploit database...\n[+] Found 3 exploits:\n1. CVE-2023-1234\n2. CVE-2023-5678\n3. CVE-2023-9101",
    sniff: () => "Packet sniffing...\n[+] Captured 10 packets.\n[+] Analyzing network traffic...",
    exit: () => { window.close(); return "Closing terminal..."; }
};

terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const input = terminalInput.value.trim();
        terminalInput.value = '';
        terminalOutput.innerHTML += `<div><span class="prompt">root@hacker:~$</span> ${input}</div>`;

        if (commands[input]) {
            terminalOutput.innerHTML += `<div>${commands[input]()}</div>`;
        } else {
            terminalOutput.innerHTML += `<div>Command not found: ${input}</div>`;
        }

        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }
});**/

document.addEventListener("DOMContentLoaded", function () {
    const terminalOutput = document.getElementById('terminal-output');
    const terminalInput = document.getElementById('terminal-input');

    const commands = {
        help: () => [
            "Available commands: help, bruteforce, scan, decrypt, trace, stegano, darkweb, exploit, sniff, hashdump, firewall-bypass, portscan, keylogger, spoof, whois, osint, exit"
        ],

        bruteforce: () => [
            "Bruteforce attack initiated...",
            "Trying password: 123456 - Failed",
            "Trying password: password - Failed",
            "Trying password: qwerty - Failed",
            "Trying password: letmein - Failed",
            "Trying password: hackerpro - Success! Access granted!"
        ],

        scan: () => [
            "Scanning network...",
            "Device found: IP 192.168.1.1, MAC: 00:1A:2B:3C:4D:5E, Vendor: Cisco",
            "Device found: IP 192.168.1.2, MAC: 00:1B:2C:3D:4E:5F, Vendor: TP-Link",
            "Device found: IP 192.168.1.3, MAC: 00:1C:2D:3E:4F:5G, Vendor: Netgear",
            "Network scan complete."
        ],

        decrypt: () => [
            "Decrypting data...",
            "Processing: 4F6C79A8...",
            "Processing: 7D2E5B3C...",
            "Processing: 9F1A4C6D...",
            "Decryption complete! Message: 'Mission Success!'"
        ],

        trace: () => [
            "Tracing IP...",
            "Routing through: Paris, France...",
            "Routing through: London, UK...",
            "Routing through: Berlin, Germany...",
            "Final Target Location: Tokyo, Japan"
        ],

        stegano: () => [
            "Steganography analysis started...",
            "Extracting data from image...",
            "Hidden message found: 'Classified Information'"
        ],

        darkweb: () => [
            "Connecting to the dark web...",
            "Accessing onion sites...",
            "Listing results:",
            "1. Fake Passport | Price: $5000",
            "2. Stolen Credit Cards | Price: $300 per card",
            "3. Hacking Tools | Price: Free",
            "4. Counterfeit Money | Price: $1000 for $10,000 fake cash"
        ],

        exploit: () => [
            "Searching exploit database...",
            "Found vulnerabilities:",
            "1. CVE-2023-1234 - Windows Privilege Escalation",
            "2. CVE-2023-5678 - Linux Kernel Exploit",
            "3. CVE-2023-9101 - Remote Code Execution"
        ],

        sniff: () => [
            "Packet sniffing started...",
            "Captured 10 packets...",
            "Analyzing network traffic...",
            "HTTP Request detected: Username=admin, Password=1234"
        ],

        hashdump: () => [
            "Dumping password hashes...",
            "User: Admin | Hash: $1$abc123$xyz456...",
            "User: Guest | Hash: $1$guest$mnop789...",
            "Hashes saved to hashdump.txt"
        ],

        firewall_bypass: () => [
            "Bypassing firewall...",
            "Identifying firewall rules...",
            "Injecting crafted packets...",
            "Firewall bypass successful!"
        ],

        portscan: () => [
            "Scanning open ports...",
            "Port 22 (SSH) - Open",
            "Port 80 (HTTP) - Open",
            "Port 443 (HTTPS) - Open",
            "Scan complete!"
        ],

        keylogger: () => [
            "Deploying keylogger...",
            "Logging keystrokes...",
            "Recent keystrokes: user123, password321"
        ],

        spoof: () => [
            "IP spoofing activated...",
            "New IP Address: 192.168.99.99",
            "Packets are being sent with spoofed IP."
        ],

        whois: () => [
            "WHOIS Lookup started...",
            "Domain: example.com",
            "Registrant: John Doe",
            "Email: admin@example.com",
            "Registrar: GoDaddy"
        ],

        osint: () => [
            "Performing OSINT investigation...",
            "Gathering public data...",
            "LinkedIn Profile: John_Doe123",
            "Twitter Handle: @johnhacker",
            "Company Data: XYZ Corp."
        ],

        exit: () => [
            "Closing terminal..."
        ]
    };

    const executeCommand = (input) => {
        input = input.toLowerCase();
        if (commands[input]) {
            const outputLines = commands[input]();
            let delay = 500;

            outputLines.forEach((line, index) => {
                setTimeout(() => {
                    const div = document.createElement("div");
                    div.textContent = line;
                    terminalOutput.appendChild(div);
                    terminalOutput.scrollTop = terminalOutput.scrollHeight;
                }, delay * (index + 1));
            });
        } else {
            const errorDiv = document.createElement("div");
            errorDiv.textContent = `Command not found: ${input}`;
            terminalOutput.appendChild(errorDiv);
        }
    };

    terminalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const input = terminalInput.value.trim();
            terminalInput.value = '';
            const inputDiv = document.createElement("div");
            inputDiv.innerHTML = `<span class="prompt">root@hacker:~$</span> ${input}`;
            terminalOutput.appendChild(inputDiv);
            executeCommand(input);
        }
    });
});



window.onload = () => {
    terminalInput.value="help";
   // Your Three.js code here
// 3D Globe with Realistic Earth Texture
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
threatMap.appendChild(renderer.domElement);

const textureLoader = new THREE.TextureLoader();
const earthTexture = textureLoader.load('https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg');
const bumpTexture = textureLoader.load('https://threejs.org/examples/textures/planets/earth_bump_2048.jpg');
const specularTexture = textureLoader.load('https://threejs.org/examples/textures/planets/earth_specular_2048.jpg');

const geometry = new THREE.SphereGeometry(5, 32, 32);
const material = new THREE.MeshPhongMaterial({
    map: earthTexture,
    bumpMap: bumpTexture,
    bumpScale: 0.05,
    specularMap: specularTexture,
    specular: 0x262626
});
//const geometry = new THREE.BoxGeometry();
//const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//const cube = new THREE.Mesh(geometry, material);
//scene.add(cube);
const earth = new THREE.Mesh(geometry, material);
scene.add(earth);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 3, 5);
scene.add(light);

camera.position.z = 10;

const animate = () => {
    requestAnimationFrame(animate);
    earth.rotation.y += 0.005;
    renderer.render(scene, camera);
};

animate();

// Handle Window Resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
}

// Live Data Visualization (D3.js)
const data = [30, 86, 168, 281, 303, 365];
const svg = d3.select("#data-visualization")
    .append("svg")
    .attr("width", 300)
    .attr("height", 200);

svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * 30)
    .attr("y", d => 200 - d)
    .attr("width", 25)
    .attr("height", d => d)
    .attr("fill", "#00ff00");

// Background Sound
//backgroundSound.play();
//const backgroundSound = document.getElementById("background-sound");

document.addEventListener("click", async () => {
    try {
        await backgroundSound.play();
        console.log("Audio started");
    } catch (error) {
        console.log("Autoplay blocked:", error);
    }
}, { once: true });