# cast-in-Nepal (old UI)

A plain list of Nepali surnames, one per line:

```
Surname > Caste/Community/Ethnicity > Clan/Sub-caste/Gotra
```

All 707 entries are in `index.html`, so the data is easy to read in the source. `style.css` handles the look and `script.js` handles the search box. Ctrl+F still works without JavaScript.

## Why this fork

This is a fork of [rishav-dahal/cast-in-Nepal](https://github.com/rishav-dahal/cast-in-Nepal). I loved the old UI, so this fork is reset to the last old-UI commit (`6579ff6`) with a small search box added on top.

If the original repo adds new surnames or fixes, I'll bring them over here.

## Branches

- `old-ui` (default) is this site.
- `main` is an untouched mirror of the original repo. Keep it current with GitHub's **Sync fork** button while viewing `main`, or run `gh repo sync GrishmaKhanal/cast-in-Nepal -b main`. Then compare it with `old-ui` and copy any new surnames over by hand.

Never sync `old-ui` itself, because that would bring the new UI back.

## Use

Open url in a browser. It has no build step and no dependencies.

- Type to filter. It matches anywhere in the line, so you can search by surname, caste or gotra (`Adhikari`, `Magar`, `Kashyap`).
- `/` jumps to the search box. `Esc` clears it.
- To share a search, use a link like `index.html?q=thapa`.

## Add a missing surname

Add one line inside `<ol id="list">` in `index.html`, in alphabetical order:

```html
<li><b>Surname</b> &gt; Caste &gt; Gotra</li>
```

Then open a pull request.

## Sync log

| Date | Upstream commit | Change |
| --- | --- | --- |
| 2026-10-06 | `cceef2e` | Only `Timilsena`, `Timalsena` and `Timsina` were missing. They are added to the `Timilsina/Timalsina` line. |

## Credits

The data is taken from the original repository, [rishav-dahal/cast-in-Nepal](https://github.com/rishav-dahal/cast-in-Nepal) by [Rishav Dahal](https://github.com/rishav-dahal) and its contributors, with some creative freedom: the old one-line UI is kept, a search box is added and a few spellings are merged in. The data is community-sourced and may have errors, so please send corrections as pull requests.
