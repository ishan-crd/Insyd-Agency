# insyd.in

The Insyd website. The root page is **Bambai**, our open-world game set in South Mumbai, with its waitlist.
The studio's other software lives at `/other-projects`.

## Run it

```bash
npm install
npm run dev
```

## Waitlist

`POST /api/waitlist` saves each signup as a private file `waitlist/<email>.json` in the project's Vercel Blob
store (needs `BLOB_READ_WRITE_TOKEN`, which Vercel sets when the store is connected to the project). You can
browse them in the Vercel dashboard under Storage, or download them all as CSV from
`/api/waitlist?key=<WAITLIST_ADMIN_KEY>`.

In local development without a Blob token the route writes to `.waitlist.json` (git-ignored), and the CSV
export needs no key.

## Assets

- `public/bambai/video`: gameplay clips captured in game (H.264, no audio).
- `public/bambai/models`: game models as GLB (meshopt geometry, WebP textures), shown with three.js.
