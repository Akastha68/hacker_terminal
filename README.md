# Hacker Terminal

**Hacker Terminal** is a powerful simulation-based terminal designed for ethical hacking practice, cybersecurity learning, and fun command-line exploration. Built with realism in mind, it emulates hacker-style operations like password cracking, packet sniffing, port scanning, location tracing, and data decryption — all simulated for educational purposes only.

---

## Features

- **Realistic UI/UX** inspired by Hollywood hacker scenes
- **Password brute force simulator**
- **Packet sniffing simulation with fake data**
- **Live port scanning & spoofed target IPs**
- **Randomized data decryption tasks**
- **GPS/IP location trace simulations**
- **Modular command system** for extendability
- **Keyboard-only terminal experience**
- **Cross-platform**: Android (via Termux) & Desktop

---

## Technologies Used

- HTML, CSS, JS (Frontend Interface)
- PHP (Simulated Backend Execution)
- SQLite3 (Local Data Simulation)
- Shell Scripts (for Termux support)
- Optional: WebSockets for live updates

---

## Installation

### On Android (Termux)

```bash
pkg install git php sqlite nodejs -y
git clone https://github.com/your-username/hacker_terminal
cd hacker_terminal
php -S localhost:8080
