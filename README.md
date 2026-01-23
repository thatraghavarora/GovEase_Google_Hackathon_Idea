# GovEase

## Development

```bash
cd /home/kali/Desktop/GovEase/govease
npm install
npm run dev
```

In a second terminal:

```bash
npm run dev:server
```

Frontend runs on `https://localhost:5173` and proxies `/api` to the backend on `http://localhost:5000`.

## Production

```bash
npm run build
npm start
```
