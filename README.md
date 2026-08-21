# discord-quest-completer
A lightweight utility executed via the Discord Desktop App console to automate Quest tasks and claim Orbs.

# ⚡ Discord Quest & Orb Auto-Completer

> **Native Client Quest Automation via Discord Desktop App Console**

An automated, lightweight utility designed to execute quest objectives and claim Orbs directly through the Discord Desktop Client's internal application console. Operates natively within the client environment without web browser dependencies.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/Platform-Discord%20Desktop-5865F2)](https://discord.com)

---

## ⚠️ Legal Disclaimer & Risk Acknowledgment

**PLEASE READ BEFORE USING THIS UTILITY.**

* **Educational Purpose:** This project is created strictly for educational research regarding client IPC calls and module resolution.
* **Account Safety Notice:** Automating actions may violate [Discord's Terms of Service](https://discord.com/terms). The maintainers accept **ZERO responsibility** for any account bans, suspensions, or penalties resulting from the use of this code.
* **User Assumption of Risk:** By running this code, you agree that you are using it at your own risk. See [`DISCLAIMER.md`](DISCLAIMER.md) for full terms.

---

## 💡 Key Features

- **Native Console Execution:** Injected directly into the Discord Desktop Client (`app.asar` / Native Electron Console).
- **Multi-Task Support:** Handles `WATCH_VIDEO`, `PLAY_ON_DESKTOP`, `STREAM_ON_DESKTOP`, and `PLAY_ACTIVITY` quest types.
- **Dynamic Module Resolution:** Automatically extracts internal Webpack modules and dispatchers without hardcoded offsets.

---

## ⚙️ Setup & How to Use

### Step 1: Enable Discord Developer Tools
Before accessing the app console, DevTools must be enabled in your local Discord settings.

**Automatic Setup:**
```bash
node scripts/enable-devtools.js
