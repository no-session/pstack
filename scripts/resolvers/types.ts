export type Host = 'claude' | 'codex';

export interface HostPaths {
  skillRoot: string;
  localSkillRoot: string;
  binDir: string;
  browseDir: string;
  designDir: string;
}

export const HOST_PATHS: Record<Host, HostPaths> = {
  claude: {
    skillRoot: '~/.claude/skills/pstack',
    localSkillRoot: '.claude/skills/pstack',
    binDir: '~/.claude/skills/pstack/bin',
    browseDir: '~/.claude/skills/pstack/browse/dist',
    designDir: '~/.claude/skills/pstack/design/dist',
  },
  codex: {
    skillRoot: '$PSTACK_ROOT',
    localSkillRoot: '.agents/skills/pstack',
    binDir: '$PSTACK_BIN',
    browseDir: '$PSTACK_BROWSE',
    designDir: '$PSTACK_DESIGN',
  },
};

export interface TemplateContext {
  skillName: string;
  tmplPath: string;
  benefitsFrom?: string[];
  host: Host;
  paths: HostPaths;
  preambleTier?: number;  // 1-4, controls which preamble sections are included
}
