import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

// Import the component
import BackNavigator from "../BackNavigator";

// 1️⃣ Mock react-router-dom's useNavigate
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

const mockNavigate = vi.fn();

describe("BackNavigator", () => {
  it("renders its child", () => {
    render(
      <MemoryRouter>
        <BackNavigator pagesBack={2}>
          <button>Go Back</button>
        </BackNavigator>
      </MemoryRouter>,
    );
    console.log(document.body.innerHTML);

    expect(screen.getByRole("button", { name: "Go Back" })).toBeInTheDocument();
  });

  it("calls navigate with negative pagesBack on click", () => {
    render(
      <MemoryRouter>
        <BackNavigator pagesBack={3}>
          <button>Go Back</button>
        </BackNavigator>
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Go Back" }));

    expect(mockNavigate).toHaveBeenCalledWith(-3);
  });

  it("prevents default behavior on click", () => {
    const preventDefault = vi.fn();
    render(
      <MemoryRouter>
        <BackNavigator pagesBack={1}>
          <button>Go Back</button>
        </BackNavigator>
      </MemoryRouter>,
    );

    const btn = screen.getByRole("button", { name: "Go Back" });

    fireEvent.click(btn, { preventDefault });

    expect(preventDefault).toHaveBeenCalled();
  });

  it("returns null if number is negative", () => {
    const { container } = render(
      <MemoryRouter>
        <BackNavigator pagesBack={-1}>
          <button>Go Back</button>
        </BackNavigator>
      </MemoryRouter>,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it("returns null if number is not an integer", () => {
    const { container } = render(
      <MemoryRouter>
        <BackNavigator pagesBack={1.08}>
          <button>Go Back</button>
        </BackNavigator>
      </MemoryRouter>,
    );

    expect(container).toBeEmptyDOMElement();
  });
});
