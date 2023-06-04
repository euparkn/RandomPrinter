import { render, screen } from "@testing-library/react";

import { RecoilRoot } from "recoil";

import App from "../pages/App";

Element.prototype.scrollTo = jest.fn();

test("Render App", () => {
  render(
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
  expect(screen.getByTestId("app")).toBeInTheDocument();
});
