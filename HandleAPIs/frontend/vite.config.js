import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // The below proxy will not work with github codespaces - 
  // As GitHub Codespaces uses a tunnel between your dev port and the internet. It has protection built-in.
  server: {
    proxy: {
      // This means: “Whenever the frontend tries to call something that starts with /api, 
      // take the full path and forward it to that base URL — and append the rest as-is.”
      '/api': 'http://localhost:5000',
    },
  },
  plugins: [react()],
})

/*
  You're calling:
    https://opulent-happiness-94xggpqr49h77j9-5173.app.github.dev/api/products

  Which Vite tries to proxy to:
    https://opulent-happiness-94xggpqr49h77j9-5000.app.github.dev/api/products

  But then — GitHub DevTunnel security kicks in and redirects you to:
    https://github.dev/pf-signin?id=...
*/

/*
  Note:
  -----
  Suppose, 
  Your frontend is served from:
    http://localhost:5173

  Your backend is running at:
    http://localhost:5000

  Now you write this in your frontend:
    fetch('/api/products') // No proxy used
  
  The browser sends the request to localhost:5173/api/products (because it's relative), not localhost:5000.
  But the API is on port 5000 — so you get a 404.

  🚑 Solution 1: Absolute URL (not recommended in dev)
    fetch('http://localhost:5000/api/products')

  Now the request goes to the right backend server — BUT:

  🧨 Boom! CORS kicks in
  You’ll see this in the console:

  ❌ Access to fetch at 'http://localhost:5000/api/products' from origin 'http://localhost:5173' has been blocked by CORS policy...

  Because you’re crossing origins (5173 → 5000), and your backend hasn’t allowed it.

  🚑 Solution 2: Set up CORS in backend (still meh in dev)
    npm install cors
    
    import cors from 'cors';
    app.use(cors());
  
  But this opens up security implications and is still clunky in dev.

  💡 The clean and perfect solution?
  ✅ Use Vite's proxy

  Because:
  --------
  - It avoids CORS completely by making the browser think you're calling your own origin
  - You don’t hardcode backend URLs in your frontend code (easier to deploy to prod)
  - You get nice relative paths like fetch('/api/products') and let Vite handle where that actually goes

  ✅ In Production?
  -----------------
  Yes, in production, the frontend and backend are often served from the same domain, like:
    https://yourapp.com
  
  In that case, proxy and CORS aren’t needed at all. You can just:
    fetch('/api/products')
    and it will take the relative path automatically

  And everything works smoothly.
*/