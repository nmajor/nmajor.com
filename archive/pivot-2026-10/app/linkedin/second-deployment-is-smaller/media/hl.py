import pymupdf

JOBS = [
  ("cg-35-08-01-26-exclusion-generative-artificial-intelligence.pdf",
   "shot-cg3508.png",
   ['"Bodily injury" or "property damage" arising out of',
    '"generative artificial intelligence".',
    'machine-based learning system or model that is',
    'trained on data with the ability to create content or',
    'responses, including but not limited to text,',
    'images, audio, video or code.']),
  ("cg-40-48-01-26-exclusion-generative-artificial-intelligence-coverage-b-only.pdf",
   "shot-cg4048.png",
   ['"Personal and advertising injury" arising out of',
    '"generative artificial intelligence".',
    'machine-based learning system or model that is',
    'trained on data with the ability to create content or',
    'responses, including but not limited to text,',
    'images, audio, video or code.']),
]

for src, out, phrases in JOBS:
    doc = pymupdf.open(src)
    page = doc[0]
    hits = 0
    for p in phrases:
        for r in page.search_for(p):
            a = page.add_highlight_annot(r)
            a.set_colors(stroke=(1, 0.92, 0.30))
            a.set_opacity(0.55)
            a.update()
            hits += 1
    print(f"{src}: {hits} highlight rects")
    pix = page.get_pixmap(dpi=200, annots=True)
    pix.save(out)
    print("  ->", out, pix.width, "x", pix.height)
