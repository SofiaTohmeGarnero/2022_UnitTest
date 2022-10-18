import { render, screen } from "@testing-library/react";
import ErrorBoundary from "./ErrorBoundary";

describe("Error Boundary", () => {
  it("should render not found page when an error is thrown inside the error boundary  ", () => {
    const ThrowError = () => {
      throw new Error("Test");
    };
    render(
      <ErrorBoundary /* fallback={<ErrorBoundary />} */>    {/*tmb funciona con el fallback, pero no se bien a que se refiere*/}
        <ThrowError />
      </ErrorBoundary>
    );
    expect(screen.getByAltText("error page not found")).toBeVisible();
  });
});
