**Content primitives** — Card, Badge, Tag, Eyebrow, Stat.

```jsx
<Eyebrow index="02">The Salvo Method</Eyebrow>

<Card variant="sticker" tone="default">
  <h3>Product Sprint</h3>
  <p>Months of debate, settled in a week.</p>
</Card>
<Card variant="soft">…</Card>
<Card variant="sticker" tone="ink" as="a" href="#">Dark feature card</Card>

<Badge tone="signal">New</Badge>
<Badge tone="success" variant="soft" dot>Booked</Badge>

<Tag active>Facilitation</Tag>
<Tag onRemove={() => {}}>Strategy</Tag>

<Stat value="Days" label="Idea → tested prototype" />
```

- **Card** `variant`: `sticker` (signature, hard shadow) · `soft` · `flat`. `tone`: `default/paper/ink/signal/volt`. Make it a link with `as="a"` or set `interactive` for hover lift.
- **Eyebrow** is the mono kicker — pair it above every section heading.
- **Badge** for status; **Tag** for filters/topics; **Stat** for proof points.
