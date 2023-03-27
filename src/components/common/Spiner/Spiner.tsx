import { FC } from "react";
import BSpinner from 'react-bootstrap/Spinner';
 
const Spiner: FC = () => {
    return (
        <BSpinner animation="border" role="status" variant="primary">
            <span className="visually-hidden">Loading...</span>
        </BSpinner>
    );
}

export default Spiner;