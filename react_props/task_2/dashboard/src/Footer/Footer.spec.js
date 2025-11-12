
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";
import { getCurrentYear } from "../utils/utils";

describe("Footer Component", () => {
  it("p element renders the string Copyright {the current year} - Holberton School, whenever the getFooterCopy() isIndex argument is set to true", () => {
    render(<Footer isIndex={true} />);
    
    const expectedText = `Copyright ${getCurrentYear()} - Holberton School`;
    const paragraph = screen.getByText(expectedText);

    expect(paragraph).toBeInTheDocument();
  });
});

