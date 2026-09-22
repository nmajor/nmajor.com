# RAW: jamditis/claude-skills-journalism (`journalism-core` plugin) -- newsletter-publishing + editorial-workflow + newsroom-style + story-pitch

- Repo: https://github.com/jamditis/claude-skills-journalism
- Date accessed: 2026-08-18
- What it is: A large, actively maintained public Claude Code plugin marketplace built for newsrooms. `journalism-core` ships editorial-workflow, newsletter-publishing, fact-check-workflow, source-verification, newsroom-style, story-pitch and ai-writing-detox skills; the repo also ships a set of *session hooks* that enforce checks (ai-slop-detector, pre-publish-checklist, source-diversity-check, verification-reminder) rather than relying on the model remembering.

VERBATIM below, complete files, unedited.


---

## journalism-core/README.md

Source: https://raw.githubusercontent.com/jamditis/claude-skills-journalism/master/journalism-core/README.md

# journalism-core

Fifteen core journalism skills for Claude Code — covering reporting, verification, and publishing workflows for working journalists.

## What's in this plugin

| Skill | Purpose |
|---|---|
| **ai-writing-detox** | Eliminate AI-generated writing patterns that erode reader trust |
| **brazil-records-requests** | Public records requests under Brazil's Access to Information Law (Lei 12.527/2011) — portal selection, drafting, and the four-level appeal chain |
| **crisis-communications** | Rapid-response and breaking-news verification frameworks |
| **data-journalism** | Dataset analysis, chart and map creation, statistical reasoning, data-driven story structure |
| **editorial-workflow** | Assignment tracking, deadlines, and editorial calendars |
| **fact-check-workflow** | Structured claim verification, evidence gathering, and rating scales |
| **foia-requests** | Federal FOIA and state OPRA request templates with current statutory citations (FOIA Improvement Act 2016, NJ OPRA reform 2024) |
| **interview-prep** | Pre-interview research, question frameworks, and consent scripts |
| **interview-transcription** | Whisper / WhisperX transcription pipelines with speaker diarization |
| **newsletter-publishing** | Email newsletter workflows including 2024-2026 Gmail / Yahoo / Outlook bulk-sender compliance |
| **newsroom-style** | AP Style enforcement for journalism writing |
| **photo-metadata** | Embed caption, byline, credit, alt text, keywords, copyright or Creative Commons license, AI-source labeling (IPTC Digital Source Type), and Google-Images licensing into a photo's IPTC/EXIF/XMP metadata; strip GPS for source protection and read C2PA Content Credentials, for wire and archive use |
| **social-media-intelligence** | Narrative tracking, coordinated-campaign analysis, account authenticity checks, OSINT for digital investigations |
| **source-verification** | Source credibility, image and video verification, deepfake detection (2026), and C2PA Content Credentials |
| **story-pitch** | Pitch templates for daily news, features, investigations, and freelance queries |

## Installation

Install via the `claude-skills-journalism` Marketplace:

```
/plugin marketplace add jamditis/claude-skills-journalism
/plugin install journalism-core@claude-skills-journalism
```

Or install individual skills directly into `~/.claude/skills/` if you prefer not to use the plugin system — see the project README.

## Cross-references to skills outside this bundle

A few skills in this bundle reference siblings in other bundles. The references are advisory ("see also") — the skills work standalone if those bundles aren't installed:

- **source-verification** points to `social-media-intelligence` (deeper account analysis) and `web-archiving` (full archiving workflows)
- **interview-prep** points to `web-archiving` (recovering deleted social media content)
- **foia-requests** does not depend on other bundles
- **brazil-records-requests** is a companion to `foia-requests` (Brazil vs. US jurisdiction) and does not depend on other bundles

## Maintenance

Skills are updated against current authoritative sources. Substantive content changes are documented per-skill in `.superpowers/skill-design-<skill-slug>.md` files (in the parent repo, not shipped with the plugin).

Notable currency dates:

- **foia-requests** — citations verified May 2026 (FOIA Improvement Act of 2016 codification at 5 U.S.C. § 552(a)(8)(A); NJ OPRA P.L. 2024 c.16 effective September 3, 2024)
- **brazil-records-requests** — citations verified against Lei 12.527/2011 and Decreto 7.724/2012 as published on planalto.gov.br
- **newsletter-publishing** — Gmail / Yahoo / Outlook bulk-sender requirements verified May 2026 including the November 2025 Gmail enforcement escalation to permanent 5xx rejections
- **source-verification** — C2PA Content Credentials adoption + deepfake detection tooling verified May 2026

## License

MIT — see the parent repo `LICENSE`.


---

## journalism-core/skills/newsletter-publishing/SKILL.md

Source: https://raw.githubusercontent.com/jamditis/claude-skills-journalism/master/journalism-core/skills/newsletter-publishing/SKILL.md

---
name: newsletter-publishing
description: Email newsletter workflows for journalists and researchers. Use when creating, managing, or optimizing email newsletters, building subscriber lists, designing email templates, analyzing engagement metrics, or planning newsletter content calendars. For independent journalists, academic communicators, and media organizations building direct audience relationships.
---

# Newsletter publishing

Practical workflows for building and managing email newsletters for journalism and academia.

## When to activate

- Creating a new newsletter from scratch
- Designing email templates for journalism content
- Building and segmenting subscriber lists
- Analyzing newsletter performance metrics
- Planning editorial calendars for newsletters
- Migrating between newsletter platforms
- Improving deliverability and open rates

## Newsletter architecture

### Content strategy framework

```markdown
## Newsletter strategy document

### Core identity
- **Name**:
- **Tagline** (one line):
- **What readers get**: [specific value proposition]
- **Frequency**: [ ] Daily [ ] Weekly [ ] Bi-weekly [ ] Monthly

### Target audience
- Primary reader:
- What they care about:
- Why they'll subscribe:
- What they'll do with this info:

### Content pillars
1. [Core topic 1] - [how often]
2. [Core topic 2] - [how often]
3. [Recurring feature] - [how often]

### Voice and tone
- Formal ↔ Conversational: [1-5]
- Serious ↔ Light: [1-5]
- Reported ↔ Personal: [1-5]

### Success metrics (first 6 months)
- Subscriber goal:
- Target open rate:
- Target click rate:
```

### Issue structure template

