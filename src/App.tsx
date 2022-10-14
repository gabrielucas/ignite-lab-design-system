import "./styles/global.css";
import { Text } from "./components/Text";
import { Button } from "./components/Button";
import { Heading } from "./components/Heading";

export const App = () => (
  <>
    <Heading>Hello, world!</Heading>
    <Text children="Hello, world" />
    <Button children="Submit" />
  </>
);
