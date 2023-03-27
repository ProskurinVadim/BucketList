import { render, screen, fireEvent } from '@testing-library/react'
import SortField from "./SortField";
import '@testing-library/jest-dom';

describe("Test Sort Field on name props", () => {
	it("should return name sort", () => {
		const onClick = jest.fn();
		render(<SortField setSort={onClick} name="Sort" />);

		expect(screen.getByText(/Sort/)).toBeInTheDocument();
	});
});


