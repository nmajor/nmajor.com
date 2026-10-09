#!/usr/bin/env python3
"""
Render carousel decks for a LinkedIn document post and an Instagram carousel.

Slide copy is authored in app/linkedin/<slug>/carousel-slides-*.txt (the .txt
extension keeps the scheduler from treating them as posts). The copy here is a
verbatim transcription of those files; if you edit the .txt, edit this too.

Brand comes from app/src/styles/site.css:
  paper #faf9f5 · ink #14120f · body #4a453c · muted #9a9284 · accent #e5391f
Type is Archivo (the site face): ArchivoBlack for headlines, Archivo for body.

Usage:  python3 app/scripts/render-carousel.mjs.py <essay-slug>
Output: app/linkedin/<slug>/carousel-linkedin/*.png   (9 slides)
        app/linkedin/<slug>/carousel-instagram/*.png  (7 slides)
        app/linkedin/<slug>/carousel-linkedin.pdf     (reference copy only)

Both decks ship to Postiz as PNG slides, NOT as a PDF. Verified 2026-07-28:
Postiz's public /upload endpoint rejects application/pdf with
"Unsupported file type", while PNG uploads fine. For LinkedIn the scheduler
sets `post_as_images_carousel`, and Postiz's own convertImagesToPdfCarousel()
turns the slides into the native document post on its side. The PDF written
here is kept purely as a local reference/proof, and is never uploaded.
"""
import os, sys, subprocess
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

W, H = 1080, 1350
M = 92                      # margin
PAPER = (0.980, 0.976, 0.961)   # #faf9f5
INK = (0.078, 0.071, 0.059)     # #14120f
BODY = (0.290, 0.271, 0.235)    # #4a453c
MUTED = (0.604, 0.573, 0.518)   # #9a9284
ACCENT = (0.898, 0.224, 0.122)  # #e5391f

REPO = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
BLACK_TTF = os.path.join(REPO, "app/src/og/fonts/ArchivoBlack-Regular.ttf")
REG_TTF = os.path.expanduser("~/.fonts/Archivo-var.ttf")
pdfmetrics.registerFont(TTFont("ArchivoBlack", BLACK_TTF))
pdfmetrics.registerFont(TTFont("Archivo", REG_TTF))


def wrap(c, text, font, size, maxw):
    c.setFont(font, size)
    out, line = [], ""
    for word in text.split():
        t = (line + " " + word).strip()
        if pdfmetrics.stringWidth(t, font, size) <= maxw:
            line = t
        else:
            if line:
                out.append(line)
            line = word
    if line:
        out.append(line)
    return out


def draw_block(c, text, font, size, lead, color, x, y, maxw):
    c.setFillColorRGB(*color)
    for ln in wrap(c, text, font, size, maxw):
        c.setFont(font, size)
        c.drawString(x, y, ln)
        y -= lead
    return y


def rule(c, y, color=ACCENT, w=132, thick=6):
    c.setFillColorRGB(*color)
    c.rect(M, y, w, thick, stroke=0, fill=1)


def bg(c):
    c.setFillColorRGB(*PAPER)
    c.rect(0, 0, W, H, stroke=0, fill=1)


def footer(c, label):
    c.setFont("Archivo", 22)
    c.setFillColorRGB(*MUTED)
    c.drawString(M, 74, label)
    c.drawRightString(W - M, 74, "nmajor.com")


def cover(c, kicker, headline, sub):
    bg(c)
    rule(c, H - 210)
    c.setFont("Archivo", 26)
    c.setFillColorRGB(*ACCENT)
    c.drawString(M, H - 292, kicker.upper())
    y = draw_block(c, headline, "ArchivoBlack", 82, 96, INK, M, H - 420, W - 2 * M)
    draw_block(c, sub, "Archivo", 34, 48, BODY, M, y - 46, W - 2 * M - 60)
    footer(c, "Actual Intelligence")


