**Navigation** — Tabs (segmented pills) and Accordion (ink-ruled expander).

```jsx
<Tabs
  items={[{id:'consult',label:'Consulting'},{id:'work',label:'Workshops'}]}
  defaultValue="consult"
  onChange={(id) => setView(id)}
/>

<Accordion
  items={[
    {id:'q1', title:'How long is a sprint?', content:'Five focused days.'},
    {id:'q2', title:'Remote or in person?', content:'Both — we run either.'},
  ]}
  defaultOpen={['q1']}
/>
```

- **Tabs** `tone`: `ink` (default) or `signal` for the active pill. Controlled via `value`/`onChange` or uncontrolled via `defaultValue`.
- **Accordion** is single-open by default; pass `allowMultiple` to keep several open. Great for FAQ and services lists.
