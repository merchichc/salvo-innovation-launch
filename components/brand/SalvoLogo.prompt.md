**SalvoLogo** — the brand logo lockup (burst mark + "SALVO" set live in Space Grotesk). Use for headers, footers, splash, and anywhere the real logo is needed.

```jsx
<SalvoLogo tone="ink" size={36} />            {/* full lockup on light bg */}
<SalvoLogo tone="paper" size={32} />          {/* on dark/ink bg */}
<SalvoLogo variant="mark" tone="signal" size={48} />   {/* symbol only */}
<SalvoLogo variant="wordmark" tone="ink" />   {/* wordmark only */}
```

- `variant`: `"lockup"` (default) · `"mark"` · `"wordmark"`.
- `tone`: `"ink"` / `"signal"` on light, `"paper"` on dark.
- Prefer this over the `wordmark-*.svg` assets — those don't render Space Grotesk when used via `<img>`.
- The mark on its own is also available as `<BurstMark tone size />`.
