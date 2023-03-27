import { render, screen } from '@testing-library/react'
import { If } from "./Condition";
import '@testing-library/jest-dom';

describe("Test If component ", () => {
	it("should return children", () => {
		render(<If>Children</If>);

		expect(screen.getByText(/Children/)).toBeInTheDocument()
	})
});

