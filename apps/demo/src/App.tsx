import { Badge, Button } from "@tsup/design-system/components";

import "@tsup/design-system/styles.css";

function App() {
  return (
    <div className="container">
      <h1>Design Sysem Demo</h1>
      <div>
        <h2>Badge</h2>
        <Badge variant="primary">Primary</Badge>
      </div>
      <div>
        <h2>Button</h2>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
      </div>
    </div>
  );
}

export default App;
