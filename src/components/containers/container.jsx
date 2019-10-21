import React, {Fragment} from 'react';
import 'semantic-ui-react';
import { Container } from 'semantic-ui-react';
// container using material Ui
// container has property 
//'textAlight' - left, right, center, justified

const container = ({textAlign}) => {
    return (
        <Fragment>
             <Container textAlign={textAlign}> </Container>         
        </Fragment>
    )
}

export default container
