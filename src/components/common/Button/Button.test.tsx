import { render, screen, fireEvent } from '@testing-library/react'
import Button from "./Button";
import '@testing-library/jest-dom';

describe("when rendered without text prop", () => {
	it("should paste Add as default prop", () => {
		const onClick = jest.fn()
		render(<Button onClick={ onClick }/>);
		expect( screen.getByText(/Add/)).toBeInTheDocument();
	});
});

describe("when rendered with text prop", () => {
	it("should paste Submit as text prop ", () => {
		const onClick = jest.fn()
		render(<Button text={"Submit"} onClick={onClick} />);
		expect( screen.getByText(/Submit/)).toBeInTheDocument();
	});
});

describe("Calls on click, when button was clicked button", () => {
	it("should return 1 time", () => {
		const onClick = jest.fn();
		render(<Button text={"Submit"} onClick={onClick} />);
		fireEvent.click(screen.getByText(/Submit/i));
		expect(onClick).toHaveBeenCalledTimes(1);
	});
});




