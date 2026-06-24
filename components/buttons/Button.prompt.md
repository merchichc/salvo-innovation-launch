**Button** — the primary action element. Pill-shaped with the signature hard ink shadow; lifts on hover and presses *into* its shadow on click.

```jsx
<Button variant="primary" size="lg">Book a salvo</Button>
<Button variant="secondary">See the formats</Button>
<Button variant="ink">Get in touch</Button>
<Button variant="volt">Start free</Button>
<Button variant="ghost">Learn more</Button>
<Button as="a" href="/contact" iconRight={<ArrowIcon/>}>Contact</Button>
```

- `variant`: `primary` (signal) · `secondary` (white+border) · `ink` · `volt` · `ghost` (no shadow).
- `size`: `sm` · `md` · `lg`. `fullWidth` to stretch.
- **IconButton** is the square sibling: `<IconButton label="Menu"><MenuIcon/></IconButton>`.
- Use `primary` for the one main action per view; `ghost` for tertiary/inline.
