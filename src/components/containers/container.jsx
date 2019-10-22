import React, {Fragment} from 'react';
import 'semantic-ui-react';
import { Container } from 'semantic-ui-react';
// container using material Ui
// container has property 
//'textAlight' - left, right, center, justified

const useStyles ={
    root: {
      marginTop: 70,
      marginRight:70,
    },
  };

  export default function container({textAlign}){
  
    return (
        <Fragment>
             <Container textAlign={textAlign?textAlign:"center"} style={useStyles.root}></Container>         
        </Fragment>
    )
}