def interior(c, kicker, headline, bullets, note=None):
    bg(c)
    rule(c, H - 190, w=92, thick=5)
    c.setFont("Archivo", 25)
    c.setFillColorRGB(*ACCENT)
    c.drawString(M, H - 262, kicker.upper())
    y = draw_block(c, headline, "ArchivoBlack", 50, 62, INK, M, H - 348, W - 2 * M)
    y -= 44
    for b in bullets:
        c.setFillColorRGB(*ACCENT)
        c.rect(M + 4, y + 11, 16, 4, stroke=0, fill=1)
        yy = y
        for i, ln in enumerate(wrap(c, b, "Archivo", 31, W - 2 * M - 46)):
            c.setFont("Archivo", 31)
            c.setFillColorRGB(*BODY)
            c.drawString(M + 46, yy, ln)
            yy -= 43
        y = yy - 20
    if note:
        draw_block(c, note, "Archivo", 27, 38, MUTED, M, y - 8, W - 2 * M)
    footer(c, "Actual Intelligence")


def statement(c, kicker, headline, body_txt, cta):
    bg(c)
    rule(c, H - 210)
    c.setFont("Archivo", 26)
    c.setFillColorRGB(*ACCENT)
    c.drawString(M, H - 292, kicker.upper())
    y = draw_block(c, headline, "ArchivoBlack", 62, 76, INK, M, H - 400, W - 2 * M)
    y = draw_block(c, body_txt, "Archivo", 33, 47, BODY, M, y - 44, W - 2 * M)
    c.setFillColorRGB(*ACCENT)
    c.rect(M, y - 62, W - 2 * M, 4, stroke=0, fill=1)
    draw_block(c, cta, "Archivo", 30, 42, INK, M, y - 118, W - 2 * M)
    footer(c, "Actual Intelligence")


# ---------------------------------------------------------------- LinkedIn (9pp)
def linkedin_deck(path):
    c = canvas.Canvas(path, pagesize=(W, H))
    cover(c, "build versus buy",
          "7 checks before you believe an AI savings number",
          "Run these on the next case study someone forwards you.")
    c.showPage()
    interior(c, "Check 1", "Who published it, and what do they sell?", [
        "Custom support-triage tool replaced a $490-a-month subscription",
        "Real six-month cost came out higher",
        "Every byline on the site belongs to staff at a low-code and AI development agency",
        "The footer on every page advertises that agency",
        'The About page says the site has "no vendor deals"',
    ])
    c.showPage()
    interior(c, "Check 2", "Does the post it cites actually exist?", [
        "There is no such post",
        "The only earlier piece on the same product quotes completely different numbers",
        "Its URL now returns a 404",
        "Zero results for the domain on Hacker News, every tag, no date limit",
    ], note='It opens: "Six months ago, we documented what looked like a clean win."')
    c.showPage()
    interior(c, "Check 3", "Does the number match in every telling?", [
        "$250k (April)",
        "$220k (May)",
        "$250k again (late May)",
        "No dollar figure at all (a fourth interview)",
    ], note="The same interview puts the tooling spend at about $100 a month, where earlier tellings said $200.")
    c.showPage()
    interior(c, "Check 4", "What is the saving a percentage of?", [
        "The saving everyone wrote about is around 4.6% of one hardware contract",
        'The district’s own follow-up: "The dollars were never the point. The precedent was."',
        "I agree with him. It's still worth knowing the denominator.",
    ], note="Over roughly the same stretch, that board approved a $4.8 million four-year Apple lease.")
    c.showPage()
    interior(c, "Check 5", "What did it replace, and who built that?", [
        "An earlier vendor customer story says $60,000",
        'Different department, and "30 days to 2 hours" vs "30 days to a few days"',
        "That vendor page also names what was being replaced: a 15-year-old in-house service bus whose original developers are long gone",
        "The in-house build replacing the SaaS is replacing an in-house build that rotted",
    ], note="A CIO replacing packaged software with in-house builds, about $50,000 a year saved on a finance app.")
    c.showPage()
    interior(c, "Check 6", "Is the person who built it still there?", [
        'A commenter warned about "the long-term maintenance cost, which compounds over time"',
        "Seven weeks later he announced he was leaving after 13 years",
        "Nobody has said the tool broke",
        "Nobody has said anything about it at all, and there's no public record of who has it now",
    ], note="A COO posted in April that he'd built an internal HR objectives tool himself and avoided close to $100,000 in software.")
    c.showPage()
    interior(c, "Check 7", "Is there a number in it dated after year one?", [
        "Every failure I could verify surfaced because something forced it out",
        "A £239m government contract priced on 95% automation, unpicked in front of a parliamentary committee that could compel testimony",
        "Under 3% of one office's AI-generated bill summaries met standard, out in congressional testimony",
        "Committees, arbitrators, regulators. Without one of those, nobody publishes.",
    ], note="Not in a single case I checked. Including the two I'd cited myself.")
    c.showPage()
    statement(c, "One check to keep", "If the number has no date after year one, it isn't evidence yet.",
              "It's a launch post.",
              "Save this for your next build-versus-buy meeting.")
    c.showPage()
    c.save()


