**Form fields** — Input, Textarea, Select. Mono uppercase labels, 2px ink borders, and a signal hard-shadow on focus.

```jsx
<Input id="name" label="Your name" placeholder="Jane Marlow" />
<Input id="email" label="Work email" type="email"
       error="Enter a valid email" />
<Textarea id="brief" label="What's stuck?" rows={4}
          placeholder="Tell us about your product…" />
<Select id="team" label="Team size">
  <option>Just me</option>
  <option>2–10</option>
  <option>11–50</option>
  <option>50+</option>
</Select>
```

- All take `label`, `hint`, and `error` (error also marks the field invalid).
- Labels render in mono uppercase to match the eyebrow voice.
