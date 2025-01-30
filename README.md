# TSUP with CSS Modules

A monorepo showcasing a design system built with TypeScript, React, and CSS Modules, bundled using tsup.

## Repository Structure

```
├── packages/
│   └── design-system/     # Design system package
└── apps/
    └── demo/             # Demo application showcasing
```

## Getting Started

Install dependencies:

```bash
npm install
```

## Development

To develop design-system and demo app with hot reload:

```bash
npm run dev
```

This will start the development server for both the design system and demo application.

## Build

To build the design system and demo app:

```bash
npm run build
```

This will build both the design system and demo application.

## Usage

Components can be imported from the design system package along with their tokens styles:

```tsx
import { Button, Badge } from "@tsup/design-system/components";
import "@tsup/design-system/styles.css";

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Badge variant="primary">New</Badge>
    </div>
  );
}
```

## License

MIT