# --------------------------------------------------------------- Instagram (7)
def instagram_deck(path):
    c = canvas.Canvas(path, pagesize=(W, H))
    cover(c, "Actual Intelligence",
          "The best AI failure story I could find was an ad.",
          "And I'd been quoting it.")
    c.showPage()
    interior(c, "What the piece is", "The most-quoted cautionary tale about building your own tools", [
        "A custom support-triage tool that replaced a $490-a-month subscription, whose real six-month cost came out higher",
        "It's the only piece anyone points to that puts a number on the part everybody skips",
    ])
    c.showPage()
    interior(c, "Then I read the footer", "Every byline belongs to the agency", [
        "Every byline on the site belongs to staff at a low-code and AI development agency",
        "The footer on every page advertises that agency",
        'The About page says the site has "no vendor deals"',
    ])
    c.showPage()
    interior(c, "The post that isn't there", "There is no such post", [
        'It opens: "Six months ago, we documented what looked like a clean win"',
        "The only earlier piece on that site about the same product quotes completely different numbers",
        "Its URL now returns a 404",
    ])
    c.showPage()
    interior(c, "The pattern", "It sits inside a series", [
        "One post for replacing Mixpanel. One for Klaviyo. One for BambooHR.",
        'A sibling post argues your build method decides whether the replacement "holds for years or breaks in 6 months"',
    ])
    c.showPage()
    interior(c, "Don't get me wrong", "The numbers in it may well be real", [
        "One story I checked cuts against my whole argument: a company that dropped Salesforce for a CRM built on Lovable in 2025 is still running it nine months on, and says the maintenance worry is overblown",
        "I've got nothing against agencies. What I object to is a sales asset circulating as the neutral warning.",
    ])
    c.showPage()
    statement(c, "Nicholas Major", "Read the footer before you quote the number.",
              "",
              "Save this before your next build-vs-buy meeting.")
    c.showPage()
    c.save()


if __name__ == "__main__":
    slug = sys.argv[1] if len(sys.argv) > 1 else "the-case-study-was-an-ad"
    d = os.path.join(REPO, "app/linkedin", slug)
    def rasterize(pdf_path, out_dir):
        os.makedirs(out_dir, exist_ok=True)
        for old in os.listdir(out_dir):
            if old.endswith(".png"):
                os.remove(os.path.join(out_dir, old))
        subprocess.run(["convert", "-density", "72", pdf_path,
                        "-quality", "95", os.path.join(out_dir, "slide-%02d.png")], check=True)
        return sorted(os.listdir(out_dir))

    li_pdf = os.path.join(d, "carousel-linkedin.pdf")
    linkedin_deck(li_pdf)
    li_dir = os.path.join(d, "carousel-linkedin")
    li_slides = rasterize(li_pdf, li_dir)

    ig_pdf = os.path.join(d, ".ig-tmp.pdf")
    instagram_deck(ig_pdf)
    ig_dir = os.path.join(d, "carousel-instagram")
    ig_slides = rasterize(ig_pdf, ig_dir)
    os.remove(ig_pdf)

    print(f"LinkedIn:  {len(li_slides)} slides -> {li_dir}")
    print(f"Instagram: {len(ig_slides)} slides -> {ig_dir}")
    print(f"Reference PDF (not uploaded): {li_pdf}")
