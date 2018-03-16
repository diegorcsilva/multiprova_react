import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { red500, yellow500, blue500 } from 'material-ui/styles/colors';
const style = {
  marginRight: 60,
};

/**
 * Default size and `mini` FABs, in primary (default), `secondary` and `disabled` colors.
 */
const BarraNovaQuestao = () => (
  <div>
  
    <FloatingActionButton style={style} color={red500}>
      <ContentAdd />
    </FloatingActionButton>
   
    <FloatingActionButton secondary={true} style={style}>
      <ContentAdd />
    </FloatingActionButton>
    
    <FloatingActionButton disabled={true} style={style}>
      <ContentAdd />
    </FloatingActionButton>
  
  </div>
);

export default BarraNovaQuestao;