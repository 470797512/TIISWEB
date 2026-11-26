#!/usr/bin/env python3
"""Preview locally with GitHub Pages-style URLs: python3 serve.py --port 8000.

Unlike plain `python3 -m http.server`, /about also serves about.html.
HTML filenames stay unchanged so existing .html links remain valid.
"""

import argparse
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit


class PagesHandler(SimpleHTTPRequestHandler):
    def translate_path(self, url):
        path = Path(super().translate_path(url))
        if not path.exists() and not path.suffix and not urlsplit(url).path.endswith('/'):
            html = path.with_suffix('.html')
            if html.is_file():
                return str(html)
        return str(path)


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--port', type=int, default=8000)
    args = parser.parse_args()
    handler = partial(PagesHandler, directory=str(Path(__file__).resolve().parent))
    with ThreadingHTTPServer(('127.0.0.1', args.port), handler) as server:
        print(f'Preview: http://127.0.0.1:{args.port}/', flush=True)
        try:
            server.serve_forever()
        except KeyboardInterrupt:
            pass
