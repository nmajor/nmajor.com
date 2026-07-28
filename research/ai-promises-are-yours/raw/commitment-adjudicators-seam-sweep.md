SOURCE: multi-query sweep (Tavily search/extract, WebSearch, direct curl, Playwright)
FETCHED: 2026-07-20
SEAM: formal adjudication bodies + regulators, 2025-2026 preferred
AGENT NOTE: this file records the sweep itself, including blocks and negative results.

## ACCESS BLOCKS ENCOUNTERED (verbatim)

1. canlii.org — HARD BLOCKED at IP level by DataDome. Both curl and a real
   Playwright Chromium session were refused.
   - curl to https://www.canlii.org/en/search/ajaxSearch.do?type=decision&ccId=bccrt&text=chatbot
     returned the DataDome interstitial: "Please enable JS and disable any ad blocker"
   - Playwright to https://www.canlii.org/en/#search/type=decision&text=chatbot&startDate=2024-06-01
     rendered: "Access is temporarily restricted / We detected unusual activity from your
     device or network. / - Automated (bot) activity on your network (IP 93.108.45.6)"
     Block ID: 2819e336-9cc9-4edf-e23a-d6be3dd21ba9
   => CONSEQUENCE: I could NOT run a first-party full-text search of BCCRT (or any
      Canadian tribunal) decisions for "chatbot" after Moffatt. Any claim that no
      post-Moffatt BCCRT chatbot case exists is NOT established by this sweep.

2. afca.org.au and service02.afca.org.au — HTTP 403 to curl.
   - https://service02.afca.org.au/DeterminationSearch -> HTTP 403
   - https://www.afca.org.au/searchable-determinations -> HTTP 403
   Worked around partially: AFCA published determinations are indexed under
   my.afca.org.au/searchpublisheddecisions/kb-article?id=... and were searchable
   third-hand via Tavily. No chatbot-commitment determination surfaced.

3. financial-ombudsman.org.uk — HTTP 403 to WebFetch on
   /decisions-case-studies/ombudsman-decisions. Individual decision PDFs at
   /decision/DRN-XXXXXXX.pdf DO fetch fine via curl with a browser UA.
   The FOS on-site search filters by business name / industry / date only
   (params observed: BusinessName, Business, Start) — it is NOT a full-text search,
   so full-text had to be done third-hand via a search index.

4. americanbar.org/news/abanews/.../legal-risks-ai-speaking-for-business/ — HTTP 403 to WebFetch.

5. Tavily API quota exhausted mid-sweep:
   {"error":"Search failed","status":432,"detail":{"error":"This request exceeds your
   plan's set usage limit."}} — the last two planned queries (UK Communications
   Ombudsman / Ombudsman Services energy; and a broad named-company court query)
   had to be re-run on WebSearch instead, which is US-biased.

## QUERIES RUN (seam-relevant)
- FOS domain-scoped full text: "chatbot", "webchat/virtual assistant told the customer",
  "promised refund incorrect information business should honour ... uphold",
  "DRN chatbot virtual assistant"
- AFCA (my.afca.org.au) domain-scoped: "chatbot AI assistant told complainant eligible
  determination", "chatbot online chat told the complainant refund would be paid"
- canlii.org domain-scoped: "chatbot artificial intelligence negligent misrepresentation
  refund tribunal decision"
- BCCRT post-Moffatt 2025/2026 chatbot
- NZ Disputes Tribunal chatbot refund ruling
- UK small claims / county court chatbot promise
- US state AG / consumer protection statement on chatbot promises
- Communications Ombudsman / Ombudsman Services energy chatbot
- AFCA / Telecommunications Industry Ombudsman AU / OBSI chatbot determination

## RESULT: NO NEW QUALIFYING CASE FOUND
Every adjudicated chatbot-commitment case returned was one of the four already excluded
(Moffatt v Air Canada 2024 BCCRT 149; Cursor/Anysphere "Sam"; Choice Home Warranty /
Robert Brown / Utah DCP; BMW Toronto "Quinn"). The 2026 PYMNTS chatbot-tracker roundup,
which is explicitly framed as a survey of courts holding companies liable for chatbot
statements, names ONLY Moffatt and Cursor. See commitment-pymnts-2026-chatbot-tracker.md.

## FALSE LEADS EXPLICITLY REJECTED (do not use)
- "UK customer negotiated an AI chat assistant down to an 80% discount on an GBP 8,000
  order; business threatened with court action." Sourced ONLY to an Instagram repost
  (uncover.ai) of a Reddit r/LegalAdviceUK thread by u/PerfectHumor216. A top comment on
  that same Instagram post states the framing is wrong: "the AI generated a non-functional
  code. The buyer placed an order without a discount and then added a comment in the order
  section, insisting that the price be corrected." NO adjudicator, NO named company, NO
  verifiable primary source. REJECTED under the no-forums/no-SEO-farms rule.
- classactionslawsuits.com "Deceptive AI Chatbot Pricing & Consumer Fraud Class Action
  (Casetify / Online Retailers)" — content-farm page, no docket number, no court, no named
  plaintiff, boilerplate text that bleeds into unrelated copyright-suit language. REJECTED.
