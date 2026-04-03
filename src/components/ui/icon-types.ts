// src/components/ui/icon-types.ts
// Exported separately because `export type` unions in .astro frontmatter
// cause esbuild parse errors. Import from here instead.

export type IconName =
  | 'arrow-right'
  | 'arrow-up-right'
  | 'chevron-down'
  | 'mail'
  | 'linkedin'
  | 'github'
  | 'figma'
  | 'external-link'
  | 'check'
  | 'code'
  | 'design'
  | 'database'
  | 'tool'
  | 'scroll'
  | 'menu'
  | 'close'
  | 'star';
