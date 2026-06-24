**BurstMark** — the Salvo burst symbol alone (no wordmark). The brand mark; never use it as an inline UI icon (use Lucide for those).

```jsx
<BurstMark tone="signal" size={40} />   {/* primary, on light */}
<BurstMark tone="ink" size={40} />      {/* monochrome */}
<BurstMark tone="paper" size={40} />    {/* on dark bg (volt core) */}
<BurstMark tone="volt" size={40} />     {/* on dark bg (paper core) */}
```

- `tone`: `signal` · `ink` · `paper` · `volt`. `size`: pixels (square).
- Renders inline SVG so it inherits crisp color in any context.
