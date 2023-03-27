import React, {useCallback} from 'react';

import { ICondition } from "../../types";

import If from "./If";
import ElseIf from "./ElseIf";
import Else from "./Else";

const Condition: any = ({ children, condition }: { children: React.ReactNode, condition: boolean }) => {

    const findChild = useCallback((MatchComponent: any) => (
        React
            .Children
            .toArray(children)
            .find((child: any ) => child.type === MatchComponent && (MatchComponent !== ElseIf || child.props.condition))
    ), [children]);

    return condition ? findChild(If) : (findChild(ElseIf) || findChild(Else) || <></>);
};

export {If, ElseIf, Else}

export default Condition;
