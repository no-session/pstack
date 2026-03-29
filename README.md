# pstack

**The solo founder's AI engineering stack.** Fork of [gstack](https://github.com/pawan/pstack), rebuilt for bootstrappers, indie hackers, and solo entrepreneurs who want to ship fast and quit their day job.

gstack is built for VC-backed startups with teams. pstack is built for you — one person, one product, one goal: revenue.

## Philosophy

> Ship the 80% that makes money. The other 20% is earned by paying customers.

pstack turns Claude Code into a virtual co-founder — a product thinker who challenges your ideas, a designer who catches AI slop, a reviewer who finds production bugs, a QA lead who opens a real browser, and a release engineer who pushes to production. No PRs to yourself. No staging environments. No JIRA tickets. Just ship.

Read the full philosophy: [ETHOS.md](./ETHOS.md)

## Who This Is For

- **Solo founders** building their first (or fifth) SaaS
- **Indie hackers** who want to go from idea to paying customers fast
- **Side-project builders** who want to quit their day job
- **Bootstrappers** who think VC funding is optional (or undesirable)

## What's Different from gstack

| gstack | pstack |
|--------|--------|
| "Boil the lake" — do the complete thing | Ship the thing that makes money |
| PR workflows, team retros, per-person breakdowns | Push to main, deploy, check production |
| OWASP/STRIDE security audits | Sensible security defaults |
| Cross-model second opinions (Codex) | One model, ship fast |
| Microservices-ready architecture | Monolith until it hurts |
| 28 skills | 19 focused skills |

## Skills

### Think
| Skill | What it does |
|-------|-------------|
| `/office-hours` | Start here. Forces you to articulate the problem, find the narrowest wedge, and validate before building. |
| `/plan-ceo-review` | Challenge your own plan. Find the 10-star product hiding inside the idea. |
| `/plan-eng-review` | Lock architecture, data flow, edge cases. Catch problems before they become code. |
| `/plan-design-review` | Rate design dimensions 0-10, explain what a 10 looks like, fix the plan. |

### Build
| Skill | What it does |
|-------|-------------|
| `/design-consultation` | Build a complete design system. Research the landscape, propose typography, color, layout. |
| `/design-review` | Find and fix visual issues, spacing, hierarchy, AI slop — with atomic commits. |
| `/investigate` | Systematic debugging. No fixes without root cause. Traces data flow, tests hypotheses. |

### Review & Test
| Skill | What it does |
|-------|-------------|
| `/review` | Pre-ship code review. SQL safety, trust boundaries, structural issues. Auto-fixes obvious ones. |
| `/qa` | Test your app in a real browser. Find bugs, fix them, generate regression tests. |
| `/qa-only` | Same as `/qa` but report-only. Bug reports without code changes. |
| `/browse` | Give the agent eyes. Real Chromium browser, real clicks, real screenshots. |

### Ship
| Skill | What it does |
|-------|-------------|
| `/ship` | Push, deploy, done. Tests, changelog, version bump — one command. |
| `/land-and-deploy` | Merge, wait for deploy, verify production health. |
| `/setup-deploy` | One-time deploy configuration. Detects your platform automatically. |

### Safety
| Skill | What it does |
|-------|-------------|
| `/careful` | Warns before destructive commands. Say "be careful" to activate. |
| `/freeze` | Restrict edits to one directory. Prevents accidental changes elsewhere. |
| `/guard` | `/careful` + `/freeze` combined. Maximum safety for prod work. |
| `/unfreeze` | Remove the freeze boundary. |

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

That's the whole workflow. Think → Build → Review → Ship.

## License

MIT — same as gstack. Fork it. Make it yours.

## Credits

Built on top of [gstack](https://github.com/pawan/pstack) by Garry Tan. 
Adapted for the bootstrapper community.
