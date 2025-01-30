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

1. Install dependencies:

   ```bash
   npm install
   ```

## Development

To develop design-system and demo app with hot reload:

1. Start the demo app development server:

```bash
npm run start
```

2. Start the design system development server:

```bash
npm run dev
```

This will start the development server for both the design system and demo application.

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
