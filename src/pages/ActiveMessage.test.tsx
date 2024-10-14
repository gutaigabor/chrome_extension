import { render, screen } from "@testing-library/react";
import { ActiveMessage } from "./ActiveMessage";

describe("Active message", () => {
  test("renders the Active Message", async () => {
    render(<ActiveMessage
      content="test"
      dateStr=""
      onClick={() => {}}
    />);
    const activeMessage = await screen.findAllByRole("active-message");
    expect(activeMessage).toHaveLength(1);
  });

  test("renders the icon image", async () => {
    const { getByAltText } = render(
    <ActiveMessage
      content="test"
      dateStr=""
      onClick={() => {}}
    />);
    const image = getByAltText('User Avatar');
    expect(image).not.toBeNull()
  });
});