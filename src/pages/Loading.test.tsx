import { render, screen } from "@testing-library/react";
import { LoadingPage } from "./Loading";

describe("Loading", () => {
  test("renders the Loading page", async () => {
    render(<LoadingPage />);
    const activeMessage = await screen.findAllByRole("loading");
    expect(activeMessage).toHaveLength(1);
  });
});