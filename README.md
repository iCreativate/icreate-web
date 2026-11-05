# iCreate website

Public site for [icreate.co.za](https://icreate.co.za): a free creative suite from iCreativate. Next.js App Router, ready to deploy on Railway.

The Apps page is generated from `content/apps.json`, which is copied from `../icreate-launcher/apps.json` on each build when that file is present.

## Local

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run sync-apps   # refresh content/apps.json from the launcher
npm run build
npm start
```

## Railway

This folder is the service root. It builds with the included Dockerfile (`output: "standalone"`). Railway injects `PORT`; the server listens on `0.0.0.0`.

From this directory:

```bash
railway up
```

Then attach the custom domain `icreate.co.za`. Optional variables:

- `NEXT_PUBLIC_SITE_URL` — default `https://icreate.co.za`
- `NEXT_PUBLIC_LAUNCHER_REPO` — default `iCreativate/icreate-launcher`

If you deploy from the parent repo, set the Railway service root directory to `icreate-web`.

## Pages

| Path | Purpose |
| --- | --- |
| `/` | Home: “Create without limits. No Adobe subscription.” |
| `/apps` | Catalogue from `apps.json` |
| `/download` | Detects OS; first-party `/api/download/{mac,windows,linux}` installers |
| `/pricing` | Free and iCreate Pro in rand |
| `/learn` | Guides (videos when they exist) |
| `/switching-from-adobe` | Adobe → iCreate map with alpha/beta labels |
| `/about` | ArtCraft credit and licences |