```markdown
## [Newsletter Name] - Issue #[XX]
**Date**: [Date]
**Subject line**: [Subject]
**Preview text**: [First 50-90 characters readers see]

---

### Opening hook
[2-3 sentences that make readers want to keep reading]

### Main story
[Your primary content - 300-600 words for most newsletters]

### Secondary items (if applicable)
- **Quick hit 1**: [Brief item with link]
- **Quick hit 2**: [Brief item with link]

### Recurring section
[Weekly column, data point, recommendation, etc.]

### Sign-off
[Personal note, call to action, or preview of next issue]

---

**Unsubscribe** | **Preferences** | **Forward to a friend**
```

## Technical implementation

### HTML email template (responsive)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{newsletter_name}}</title>
  <style>
    /* Reset styles for email clients */
    body { margin: 0; padding: 0; width: 100%; }
    table { border-collapse: collapse; }
    img { border: 0; display: block; }

    /* Responsive container */
    .container {
      max-width: 600px;
      margin: 0 auto;
      font-family: Georgia, serif;
      font-size: 18px;
      line-height: 1.6;
      color: #333;
    }

    /* Dark mode support */
    @media (prefers-color-scheme: dark) {
      .container { background-color: #1a1a1a; color: #e0e0e0; }
      a { color: #6db3f2; }
    }

    /* Mobile styles */
    @media only screen and (max-width: 480px) {
      .container { padding: 15px !important; }
      h1 { font-size: 24px !important; }
    }
  </style>
</head>
<body>
  <table role="presentation" width="100%">
    <tr>
      <td align="center" style="padding: 20px;">
        <div class="container">
          <!-- Header -->
          <table width="100%">
            <tr>
              <td style="padding-bottom: 20px; border-bottom: 2px solid #333;">
                <h1 style="margin: 0;">{{newsletter_name}}</h1>
                <p style="margin: 5px 0 0; color: #666;">{{issue_date}}</p>
              </td>
            </tr>
          </table>

          <!-- Content -->
          <table width="100%">
            <tr>
              <td style="padding: 30px 0;">
                {{content}}
              </td>
            </tr>
          </table>

          <!-- Footer -->
          <table width="100%">
            <tr>
              <td style="padding-top: 20px; border-top: 1px solid #ddd; font-size: 14px; color: #666;">
                <p>You're receiving this because you subscribed to {{newsletter_name}}.</p>
                <p>
                  <a href="{{unsubscribe_url}}">Unsubscribe</a> |
                  <a href="{{preferences_url}}">Update preferences</a>
                </p>
              </td>
            </tr>
          </table>
        </div>
      </td>
    </tr>
  </table>
</body>
</html>
```

### Python newsletter sender

```python
from dataclasses import dataclass, field
from datetime import datetime
from typing import List, Dict, Optional
from enum import Enum
import hashlib

class SubscriberStatus(Enum):
    ACTIVE = "active"
    UNSUBSCRIBED = "unsubscribed"
    BOUNCED = "bounced"
    COMPLAINED = "complained"

@dataclass
class Subscriber:
    email: str
    name: Optional[str] = None
    subscribed_at: datetime = field(default_factory=datetime.now)
    status: SubscriberStatus = SubscriberStatus.ACTIVE
    tags: List[str] = field(default_factory=list)
    custom_fields: Dict = field(default_factory=dict)

    @property
    def hash_id(self) -> str:
        """Generate unique ID for unsubscribe links."""
        return hashlib.md5(self.email.encode()).hexdigest()[:12]

@dataclass
class NewsletterIssue:
    subject: str
    preview_text: str
    html_content: str
    plain_text: str
    scheduled_at: Optional[datetime] = None
    sent_at: Optional[datetime] = None
    issue_number: int = 0

    # Metrics
    sent_count: int = 0
    delivered_count: int = 0
    opened_count: int = 0
    clicked_count: int = 0
    bounced_count: int = 0
    unsubscribed_count: int = 0

    @property
    def open_rate(self) -> float:
        if self.delivered_count == 0:
            return 0.0
        return (self.opened_count / self.delivered_count) * 100

    @property
    def click_rate(self) -> float:
        if self.delivered_count == 0:
            return 0.0
        return (self.clicked_count / self.delivered_count) * 100

class NewsletterManager:
    """Core newsletter operations."""

    def __init__(self, name: str):
        self.name = name
        self.subscribers: List[Subscriber] = []
        self.issues: List[NewsletterIssue] = []

    def add_subscriber(self, email: str, name: str = None,
                       tags: List[str] = None) -> Subscriber:
        """Add new subscriber with double opt-in pending."""
        sub = Subscriber(
            email=email.lower().strip(),
            name=name,
            tags=tags or []
        )
        self.subscribers.append(sub)
        return sub

    def segment_subscribers(self, tags: List[str] = None,
                           min_engagement: float = None) -> List[Subscriber]:
        """Get subscribers matching criteria."""
        active = [s for s in self.subscribers
                  if s.status == SubscriberStatus.ACTIVE]

        if tags:
            active = [s for s in active
                     if any(t in s.tags for t in tags)]

        return active

    def calculate_engagement_score(self, subscriber: Subscriber) -> float:
        """Score subscriber engagement 0-100."""
        # Implementation would track opens/clicks per subscriber
        return 50.0  # Placeholder
```

## Subscriber management

### List hygiene workflow

```python
from datetime import datetime, timedelta

def clean_subscriber_list(manager: NewsletterManager,
                         inactive_threshold_days: int = 180) -> dict:
    """Identify and handle inactive subscribers."""
    cutoff = datetime.now() - timedelta(days=inactive_threshold_days)

    results = {
        'total': len(manager.subscribers),
        'active': 0,
        'inactive': [],
        'bounced': [],
        'unsubscribed': []
    }

    for sub in manager.subscribers:
        if sub.status == SubscriberStatus.BOUNCED:
            results['bounced'].append(sub.email)
        elif sub.status == SubscriberStatus.UNSUBSCRIBED:
            results['unsubscribed'].append(sub.email)
        elif sub.status == SubscriberStatus.ACTIVE:
            # Check last engagement
            engagement = manager.calculate_engagement_score(sub)
            if engagement < 10:  # Very low engagement
                results['inactive'].append(sub.email)
            else:
                results['active'] += 1

    return results

def run_reengagement_campaign(inactive_subscribers: List[str]) -> None:
    """Send win-back campaign to inactive subscribers."""
    # Send "We miss you" campaign
    # If no engagement after 2 attempts, mark for removal
    pass
```

### Subscriber segmentation

```markdown
## Recommended segments

### By engagement
- **VIPs**: Open rate > 80%, always click
- **Engaged**: Open rate 40-80%
- **Casual**: Open rate 10-40%
- **At-risk**: Haven't opened in 90 days
- **Inactive**: Haven't opened in 180 days

### By interest (tag-based)
- Topic preferences from signup
- Content they've clicked
- Surveys/polls they've answered

### By source
- Organic (website signup)
- Referral (forwarded by friend)
- Social media
- Paywall/registration wall
```

## Subject line optimization

### High-performing patterns

```markdown
## Subject line formulas that work

### For news/journalism
- **Breaking format**: "Breaking: [Concise news]"
- **Numbers**: "[X] things we learned about [topic]"
- **Question**: "Why did [entity] do [thing]?"
- **Direct**: "[Topic]: What you need to know"

### For analysis/opinion
- **Take**: "The real story behind [event]"
- **Contrarian**: "Why everyone is wrong about [topic]"
- **Insider**: "What [industry] insiders know about [topic]"

### What to avoid
- ALL CAPS
- Excessive punctuation!!!
- Clickbait that doesn't deliver
- Spam trigger words (FREE, URGENT, ACT NOW)
- Misleading preview text
```

### A/B testing framework

```python
import random
from typing import List, Tuple

def ab_test_subject_lines(subscribers: List[Subscriber],
                         subject_a: str,
                         subject_b: str,
                         test_percentage: float = 0.2) -> dict:
    """
    Test two subject lines on subset before full send.
    """
    test_size = int(len(subscribers) * test_percentage)
    test_group = random.sample(subscribers, test_size)

    # Split test group
    half = len(test_group) // 2
    group_a = test_group[:half]
    group_b = test_group[half:]

    remaining = [s for s in subscribers if s not in test_group]

    return {
        'group_a': {
            'subject': subject_a,
            'subscribers': group_a,
            'size': len(group_a)
        },
        'group_b': {
            'subject': subject_b,
            'subscribers': group_b,
            'size': len(group_b)
        },
        'remaining': {
            'subscribers': remaining,
            'size': len(remaining),
            'note': 'Send winner to this group after test period'
        },
        'test_duration_hours': 4
    }
```

## Deliverability best practices

### Email authentication setup

```markdown
## DNS records for deliverability

### SPF record
```
v=spf1 include:_spf.{{esp_sending_domain}} ~all
```

### DKIM
- Generate keys through your ESP
- Add TXT record with public key
- Verify signature is applied to outgoing mail

### DMARC
```
v=DMARC1; p=quarantine; rua=mailto:dmarc@yourdomain.com
```

### Checklist before sending
- [ ] SPF, DKIM, DMARC configured
- [ ] Sending domain warmed up
- [ ] List is clean (no hard bounces)
- [ ] Unsubscribe link works
- [ ] Physical address in footer (CAN-SPAM)
- [ ] Test email received in inbox (not spam)
```

### Gmail, Yahoo, and Outlook bulk-sender requirements

Bulk senders must meet authentication and unsubscribe requirements introduced by Gmail and Yahoo in February 2024. Microsoft Outlook adopted a parallel set in May 2025. Since November 2025, Gmail rejects non-compliant mail with permanent 5xx errors rather than soft-deferring it — non-compliant newsletters now bounce hard.

**Who is covered.** A "bulk sender" is one mailing more than 5,000 messages per day to Gmail addresses. The 5,000 threshold is counted at the **primary domain level across all subdomains**, not per sending subdomain. A newsroom sending 2,500/day from `transactional.example.com` and 2,500/day from `news.example.com` is over the threshold.

**Required:**

- **SPF and DKIM authentication on the sending domain.** Both must pass. SPF alone is no longer sufficient. DKIM keys must be at least 1024 bits.
- **DMARC policy at minimum `p=none`.** Production senders should move to `p=quarantine` or `p=reject` once aligned.
- **Domain alignment.** **One** of SPF or DKIM must align with the organizational domain in the visible `From:` header — not both. Relaxed alignment is acceptable.
- **One-click unsubscribe (RFC 8058).** The mail must include a `List-Unsubscribe` header with an HTTPS URL and a `List-Unsubscribe-Post: List-Unsubscribe=One-Click` header. The HTTPS endpoint must process the unsubscribe within two days without requiring login. A visible unsubscribe link must also appear in the message body.
- **Spam complaint rate below 0.3 percent**, measured in Google Postmaster Tools. Google's recommended target ceiling is 0.1 percent; sustained rates above 0.3 percent trigger rejection.
- **Valid PTR record (reverse DNS) on the sending IP.** Forward and reverse DNS must match.
- **TLS for inbound connections** (Google requirement since December 2023).

**Operational implications:**

Most reputable ESPs handle authentication, headers, and TLS once the sending domain is verified. The two parts that remain the operator's responsibility are complaint rate and unsubscribe behavior — re-engagement campaigns and prompt list hygiene matter here. Re-engaging dormant subscribers is risky precisely because they complain at 5–10× the rate of active ones; one bad re-engagement campaign can push complaint rate over 0.3 percent and trigger rejections across the entire sending domain.

References:
- Google, *Email sender guidelines* — `support.google.com/mail/answer/81126`
- Google, *Email sender guidelines FAQ* — `support.google.com/a/answer/14229414`
- Yahoo, *Sender Best Practices* — `senders.yahooinc.com/best-practices/`

### Spam score checklist

```markdown
## Before you send

### Content checks
- [ ] No spam trigger words
- [ ] Text-to-image ratio good (mostly text)
- [ ] All links are to reputable domains
- [ ] No URL shorteners (use full links)
- [ ] Plain text version included

### Technical checks
- [ ] From address matches sending domain
- [ ] Reply-to address is monitored
- [ ] Preheader text is set
- [ ] Images have alt text
- [ ] Links are not broken
```

## Analytics and optimization

### Key metrics dashboard

```python
from dataclasses import dataclass

@dataclass
class NewsletterAnalytics:
    """Track newsletter performance over time."""

    issue: NewsletterIssue

    def summary(self) -> dict:
        return {
            'issue_number': self.issue.issue_number,
            'sent': self.issue.sent_count,
            'delivered': self.issue.delivered_count,
            'delivery_rate': self._pct(self.issue.delivered_count,
                                       self.issue.sent_count),
            'opens': self.issue.opened_count,
            'open_rate': self.issue.open_rate,
            'clicks': self.issue.clicked_count,
            'click_rate': self.issue.click_rate,
            'click_to_open': self._pct(self.issue.clicked_count,
                                       self.issue.opened_count),
            'unsubscribes': self.issue.unsubscribed_count,
            'unsubscribe_rate': self._pct(self.issue.unsubscribed_count,
                                          self.issue.delivered_count),
        }

    def _pct(self, numerator: int, denominator: int) -> float:
        if denominator == 0:
            return 0.0
        return round((numerator / denominator) * 100, 2)

# Benchmarks (journalism newsletters)
BENCHMARKS = {
    'open_rate': {'good': 40, 'excellent': 55},
    'click_rate': {'good': 4, 'excellent': 8},
    'unsubscribe_rate': {'acceptable': 0.5, 'concerning': 1.0},
}
```

## Platform comparison

| Platform | Best for | Pricing model | Key feature |
|----------|----------|---------------|-------------|
| Substack | Writer-first, paid subs | Revenue share | Built-in payments |
| Buttondown | Developers, minimal | Per subscriber | Markdown native |
| Ghost | Publishers, memberships | Flat fee | Full CMS included |
| beehiiv | Growth-focused | Freemium | Referral tools |
| Kit (formerly ConvertKit) | Creators | Per subscriber | Automation |
| Mailchimp | Small orgs | Tiered | Easy templates |

## Legal compliance

### CAN-SPAM requirements (US)

```markdown
- [ ] Accurate "From" name and email
- [ ] Non-deceptive subject line
- [ ] Physical postal address included
- [ ] Working unsubscribe mechanism
- [ ] Unsubscribe honored within 10 days
- [ ] No purchased lists
```

### GDPR requirements (EU subscribers)

```markdown
- [ ] Explicit consent obtained (not pre-checked)
- [ ] Clear privacy policy linked
- [ ] Easy unsubscribe process
- [ ] Data export available on request
- [ ] Data deletion on request
- [ ] Record of consent stored
```

## Related skills

- **web-scraping** — Automate content gathering for newsletters
- **data-journalism** — Include data visualizations in emails
- **academic-writing** — Write clear, structured content
- **newsroom-style** — AP Style enforcement on newsletter copy
- **fact-check-workflow** — Verify claims before they hit subscribers' inboxes
- **ai-writing-detox** — Strip AI patterns from drafts

---

## Skill metadata

| Field | Value |
|-------|-------|
| version | 1.0.0 |
| created | 2025-12-26 |
| updated | 2026-05-08 |
| author | Joe Amditis |
| domain | publishing, marketing |
| complexity | intermediate |


---

## journalism-core/skills/editorial-workflow/SKILL.md

Source: https://raw.githubusercontent.com/jamditis/claude-skills-journalism/master/journalism-core/skills/editorial-workflow/SKILL.md

---
name: editorial-workflow
description: Manage editorial workflows for newsrooms and publications. Use when tracking story assignments, managing deadlines, coordinating editorial calendars, or establishing handoff protocols between reporters and editors. Includes templates for assignment tracking, editorial calendars, and workflow documentation.
---

# Editorial workflow management

Newsrooms run on systems. This skill provides templates and processes for tracking stories, managing deadlines, and coordinating between reporters and editors.

## When to use

- Setting up story tracking systems
- Creating editorial calendars
- Establishing assignment and handoff protocols
- Managing multiple stories and deadlines
- Training new editors on workflow

## Story status taxonomy

### Standard statuses

| Status | Meaning | Owner |
|--------|---------|-------|
| **Pitch** | Idea submitted, awaiting approval | Reporter |
| **Assigned** | Approved, reporter working | Reporter |
| **Reporting** | Active reporting in progress | Reporter |
| **Draft** | First draft submitted | Editor |
| **Edit** | Editor making changes | Editor |
| **Revision** | Back with reporter for changes | Reporter |
| **Copy** | Copy editing stage | Copy editor |
| **Final** | Ready for publication | Editor |
| **Scheduled** | Queued for specific date | System |
| **Published** | Live | Complete |
| **Hold** | Paused, not abandoned | Editor |
| **Kill** | Story abandoned | Editor |

### Status flow

```
Pitch → Assigned → Reporting → Draft → Edit → Revision (loop) → Copy → Final → Scheduled → Published
                                         ↓
                                       Hold/Kill
```

## Story assignment tracking

### Assignment record template

```markdown
## Story: [Slug/working title]

### Assignment details
- **Reporter:** [name]
- **Assigning editor:** [name]
- **Date assigned:** [date]
- **Deadline:** [date/time]
- **Target publication:** [outlet/section]

### Story specs
- **Format:** [brief, feature, enterprise, etc.]
- **Word count:** [target]
- **Multimedia:** [photos, video, graphics needed]
- **Sources required:** [minimum sources]

### The assignment
[What the story is, angle, key elements to include]

### Key contacts
[Sources to interview, PR contacts, experts]

### Background/resources
[Links to previous coverage, documents, data]

### Budget line
[One sentence for editorial budget meetings]

### Status history
| Date | Status | Notes |
|------|--------|-------|
| [date] | Assigned | |
| [date] | [status] | [note] |
```

### Assignment handoff checklist

When assigning a story:

```markdown
## Assignment handoff

### From editor to reporter
- [ ] Story scope clearly defined
- [ ] Deadline confirmed
- [ ] Word count/format specified
- [ ] Key sources identified
- [ ] Background materials shared
- [ ] Multimedia needs discussed
- [ ] Questions answered

### Reporter confirms
- [ ] Deadline is realistic
- [ ] Have access to necessary sources
- [ ] Understand the angle
- [ ] Know who to ask for help
```

## Editorial calendar

### Calendar template

```markdown
## Editorial calendar: [Week/Month of Date]

### Monday [date]
| Time | Story | Reporter | Status | Notes |
|------|-------|----------|--------|-------|
| AM | [story] | [name] | [status] | |
| PM | [story] | [name] | [status] | |

### Tuesday [date]
[same format]

### Evergreen queue
| Story | Reporter | Ready date | Notes |
|-------|----------|------------|-------|
| [story] | [name] | [date] | [can run anytime after this] |

### Upcoming (next 2 weeks)
| Story | Reporter | Target date | Status |
|-------|----------|-------------|--------|
| [story] | [name] | [date] | [status] |
```

### Planning meeting template

For weekly/daily editorial meetings:

```markdown
## Editorial meeting: [date]

### Today's lineup
| Story | Reporter | Status | Publish time | Notes |
|-------|----------|--------|--------------|-------|
| [story] | [name] | [status] | [time] | |

### Tomorrow's lineup
[same format]

### In progress (due this week)
| Story | Reporter | Due | Status | Blockers |
|-------|----------|-----|--------|----------|
| [story] | [name] | [date] | [status] | [any issues] |

### Pipeline (next 2+ weeks)
| Story | Reporter | Target | Status |
|-------|----------|--------|--------|
| [story] | [name] | [date] | [status] |

### Discussion items
- [Topic 1]
- [Topic 2]

### Action items
- [ ] [Action] - [Owner] - [Deadline]
```

## Deadline management

### Deadline types

| Deadline | Purpose | Typical lead time |
|----------|---------|-------------------|
| **Reporting** | Complete interviews/research | 2-5 days before draft |
| **First draft** | Submit to editor | 24-48 hours before edit |
| **Final draft** | After revisions | 12-24 hours before copy |
| **Art/photos** | Visuals ready | Same as first draft |
| **Copy edit** | Language/style review | 4-8 hours before publish |
| **Publish** | Goes live | Set time |

### Deadline tracking template

```markdown
## Story: [title]
**Final publish deadline:** [date/time]

### Working backward
| Milestone | Deadline | Status |
|-----------|----------|--------|
| Reporting complete | [date] | ☐ |
| First draft due | [date] | ☐ |
| Art/photos due | [date] | ☐ |
| Edit complete | [date] | ☐ |
| Revisions due | [date] | ☐ |
| Copy edit complete | [date] | ☐ |
| Final review | [date] | ☐ |
| Schedule/publish | [date] | ☐ |
```

### Missed deadline protocol

When a deadline is at risk:

1. **Notify immediately** - Don't wait until the deadline passes
2. **Explain briefly** - What's blocking progress
3. **Propose new deadline** - Realistic estimate
4. **Offer alternatives** - Shorter version? Different angle?

```markdown
## Deadline alert

**Story:** [title]
**Original deadline:** [date/time]
**Issue:** [what's blocking]
**New proposed deadline:** [date/time]
**Impact:** [what this affects]
**Alternatives:** [options if any]
```

## Edit handoff protocols

### Reporter → Editor

When submitting draft:

```markdown
## Draft submission: [story title]

**Draft location:** [link/file]
**Word count:** [count]

### What's in the draft
- [Key points covered]

### What's still needed
- [ ] [Outstanding item]
- [ ] [Waiting for source callback]

### Questions for editor
- [Question about structure, angle, etc.]

### Source notes
[Any attribution issues, off-record info, etc.]

### Multimedia status
- Photos: [ready/pending/needed]
- Graphics: [ready/pending/needed]
```

### Editor → Reporter

When returning for revision:

```markdown
## Edit notes: [story title]

**Overall:** [brief assessment - on track, needs work, etc.]

### Structural changes needed
- [Major reorg, missing elements, etc.]

### Specific fixes
- Line [X]: [issue/change]
- Line [X]: [issue/change]

### Questions to resolve
- [Question requiring reporter input]

### Deadline for revisions
[date/time]

### Discussion needed?
[Yes - let's talk before you revise / No - changes are clear]
```

## Publication checklist

### Pre-publish checklist

```markdown
## Pre-publish: [story title]

### Content
- [ ] Headline is accurate and compelling
- [ ] Dek/subhead summarizes well
- [ ] Lede works
- [ ] All facts verified
- [ ] All sources attributed correctly
- [ ] Quotes are accurate
- [ ] Numbers double-checked

### Style
- [ ] AP Style applied
- [ ] Consistent voice throughout
- [ ] No typos or grammatical errors
- [ ] Appropriate length

### Legal/Ethics
- [ ] No defamation risk
- [ ] Sources of comment contacted
- [ ] Corrections from previous versions applied
- [ ] Embargoes respected

### Multimedia
- [ ] Photos have captions and credits
- [ ] Alt text added
- [ ] Video/audio plays correctly
- [ ] Graphics are accurate

### Metadata
- [ ] SEO headline filled
- [ ] Meta description written
- [ ] Tags/categories applied
- [ ] Author byline correct
- [ ] Publication date/time set

### Final sign-off
- [ ] Reporter reviewed final
- [ ] Editor approved
- [ ] Copy editor signed off
```

### Post-publish checklist

```markdown
## Post-publish: [story title]

### Immediate (within 1 hour)
- [ ] Story displays correctly
- [ ] Links work
- [ ] Images load
- [ ] No obvious errors
- [ ] Social posts scheduled/published

### Same day
- [ ] Monitor comments/feedback
- [ ] Watch for corrections needed
- [ ] Track initial metrics
- [ ] Respond to any issues

### Follow-up
- [ ] Note any updates needed
- [ ] Document corrections made
- [ ] Capture reader response
- [ ] Plan follow-up stories if warranted
```

## Workflow documentation

### Process documentation template

For documenting your newsroom's workflows:

```markdown
## Workflow: [Name of process]

### Purpose
[What this workflow accomplishes]

### When to use
[Triggers for this workflow]

### Roles involved
| Role | Responsibility |
|------|----------------|
| [Role] | [What they do] |

### Process steps

**Step 1: [Name]**
- Owner: [role]
- Action: [what happens]
- Output: [what's produced]
- Next: [what triggers next step]

**Step 2: [Name]**
[same format]

### Tools used
- [Tool]: [what it's used for]

### Templates/Forms
- [Link to templates]

### Exceptions
- [When normal process doesn't apply]
- [What to do instead]

### Escalation
- [When to escalate]
- [Who to contact]
```

### Onboarding new staff

```markdown
## Editorial workflow onboarding

### Day 1
- [ ] Access to CMS granted
- [ ] Added to editorial chat/channels
- [ ] Received style guide
- [ ] Introduced to direct editor

### Week 1
- [ ] Shadow experienced reporter
- [ ] Review workflow documentation
- [ ] Complete first assignment (low-stakes)
- [ ] Learn deadline expectations

### Month 1
- [ ] Independently handle standard assignments
- [ ] Know escalation paths
- [ ] Understand publication calendar
- [ ] Comfortable with all tools

### Key contacts
| Need | Contact |
|------|---------|
| Assignment questions | [name] |
| Technical issues | [name] |
| Editorial disputes | [name] |
| HR/Admin | [name] |
```

---

*Good workflows disappear. You only notice them when they break.*


---

## journalism-core/skills/newsroom-style/SKILL.md

Source: https://raw.githubusercontent.com/jamditis/claude-skills-journalism/master/journalism-core/skills/newsroom-style/SKILL.md

---
name: newsroom-style
description: Enforce AP Style and newsroom conventions for journalism writing. Use when writing news articles, editing drafts, creating headlines, or converting notes into publishable copy. Ensures professional standards for attribution, numbers, dates, and formatting.
---

# Newsroom style guide

Write like a professional journalist. Follow AP Style. Keep it tight.

## When to use

- Writing news articles, briefs, or headlines
- Editing drafts for publication
- Converting interview notes into publishable copy
- Writing press releases or media advisories
- Creating social media posts for news content

## Core AP Style rules

### Numbers

| Rule | Example |
|------|---------|
| Spell out one through nine | "three witnesses" not "3 witnesses" |
| Use numerals for 10 and above | "15 people attended" |
| Always use numerals for ages | "a 5-year-old girl" |
| Always use numerals for percentages | AP allows the `%` symbol with numerals (`5%`) since 2019; some publications still spell out "percent" as house style |
| Always use numerals for addresses | "123 Main St." |
| Always use numerals for money | "$5 million" not "five million dollars" |
| Spell out first through ninth for ordinals | "first place" but "10th anniversary" |

**Exception:** Never start a sentence with a numeral. Rewrite or spell out.

### Titles and names

| Rule | Example |
|------|---------|
| Capitalize formal titles before names | "Mayor Jane Smith said..." |
| Lowercase titles after names | "Jane Smith, the mayor, said..." |
| Lowercase titles standing alone | "The mayor said..." |
| No courtesy titles on second reference | First: "Jane Smith." Second: "Smith" |
| Use full name on first reference | "Jane Smith" not "Smith" or "Ms. Smith" |

**Exceptions:**
- Use courtesy titles in obituaries
- Some publications use them for all subjects (house style)

### Attribution

| Do | Don't |
|----|-------|
| "said" | "stated," "remarked," "noted," "expressed" |
| Attribution after quote | Attribution before quote |
| At first natural pause | At awkward break |

**Examples:**

**Bad:** Mayor Smith stated, "We are committed to this project."

**Good:** "We are committed to this project," Mayor Smith said.

**Good:** "We are committed to this project," said Mayor Jane Smith, who has pushed for the development since 2022.

### Dates and times

**Months:**
- Abbreviate: Jan., Feb., Aug., Sept., Oct., Nov., Dec.
- Don't abbreviate: March, April, May, June, July
- Only abbreviate with specific dates: "Sept. 15" but "September 2025"

**Times:**
- Use figures with a.m./p.m.: "9 a.m." not "9:00 a.m."
- Noon and midnight: Use the words, not "12 p.m." or "12 a.m."
- Time ranges: "9 a.m. to 5 p.m." or "9-11 a.m."

**Days:**
- Capitalize days of the week
- Don't abbreviate except in tables
- Use "Tuesday" not "on Tuesday" when possible

### Common word choices

| Use | Instead of |
|-----|-----------|
| more than | over (for quantities) |
| fewer | less (for countable items) |
| less | fewer (for mass nouns) |
| that | which (for restrictive clauses) |
| which | that (for nonrestrictive clauses) |
| said | stated, remarked, noted |
| about | approximately |
| because | due to the fact that |

### Restrictive vs. nonrestrictive clauses

**Restrictive (essential, use "that"):**
> The bill that passed yesterday includes tax cuts.

(Which bill? The one that passed yesterday.)

**Nonrestrictive (extra info, use "which" + comma):**
> The bill, which passed yesterday, includes tax cuts.

(We already know which bill; the passage is extra info.)

## Formatting rules

### Paragraphs
- Keep paragraphs short: 1-3 sentences
- One idea per paragraph
- Break up long quotes into multiple paragraphs

### Headlines
- Use sentence case, not title case
- No periods at the end
- Use present tense for past events: "Council approves budget"
- Use infinitive for future events: "Mayor to announce plan"
- No exclamation points in hard news

### Quotation marks
- Periods and commas always go inside
- Colons and semicolons always go outside
- Question marks and exclamation points: inside if part of quote, outside if not

### Abbreviations
- Spell out on first reference, then abbreviate
- Don't use periods in most abbreviations: FBI, CIA, NATO
- State abbreviations: Use postal codes (NY, CA) only with full addresses; otherwise use AP abbreviations or spell out

## Ledes (opening paragraphs)

### The inverted pyramid
Most important information first. Answer the key questions:
- **Who** is involved?
- **What** happened?
- **When** did it happen?
- **Where** did it happen?
- **Why** did it happen? (if known)
- **How** did it happen? (if relevant)

### Lede length
- Aim for 35 words or fewer
- One sentence is ideal
- Focus on the news, not background

**Too long:**
> The city council, which has been debating the issue for several months and heard from dozens of residents at multiple public meetings, voted Tuesday night to approve a controversial new zoning ordinance that would allow high-rise buildings in the downtown area.

**Better:**
> The city council approved a zoning ordinance Tuesday that allows high-rise buildings downtown, ending months of debate.

### Types of ledes

**Hard news lede:**
> A fire killed three people in Northeast Philadelphia early Tuesday.

**Feature lede:**
> The last time Maria Rodriguez saw her mother, she promised to bring her to America.

**Question lede (use sparingly):**
> What happens when a city runs out of money?

## Quick reference card

### Before you publish

- [ ] Names spelled correctly and verified
- [ ] Titles correct and styled properly
- [ ] Numbers follow AP Style
- [ ] Attribution uses "said"
- [ ] Dates and times formatted correctly
- [ ] Paragraphs are short
- [ ] Lede is under 35 words
- [ ] No editorializing in news copy
- [ ] Sources are credible and named

### Red flags

- "Very" or "extremely" in news copy
- Exclamation points
- First-person pronouns (unless first-person piece)
- Unattributed opinions
- Passive voice hiding who did what
- Starting sentences with "There is" or "There are"

## Example transformations

**Before (informal notes):**
> Yesterday the Mayor said that he was "very excited" about the new $5,000,000 project that will create over 100 jobs.

**After (AP Style):**
> Mayor John Smith said Tuesday he was "very excited" about the $5 million project, which will create more than 100 jobs.

---

**Before:**
> The meeting started at 9:00 AM on Monday, October 14th, 2024.

**After:**
> The meeting began at 9 a.m. Monday, Oct. 14, 2024.

---

**Before:**
> 5 protesters were arrested at the rally.

**After:**
> Five protesters were arrested at the rally.

---

**Before:**
> Smith stated that he believed the project would be "important."

**After:**
> Smith said he believed the project would be "important."

## House style notes

Different publications have their own style guides that override AP Style. Common variations:

- Oxford comma (AP doesn't use it; many publications do — verify with your editor)
- Courtesy titles (AP doesn't use them; NYT does)
- Web style (AP merged "web site" to "website" in 2010; some legacy guides still split it)

**Always ask about house style before writing for a new publication.**

---

*Based on the Associated Press Stylebook. Check the current AP Stylebook (apstylebook.com) for updates and edge cases.*


---

## journalism-core/skills/story-pitch/SKILL.md

Source: https://raw.githubusercontent.com/jamditis/claude-skills-journalism/master/journalism-core/skills/story-pitch/SKILL.md

---
name: story-pitch
description: Craft effective story pitches for different publication types and formats. Use when pitching to editors, preparing query letters, or developing story angles. Includes templates for daily news, features, investigations, op-eds, and freelance queries.
---

# Story pitch guide

Good stories die in bad pitches. This skill covers pitch structure, angle development, and outlet-specific formatting.

## When to use

- Pitching stories to editors (internal or external)
- Developing freelance query letters
- Refining story angles before reporting
- Competing for assignment in a newsroom
- Proposal writing for grants or fellowships

## The pitch fundamentals

### What every pitch needs

1. **The hook**: Why should anyone care? Why now?
2. **The story**: What will you show/reveal/explain?
3. **The evidence**: What do you have? What can you get?
4. **The access**: Who will you talk to? What will you see?
5. **The ask**: What do you need (time, budget, resources)?

### The "so what" test

Before pitching, answer:
- **Why this story?** (significance)
- **Why now?** (timeliness/news hook)
- **Why you?** (access, expertise, angle)
- **Why this outlet?** (audience fit)

If you can't answer all four, you're not ready to pitch.

## Pitch templates by type

### Daily news pitch

For quick-turn stories to assignment editors.

```markdown
**Slug:** [2-3 word identifier]
**Pitch:** [One sentence: What's the news?]
**Why now:** [What makes this timely?]
**Sources:** [Who you'll talk to]
**Timeline:** [When you can file]
**Format:** [Length, multimedia]

Example:
**Slug:** Council-Budget-Vote
**Pitch:** City council votes tonight on controversial police budget increase.
**Why now:** Final vote after months of debate, protests expected.
**Sources:** Council president, protest organizers, police union rep.
**Timeline:** File by 10pm for morning.
**Format:** 600 words + photos from hearing.
```

### Feature pitch

For longer-form stories with more development time.

```markdown
## [Working title]

**The story in one sentence:**
[What is this story about?]

**The hook:**
[Why should readers care? What's the emotional/intellectual entry point?]

**What's new:**
[What do you know/have that hasn't been told?]

**The shape:**
[How will you tell it? Narrative structure, key scenes, characters]

**Sources and access:**
[Who will you interview? What will you witness? Documents?]

**Visuals:**
[Photo opportunities, graphics, multimedia]

**Timeline and resources:**
[How long to report? Write? What do you need?]

**Why me:**
[Your connection to story, relevant expertise, access]

Example:

## The last ferry captain

**The story in one sentence:**
After 47 years, the last original captain of the Staten Island Ferry is retiring—and taking decades of institutional knowledge with him.

**The hook:**
8 million New Yorkers depend on this ferry. Most have never met the people who run it. Captain Mike Carbone has seen mayors come and go, survived 9/11 from the water, and trained every current captain. His retirement is the end of an era.

**What's new:**
No one has profiled the ferry crews since the 2003 accident. Carbone has agreed to a ride-along on his final week. He's kept a journal since 1977.

**The shape:**
Narrative profile. Open with his final departure. Flash back through career highlights. Include voices from crew, family, passengers he's befriended across decades.

**Sources and access:**
- Carbone (confirmed, ride-along approved)
- NYC DOT ferry division chief
- Other captains he's trained
- Regular commuters
- His family

**Visuals:**
Photographer on ride-along. Harbor shots at dawn. Carbone's home with memorabilia. Archive photos from his collection.

**Timeline and resources:**
2 weeks reporting, 1 week writing. Need photographer availability for 3 early mornings.

**Why me:**
I grew up taking this ferry and have always wanted to tell this story. I've already built rapport with Carbone through initial conversations.
```

### Investigation pitch

For accountability journalism requiring significant resources.

```markdown
## [Working title]

**The thesis:**
[What we can prove / what we suspect]

**Why it matters:**
[Impact: Who is harmed? How much money? How many people?]

**What we have:**
[Documents, sources, data already obtained]

**What we need:**
[Additional reporting required]

**Key sources:**
[Who will talk? On/off record? Whistleblowers?]

**Documentary evidence:**
[FOIA requests needed? Court records? Financial filings?]

**Legal considerations:**
[Defamation risk? Source protection needs?]

**Competitive risk:**
[Is anyone else on this? Why now?]

**Timeline:**
[Realistic assessment of time to report, write, edit, legal review]

**Resources needed:**
[FOIA costs, travel, data analysis, graphics, multimedia]

**Publication plan:**
[Single story? Series? Rolling publication?]

Example:

## State contracts going to insiders

**The thesis:**
More than $50 million in state construction contracts across five years went to companies with personal ties to procurement officials, circumventing competitive bidding.

**Why it matters:**
Taxpayers are overpaying for public projects. At least three bridges have needed early repairs after work by connected contractors.

**What we have:**
- State contract database (scraped, analyzed)
- Corporate filings showing ownership connections
- Two former procurement employees willing to talk (one on record)
- Email chain showing official steering business to friend

**What we need:**
- Additional FOIA for internal communications
- More contractors willing to describe losing bids unfairly
- Engineering review of the bridge repair patterns
- Response from officials named

**Key sources:**
- Whistleblower A (on record, documented complaint)
- Whistleblower B (background only, fears retaliation)
- Contractor who lost bids (on record)
- Engineering expert for bridge assessment
- Officials (will request comment before publication)

**Documentary evidence:**
- Contract awards (public, obtained)
- Corporate filings (public, obtained)
- Internal emails (FOIA pending)
- Inspection reports (FOIA pending)

**Legal considerations:**
All claims will be documented. We'll seek comment from everyone named. Standard defamation review needed.

**Competitive risk:**
Local TV did a segment on one bridge last year but didn't connect the pattern. This is a deeper investigation.

**Timeline:**
8-10 weeks total. 6 weeks additional reporting, 2 weeks writing/editing, 2 weeks legal/response period.

**Resources needed:**
$2,000 FOIA costs, data analysis support, one reporting trip to state capital.

**Publication plan:**
Main story (3,000 words) + database for readers to search contracts + methodology box.
```

### Op-ed pitch

For opinion/commentary pieces.

```markdown
Subject: Op-ed submission: [Headline]

Dear [Editor name],

[One paragraph: What's your argument? Why now?]

[One paragraph: Why are you qualified to make this argument?]

[One paragraph: Why is this right for your publication's audience?]

The piece is [word count] words and is exclusive to [publication].

[Your name]
[Credentials/bio]
[Contact info]

---

Example:

Subject: Op-ed submission: School board's DEI cuts will hurt all students

Dear Opinion Editor,

When the Westfield school board votes Tuesday to eliminate diversity coordinators, they won't just hurt minority students—they'll deprive every student of the skills employers demand. I've spent 20 years in HR at Fortune 500 companies, and I can tell you: businesses want graduates who can work across difference. This decision makes our kids less competitive.

As the former Chief People Officer at [Company] and a Westfield parent, I've seen both sides of this issue. I'm not an activist; I'm a business leader who knows what the job market requires.

Your editorial page has covered school budget debates extensively. Your readers—many of them parents in our district—need to hear from someone who can translate business needs into educational priorities.

The piece is 750 words and is exclusive to [Publication].

Jane Smith
Former CPO, [Company]
Westfield School District parent
jane@email.com / 555-0123
```

### Freelance query letter

For pitching to publications you don't work for.

```markdown
Subject: Pitch: [Compelling headline]

Dear [Editor name],

[Opening hook—the most compelling detail or question from your story]

[What the story is, who it's about, what you'll show]

[Why now—the news hook or timely angle]

[What you have—sources confirmed, access secured, documents obtained]

[Why this publication—how it fits their coverage, audience]

[Why you—relevant clips, expertise, access]

I estimate [word count] words and can deliver in [timeframe].

Thank you for your consideration.

[Your name]
[Brief bio]
[Links to 2-3 relevant clips]
[Contact info]

---

Example:

Subject: Pitch: The nurse who tracks fake diplomas

Dear [Editor],

Maria Chen has caught 47 nurses with fake degrees in three years. None of them through background checks—through a spreadsheet she maintains in her free time.

Chen, a nursing supervisor at a rural Oklahoma hospital, started her database after discovering a colleague had purchased credentials from a diploma mill. State nursing boards, she found, rarely verify foreign credentials thoroughly. Her volunteer work has exposed a patient safety gap that regulators have ignored.

Her story comes as Oklahoma debates licensure reform this session—a bill she's testified for and the hospital lobby has opposed. The vote is in six weeks.

I've interviewed Chen twice, reviewed her database and documentation, and spoken with three of the fraudulent nurses she identified (two on background). The state nursing board has agreed to comment.

This fits [Publication]'s healthcare accountability coverage. Your recent piece on physician oversight touched on similar regulatory gaps.

I've covered healthcare regulation for [outlets] and have sources at several state nursing boards. My recent piece on travel nurse agencies for [outlet] is attached.

I estimate 2,500 words and can deliver in four weeks.

Thank you for your consideration.

[Name]
Freelance health reporter
[Clip links]
[Contact]
```

## Developing the angle

### Finding the hook

Ask yourself:
- What's the **conflict**? (Who's fighting whom?)
- What's the **tension**? (What's at stake?)
- What's the **surprise**? (What will readers not expect?)
- What's the **emotion**? (What will readers feel?)
- What's the **question**? (What don't we know?)

### The "dinner table" test

Can you explain this story in one sentence to someone at dinner?

**Too vague:** "It's about problems with the foster care system."

**Too inside baseball:** "It's about how HHS regulations from 2018 created incentive misalignment in Title IV-E funding."

**Just right:** "Kids in foster care are being moved to different homes so often that some have attended 10 schools in one year—and no one's tracking the damage."

### Angle versus topic

| Topic | Angle |
|-------|-------|
| Homelessness | The family that's been on the housing waitlist for 3 years |
| Climate change | The town that's already moving because of rising seas |
| Healthcare costs | The insulin price that tripled while the patent was extended |
| Education | The teacher who's spent $10k of her own money on supplies |

**Topic** is what you're covering. **Angle** is how you're covering it.

## Common pitch mistakes

### The information dump
**Wrong:** "There's a lot going on with the school board. They've had budget issues, enrollment decline, a superintendent search, and facilities problems. I want to cover all of it."

**Better:** "The superintendent search is down to two finalists with opposite visions for the district. I'll profile both and explain what's at stake."

### The missing news hook
**Wrong:** "Homelessness is a growing problem in our city."

**Better:** "The city's eviction filings hit a five-year high last month. Here's what's driving it."

### The vague access
**Wrong:** "I'll talk to homeless people and officials."

**Better:** "I've been following one family through the shelter system for two months. The housing director has agreed to an interview."

### The no-stakes pitch
**Wrong:** "The museum is having an exhibit on local history."

**Better:** "The museum's new exhibit includes artifacts a local family claims were stolen during redevelopment. The family wants them back."

## After the pitch

### If accepted
- Clarify deadline, length, edit process
- Confirm kill fee (for freelance)
- Get editor's preferred contact method
- Ask about style guide, multimedia needs

### If rejected
- Ask for feedback (briefly, politely)
- Ask if there's a different angle that would work
- Keep relationship warm for future pitches

### If silence
- Follow up once after 1-2 weeks
- If still nothing, you can pitch elsewhere (unless exclusive)
- Don't take it personally—editors are overwhelmed

---

*The pitch sells the story. The story sells itself after that.*
