# Sonix Tools - Premium Offline Utilities

A strictly offline, client-side PWA toolkit built with React.

## 🚀 Setup Instructions

1. **Download Libraries**:
   Since this is an offline-first app without a bundler for external scripts, you must download the following libraries and place them in a `/libs/` folder in the root directory:

   - `qrcode.min.js` (from https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js)
   - `pdf-lib.min.js` (from https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js)
   - `jsqr.min.js` (from https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.min.js)
   - `jsbarcode.min.js` (from https://cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/JsBarcode.all.min.js)
   - `jszip.min.js` (from https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js)

   **Folder Structure:**
   ```
   /libs/
     qrcode.min.js
     pdf-lib.min.js
     jsqr.min.js
     jsbarcode.min.js
     jszip.min.js
   ```

2. **Run Locally**:
   - Because of browser security restrictions (CORS and Camera access), you cannot just open `index.html` directly for all features.
   - **Recommended**: Use VS Code "Live Server" extension or run `npx serve .` in the terminal.
   - **Camera**: Browser camera access requires either `localhost` or a secure `https` context.

## 📱 PWA Support
- The app includes a Service Worker for offline capability.
- Upon first load, it caches the shell and assets.
- To test installation, open in Chrome/Safari and look for the "Install" icon in the address bar.

## 🛠️ Tech Stack
- React 18
- Tailwind CSS (via CDN for simplicity, can be local)
- Lucide React Icons
- Local JS Libraries (No external runtime requests)
