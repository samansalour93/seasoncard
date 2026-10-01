# Growth log

## 2026-10-01
- **Correction:** the founder is not a painter. Earlier plans and posts said he was. That was false.
  - Removed the "Painter tip… how I'd mix" line from post 3's scheduled caption in Metricool (goes out tonight, 19:00 ET).
  - Post 1 (already published 29 Sep) says "I'm a painter" in the caption and "A painter calls it…" on slide 6.
    **Saman needs to edit or delete it in the TikTok app.** It can't be changed through Metricool after publishing.
  - `social/story-launch.jpg` says "made by a painter" in the image. Don't post it until it's re-rendered (story.mjs is fixed).
  - Removed the painter positioning from plan.md, posts.md, research.md and the renderer, and added a rule to rules.md.

## 2026-09-30
- **Published:** post 1 ("Your colour season is 4 measurements", TikTok photo carousel, 29 Sep 19:00 ET). Post 2 goes out tonight.
- **Metrics:** Metricool's TikTok analytics don't show post 1 yet (under 24h old, still syncing). The only TikTok item in analytics is an older 21 Sep video on @nazarbanai: 672 views, 0 likes/comments/shares, 98% For You traffic. No Season Card post data yet, so no best performer.
- **Changed:** queue ran to 5 Oct (5 days ahead). Rendered and scheduled posts 9 (Soft Summer vs Soft Autumn), 11 (gold vs silver), 12 (celebrity seasons) and 13 (burgundy), 6–9 Oct at 19:00 ET. Queue now runs to 9 Oct.
  - Post 12: removed the named celebrity and the press quote from the script and kept it general, so there's no claim we would have to source.
  - Post 12's face slide is labelled "illustration" per rules.md.
  - Post 11 uses the real per-season metals from seasons.json.
  - Renderer now reads APP from the environment (default: repo root), takes ONLY=9,11 to render a subset, and has a `table` visual plus a `note` line on the card mock.
- **Site check:** couldn't run this time (WebFetch permission timed out in the unattended run). Needs checking next run.
- **Why:** there's no performance data yet, so posts ran in posts.md order. Two posts (7, 11) ask for a comment reply, which the algorithm rewards on new accounts. The 12:00 slot waits until posts have data.
