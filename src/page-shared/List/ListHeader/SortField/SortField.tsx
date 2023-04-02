import { FC } from "react";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

interface ISortField {
    name: string,   
    active?: "asc" | "desc" | false,
    setSort: (name: string) => void
}

const SortField: FC<ISortField> = ({ name, active, setSort }) => {
    const renderTooltip = (props: any) => (
        <span className={`fs-2 ${active ? "text-dark" : "text-muted"}`} {...props}>
            {active === "asc" ? <BsArrowDownShort role="down" /> : <BsArrowUpShort role="up"/>}
            </span>
    );
    return (
        <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
        >
            <p
                className={`fs-3 text-capitalize ${active ? "text-dark" : "text-muted"}`}
                onClick={() => setSort(name)}>
                {name}
            </p>
        </OverlayTrigger>
        
    )
}

export default SortField    