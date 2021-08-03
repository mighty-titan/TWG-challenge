import { render } from "@testing-library/react";
import SearchModal from './index';

describe("Search modal test scenario", () => {
  it("renders heading DIRECT REQUEST", () => {
    const { getByText } = render(<SearchModal isOpen />);
    expect(getByText("DIRECT REQUEST")).toBeInTheDocument();
  });
});