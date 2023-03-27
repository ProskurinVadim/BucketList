import { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "page-shared/List";
import Container from 'react-bootstrap/Container';
import { deleteItem, flavorItems, deleteAllItems, addItem } from "../../redux/actions/bucketActions";


const BucketPage: FC = () => {

    const { items, loading } = useSelector((state: any) => state.buket_list);

    const dispatch: any = useDispatch();

    const handelAdd = useCallback((name: string, amount: number) => dispatch(addItem(name, amount)),[]);
    const handelDelete = useCallback((id: number) => dispatch(deleteItem(id)),[]);
    const handelDeleteAll = useCallback(() => dispatch(deleteAllItems()), []);
    const handelFlavor = useCallback((id: number) => dispatch(flavorItems(id)),[]);

    return (
        <div className="pt-5 pb-5 vh-100 overflow-hidden" style={{ background: 'linear-gradient(to right, rgb(182, 244, 146), rgb(51, 139, 147)) ' }}>
            <Container>
                <List
                        loading={loading}
                        items={items}
                        onDelete={handelDelete}
                        onFavorites={handelFlavor}
                        onDeleteAll={handelDeleteAll}
                        onAdd={handelAdd}
                    />
            </Container>
        </div>
    )
}

export default BucketPage