import { ReactNode } from "react";
import { render,act } from "@testing-library/react";
import { store } from "../../redux/store";
import { bucketActions } from "../../redux/actionsNames";
import { Provider } from "react-redux";
import BucketPage from "./BucketPage";

const renderWithContext = (element: ReactNode) => {
    render(
        <Provider store={store}>{element}</Provider>
    );
    return { store };

}

describe("Test with no data", () => {
    it("should display no items in list", () => {
        const { store }: any = renderWithContext(<BucketPage />);
        expect(store.getState().buket_list.items.length).toEqual(0);
    });
});



describe("Test loading", () => {
    it("should display loading as true",  () => {
        const { store }: any = renderWithContext(<BucketPage />);
        act(() => {
            store.dispatch({ type: bucketActions.SET_ITEM_LOADING, payload: { loading: true } })
            expect(store.getState().buket_list.loading).toEqual(true);
        })
    })
       
});


describe("Test add item", () => {
    it("should display loading add an item in list", () => {
        const { store }: any = renderWithContext(<BucketPage />);
        act(() => {
            const item = { name: "test", amount: 1, image: "image", description: "desctiption" };
            store.dispatch({ type: bucketActions.ADD_ITEM, payload:  item  });
            expect(store.getState().buket_list.items.length).toEqual(1);
        });
    });

});

describe("Test delete item", () => {
    it("should delete item", () => {
        const { store }: any = renderWithContext(<BucketPage />);
        act(() => {
            expect(store.getState().buket_list.items.length).toEqual(1);
            store.dispatch({ type: bucketActions.DELETE_ITEM, payload: { id: 0 } });
            expect(store.getState().buket_list.items.length).toEqual(0);
        });
    });
});

describe("Test delete all items", () => {
    it("should delete all items", () => {
        const { store }: any = renderWithContext(<BucketPage />);
        act(() => {
            const item = { name: "test", amount: 1, image: "image", description: "desctiption" };
            store.dispatch({ type: bucketActions.ADD_ITEM, payload: item });
            store.dispatch({ type: bucketActions.ADD_ITEM, payload: item });
            expect(store.getState().buket_list.items.length).toEqual(2);
            store.dispatch({ type: bucketActions.DELETE_ALL});
            expect(store.getState().buket_list.items.length).toEqual(0);
        });
    });
});

describe("Test updete favorites", () => {
    it("should updete flavor of ite,", () => {
        const { store }: any = renderWithContext(<BucketPage />);
        act(() => {
            const item = { name: "test", amount: 1, image: "image", description: "desctiption" };
            store.dispatch({ type: bucketActions.ADD_ITEM, payload: item });
            store.dispatch({ type: bucketActions.FAVORITE_ITEM, payload: { id: 0 } });
            expect(store.getState().buket_list.items[0].favorites).toEqual(true);
        });
    });
});


