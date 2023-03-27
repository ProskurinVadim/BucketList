import { render, screen, fireEvent, } from '@testing-library/react'
import List from "./List";
import '@testing-library/jest-dom';



const sort: any = { key: "name", direction: "asc" }

describe("Check on loading", () => {
	it("if we pass load tru show preloader", () => {
		const onClick = jest.fn();
		render(<List onDelete={onClick} onDeleteAll={onClick} onAdd={onClick} onFavorites={onClick} items={[]} loading={true} />);
		expect(screen.getByText(/Loading.../)).toBeInTheDocument();
	})
});


describe("Check on empty array", () => {
	it("if we pass empty array shows no data if we have data show it", () => {
		const onClick = jest.fn();
		const { rerender } = render(<List onDelete={onClick} onDeleteAll={onClick} onAdd={onClick} onFavorites={onClick} items={[]} loading={false} />);
		expect(screen.getByText(/No items in List/)).toBeInTheDocument();
		const item = { name: "new row", amount: 1, image: "image", description: "desctiption", favorites:false }
		rerender(<List onDelete={onClick} onDeleteAll={onClick} onAdd={onClick} onFavorites={onClick} items={[item]} loading={false} />);
		expect(screen.getByText(/new row/)).toBeInTheDocument();

	})
});

