#!/usr/bin/env python3
"""Sync the shared parts of styles.css into tiis-online/styles.css.

tiis-online/ carries its own copy of the stylesheet. Only ~20 selectors are
genuinely specific to that subsite; the other ~414 are duplicated. Until the
two are consolidated into one sheet (see README note), any change to the
shared design system has to be copied across — and doing that by hand has
already caused one silent bug, where --font-display was referenced in the
online sheet but never defined in it.

This script copies both halves that can drift:

  1. the :root design-token block, and
  2. everything from the "Density pass" marker to the end of the file,
     which is where every appended layer lives.

Run after editing styles.css:   python3 sync-styles.py
"""
import sys

ROOT = 'styles.css'
ONLINE = 'tiis-online/styles.css'
LAYER_MARKER = '/* ===================================================\n   Density pass'


def token_block(css):
    """The FIRST :root block, up to the Typography comment.

    Only the shared palette lives here. Subsite-only tokens are declared in a
    second :root block further down (below "Reset & Base"), deliberately
    outside this range so a sync cannot delete them.
    """
    start = css.index(':root {') + len(':root {')
    end = css.index('  /* Typography', start)
    return start, end


def main():
    root = open(ROOT, encoding='utf-8').read()
    online = open(ONLINE, encoding='utf-8').read()

    # --- 1. tokens ---
    rs, re_ = token_block(root)
    os_, oe = token_block(online)
    online = online[:os_] + root[rs:re_] + online[oe:]

    # --- 2. appended layers ---
    if LAYER_MARKER not in root:
        sys.exit('marker not found in ' + ROOT)
    online_head = online[:online.index(LAYER_MARKER)] if LAYER_MARKER in online else online
    online = online_head + root[root.index(LAYER_MARKER):]

    # --- 3. tokens the online sheet needs but the shared sheet does not define ---
    # --font-display is declared beside --font-family, which sits *after* the
    # token block above, so it is not covered by step 1.
    if '--font-display:' not in online:
        anchor = "  --font-family: 'Inter'"
        i = online.index(anchor)
        eol = online.index('\n', i) + 1
        online = (online[:eol]
                  + "  --font-display: 'Newsreader', 'Iowan Old Style', Georgia, "
                    "'Times New Roman', serif;\n"
                  + online[eol:])

    open(ONLINE, 'w', encoding='utf-8').write(online)

    # --- 4. report anything still referenced but undefined ---
    import re
    used = set(re.findall(r'var\((--[a-z0-9-]+)', online))
    defined = set(re.findall(r'^\s*(--[a-z0-9-]+)\s*:', online, re.M))
    missing = sorted(used - defined)

    print(f'{ONLINE}: {online.count(chr(10)) + 1} lines')
    print('undefined custom properties:', missing if missing else 'none')
    braces = (online.count('{'), online.count('}'))
    print('braces:', braces, 'OK' if braces[0] == braces[1] else 'MISMATCH')
    return 1 if missing or braces[0] != braces[1] else 0


if __name__ == '__main__':
    sys.exit(main())
