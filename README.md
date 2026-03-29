# pstack

**The solo founder's AI engineering stack.** Fork of [gstack](https://github.com/garrytan/gstack), rebuilt for bootstrappers, indie hackers, and solo entrepreneurs who ship fast and charge money.

gstack is built for VC-backed startups with teams. pstack is built for you — one person, one product, one goal: revenue.

## Philosophy

> Ship the 80% that makes money. The other 20% is earned by paying customers.

AI compresses everything except the hard part: figuring out what people will pay for. pstack is optimized for getting you to that answer as fast as possible.

When you're solo, you need MORE roles, not fewer. There's nobody else checking your work. pstack gives you a product thinker, a designer, a security officer, a code reviewer, a QA tester, and a release engineer — all running in your terminal.

Read the full philosophy: [ETHOS.md](./ETHOS.md)

## Who This Is For

- **Solo founders** building their first (or fifth) SaaS
- **Indie hackers** who want to go from idea to paying customers fast
- **Side-project builders** who want to quit their day job
- **Bootstrappers** who think VC funding is optional (or undesirable)

## What's Different from gstack

| gstack | pstack |
|--------|--------|
| "Boil the lake" — do the complete thing | Ship what makes money, iterate on what gets traction |
| VC-backed startup framing | Bootstrapper / indie hacker framing |
| Team retros with per-person breakdowns | Solo retros — what did I ship, what's my velocity |
| Assumes PR workflows | Push to main, deploy, done |

## The Loop

This is how solo founders ship. Follow the numbers.

```
 1. VALIDATE ──→ 2. PLAN ──→ 3. BUILD ──→ 4. REVIEW ──→ 5. SHIP ──→ 6. MONITOR ──→ 7. REFLECT
      │                                                                                    │
      └────────────────────────────── kill it or loop back ────────────────────────────────┘
```

### Step 1: Validate — Is this worth building?

Before you write a single line of code, answer: will someone pay for this?

| Skill | What it does |
|-------|-------------|
| `/office-hours` | **Start here.** Six forcing questions that expose demand reality. Find the narrowest wedge. GO / KILL / PIVOT decision at the end. |

If `/office-hours` says kill, kill it. Move to the next idea. Speed of killing bad ideas is your edge.

### Step 2: Plan — Lock it down, then build

One shot to review the plan from every angle before writing code.

| Skill | What it does |
|-------|-------------|
| `/autoplan` | **One command.** Runs CEO + design + eng review back-to-back. Fully reviewed plan, one shot. |
| `/plan-ceo-review` | Challenge your own strategy. Is this a painkiller or a vitamin? Find the 10-star version. |
| `/plan-design-review` | Rate design dimensions 0-10, explain what a 10 looks like, fix the plan. |
| `/plan-eng-review` | Lock architecture, data flow, edge cases. Catch problems before they become code. |

Solo founders: run `/autoplan` and move on. Don't over-plan. The plan is a hypothesis — shipping is the experiment.

### Step 3: Build — Write code, debug, get a second opinion

Build fast. Use the simplest thing that works. Debug systematically when it breaks.

| Skill | What it does |
|-------|-------------|
| `/investigate` | Systematic debugging. No fixes without root cause. Traces data flow, tests hypotheses. |
| `/codex` | Second opinion from OpenAI Codex. Independent code review, adversarial challenges. |
| `/design-consultation` | Build a design system from scratch. Typography, color, layout — research the landscape first. |
| `/design-shotgun` | Generate multiple design variants, open a comparison board, pick the winner. |

### Step 4: Review — Catch what you missed

You're shipping alone. These are your code reviewer, security officer, QA lead, and performance engineer.

| Skill | What it does |
|-------|-------------|
| `/review` | Pre-ship code review. SQL safety, trust boundaries, structural issues. Auto-fixes obvious ones. |
| `/cso` | Security audit. OWASP Top 10, STRIDE model, dependency supply chain, secrets check. |
| `/design-review` | Find and fix visual issues, spacing, hierarchy, AI slop — with atomic commits. |
| `/qa` | Test your app in a real browser. Find bugs, fix them, generate regression tests. |
| `/qa-only` | Same as `/qa` but report-only. Bug reports without touching your code. |
| `/benchmark` | Core Web Vitals, page load times, bundle sizes. Before/after on every change. |

### Step 5: Ship — Push to production

One command. Tests, changelog, version bump, deploy. Done.

| Skill | What it does |
|-------|-------------|
| `/ship` | **The main event.** Push, deploy, done. One command to production. |
| `/land-and-deploy` | Merge, wait for deploy, verify production health. |
| `/setup-deploy` | One-time setup. Detects your platform (Vercel, Railway, Fly, etc.) automatically. |
| `/document-release` | Auto-update all docs to match what you just shipped. Catches stale READMEs. |

### Step 6: Monitor — Make sure it works in prod

You shipped. Now watch it. Console errors, perf regressions, page failures.

| Skill | What it does |
|-------|-------------|
| `/canary` | Post-deploy monitoring loop. Watches for errors, regressions, page failures. |
| `/browse` | Give the agent eyes. Real Chromium browser, real clicks, real screenshots. ~100ms per command. |
| `/connect-chrome` | Launch your real Chrome controlled by pstack. Watch every action live. |

### Step 7: Reflect — What did you ship? What's next?

Weekly. Look at what you shipped, your velocity, your patterns. Then decide: keep iterating, pivot, or kill this and start the loop again.

| Skill | What it does |
|-------|-------------|
| `/retro` | Weekly retro. What did you ship, commit patterns, code quality trends, shipping streaks. |

If the product isn't getting traction after 2-3 loops, go back to Step 1 with a new idea. Kill fast, move fast.

### Utilities

Always available. Not part of the loop — they protect you while you're in it.

| Skill | What it does |
|-------|-------------|
| `/careful` | Warns before destructive commands. Say "be careful" to activate. |
| `/freeze` | Restrict edits to one directory. Prevents accidental changes elsewhere. |
| `/guard` | `/careful` + `/freeze` combined. Maximum safety for prod work. |
| `/unfreeze` | Remove the freeze boundary. |
| `/setup-browser-cookies` | Import cookies from your browser into the headless session. Test authenticated pages. |
| `/pstack-upgrade` | Upgrade pstack to latest version. |

## Quick Start

Requirements: [Claude Code](https://docs.anthropic.com/en/docs/claude-code), [Git](https://git-scm.com/), [Bun](https://bun.sh/) v1.0+

```bash
git clone --single-branch --depth 1 https://github.com/no-session/pstack.git ~/.claude/skills/pstack
cd ~/.claude/skills/pstack && ./setup
```

Then in Claude Code:
```
/office-hours     — describe what you're building (Step 1)
/autoplan         — review the plan from every angle (Step 2)
  ... build ...   — write code (Step 3)
/review           — catch bugs before they ship (Step 4)
/qa               — test in a real browser (Step 4)
/ship             — push to production (Step 5)
/canary           — make sure it works (Step 6)
/retro            — what did I ship this week? (Step 7)
```

Validate → Plan → Build → Review → Ship → Monitor → Reflect. Kill or loop back. That's the whole workflow.

## License

MIT — same as gstack. Fork it. Make it yours.

## Credits

Built on top of [gstack](https://github.com/garrytan/gstack) by Garry Tan.
Adapted for the solo founder community.
