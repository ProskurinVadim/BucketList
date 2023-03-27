import { render, screen, fireEvent, getByPlaceholderText } from '@testing-library/react'
import Input from "./Input";
import '@testing-library/jest-dom';

describe("Check initial value", () => {
	it("should pass Default in as initital value", () => {

		const onChange = jest.fn();
		render(<Input onChange={onChange} value="Default" />);
		const input = screen.getByRole("input") as HTMLInputElement;
		expect(input).toHaveValue('Default');
	});
});



