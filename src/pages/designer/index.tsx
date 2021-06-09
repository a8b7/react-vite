import React from 'react';
import Generator from 'fr-generator';
import { Card } from 'antd';

const defaultValue = {
  type: 'object',
  properties: {
    inputName: {
      title: '简单输入框',
      type: 'string',
    },
  },
};

const Index = () => {
  return (
    <div style={{backgroundColor:"#fff", margin: 10, height: "90vh", }}> 
      <Generator defaultValue={defaultValue} extraButtons={[{text: "安装"}]} />
    </div>
  );
};

export default Index;