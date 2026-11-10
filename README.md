# insyd.in

The Insyd website. The root page is **Bambai**, our open-world game set in South Mumbai, with its waitlist.
The studio's other software lives at `/other-projects`.

## Run it

```bash
npm install
npm run dev
```

## Waitlist

`POST /api/waitlist` stores emails in Redis through the Upstash REST API. Add an Upstash Redis store to the
Vercel project (Storage, Upstash, Redis) so `KV_REST_API_URL` and `KV_REST_API_TOKEN` are set; the route also
accepts `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`. Emails go in the set `bambai:waitlist` and the
join time in the hash `bambai:waitlist:joined`.

In local development without those variables the route writes to `.waitlist.json` (git-ignored).

## Assets

- `public/bambai/video`: gameplay clips captured in game (H.264, no audio).
- `public/bambai/models`: game models as GLB (meshopt geometry, WebP textures), shown with three.js.
