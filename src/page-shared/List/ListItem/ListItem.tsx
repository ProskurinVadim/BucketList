import { FC } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Star, Trash } from "../../../components/common";
import { IListItem } from "../../../types";
import Image from 'react-bootstrap/Image'

interface IItem {
    onDelete: () => void,
    onFavorites: () => void,
    item: IListItem
}

const ListItem: FC<IItem> = ({ onFavorites, onDelete, item }) => {
    const { name, favorites, amount, image, description }: IListItem = item;
    return (
        <ListGroup.Item style={{ height: 200}}>

            <Row>
                <Col className="text-dark fs-4">
                    Product: {name}
                </Col>
                <Col className="text-end text-dark fs-4">
                    Amount: {amount}
                </Col>
            </Row>
            <Row className="justify-content-between pt-3 pb-3">
                {image &&
                    <Col>
                    <Image src={image} className="w-75 h-75" role="image" />
                    </Col>
                }
                <Col xs lg="8" className="mh-100">
                    <p className="overflow-hidden text-secondary" style={{ height:100 }}>{description}</p>
                </Col>
                <Col className="text-end">
                    <Star className="fs-2 me-3 d-block" favorites={favorites} onClick={onFavorites} />
                    <Trash className="fs-2 d-block me-3" onClick={onDelete} />
                </Col>
            </Row>
            
        </ListGroup.Item>
    )
}

export default ListItem