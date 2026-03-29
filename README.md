# pstack

**The solo founder's AI engineering stack.** Fork of [gstack](https://github.com/garrytan/gstack), rebuilt for bootstrappers, indie hackers, and solo entrepreneurs who want to ship fast and quit their day job.

gstack is built for VC-backed startups with teams. pstack is built for you — one person, one product, one goal: revenue.

## Philosophy

> Ship the 80% that makes money. The other 20% is earned by paying customers.

pstack turns Claude Code into a virtual engineering team — except you're the CEO, CTO, designer, and engineer all at once. It gives you a product thinker who challenges your ideas, a designer who catches AI slop, a security officer who finds holes before hackers do, a reviewer who catches production bugs, a QA lead who opens a real browser, and a release engineer who pushes to production.

When you're solo, you need MORE roles, not fewer. There's nobody else checking your work.

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

## Skills (29)

### Think
| Skill | What it does |
|-------|-------------|
| `/office-hours` | Start here. Forces you to articulate the problem, find the narrowest wedge, validate before building. |
| `/plan-ceo-review` | Challenge your own plan. Find the 10-star product hiding inside the idea. |
| `/plan-eng-review` | Lock architecture, data flow, edge cases. Catch problems before they become code. |
| `/plan-design-review` | Rate design dimensions 0-10, explain what a 10 looks like, fix the plan. |
| `/autoplan` | Run CEO + design + eng review in one command. Fully reviewed plan, one shot. |

### Design
| Skill | What it does |
|-------|-------------|
| `/design-consultation` | Build a complete design system. Research the landscape, propose typography, color, layout. |
| `/design-review` | Find and fix visual issues, spacing, hierarchy, AI slop — with atomic commits. |
| `/design-shotgun` | Generate multiple design variants, open a comparison board, iterate until you like one. |

### Build & Debug
| Skill | What it does |
|-------|-------------|
| `/investigate` | Systematic debugging. No fixes without root cause. Traces data flow, tests hypotheses. |
| `/codex` | Second opinion from OpenAI Codex. Independent code review, adversarial challenges, consultations. |

### Review & Test
| Skill | What it does |
|-------|-------------|
| `/review` | Pre-ship code review. SQL safety, trust boundaries, structural issues. Auto-fixes obvious ones. |
| `/cso` | Security audit. OWASP Top 10, STRIDE threat model, dependency supply chain, secrets check. |
| `/qa` | Test your app in a real browser. Find bugs, fix them, generate regression tests. |
| `/qa-only` | Same as `/qa` but report-only. Bug reports without code changes. |
| `/browse` | Give the agent eyes. Real Chromium browser, real clicks, real screenshots. ~100ms per command. |
| `/connect-chrome` | Launch your real Chrome controlled by pstack. Watch every action live. |
| `/setup-browser-cookies` | Import cookies from your browser into the headless session. Test authenticated pages. |
| `/benchmark` | Core Web Vitals, page load times, bundle sizes. Before/after on every change. |

### Ship & Monitor
| Skill | What it does |
|-------|-------------|
| `/ship` | Push, deploy, done. Tests, changelog, version bump — one command. |
| `/land-and-deploy` | Merge, wait for deploy, verify production health. |
| `/canary` | Post-deploy monitoring. Watches for console errors, perf regressions, page failures. |
| `/setup-deploy` | One-time deploy configuration. Detects your platform automatically. |
| `/document-release` | Auto-update all docs to match what you just shipped. Catches stale READMEs. |

### Reflect
| Skill | What it does |
|-------|-------------|
| `/retro` | Weekly retro. What did you ship, commit patterns, code quality trends, shipping streaks. |

### Safety
| Skill | What it does |
|-------|-------------|
| `/careful` | Warns before destructive commands. Say "be careful" to activate. |
| `/freeze` | Restrict edits to one directory. Prevents accidental changes elsewhere. |
| `/guard` | `/careful` + `/freeze` combined. Maximum safety for prod work. |
| `/unfreeze` | Remove the freeze boundary. |
| `/pstack-upgrade` | Upgrade pstack to latest version. |

## Quick Start

Requirements: [Claude Code](https://docs.anthropic.com/en/docs/claude-code), [Git](https://git-scm.com/), [Bun](https://bun.sh/) v1.0+

```bash
git clone --single-branch --depth 1 https://github.com/pawan/pstack.git ~/.claude/skills/pstack
cd ~/.claude/skills/pstack && ./setup
```

Then in Claude Code:
1. Run `/office-hours` — describe what you're building
2. Run `/review` on your code
3. Run `/qa` on your staging URL
4. Run `/ship` to deploy

Think → Build → Review → Ship. That's the whole workflow.

## License

MIT — same as gstack. Fork it. Make it yours.

## Credits

Built on top of [gstack](https://github.com/garrytan/gstack) by Garry Tan.
Adapted for the bootstrapper community.
