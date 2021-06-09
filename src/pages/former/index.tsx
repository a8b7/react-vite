import React from 'react';
import FormRender, { connectForm, useForm } from 'form-render';
import { Button } from 'antd';
// import 'antd/dist/antd.css';    如果项目没有对antd、less做任何配置的话，需要加上

const schema = {
  "type": "object",
  "properties": {
    "inputName": {
      "title": "简单输入框",
      "type": "string"
    },
    "multiSelect_x4eFq5": {
      "title": "多选",
      "description": "下拉多选",
      "type": "array",
      "items": {
        "type": "string"
      },
      "enum": [
        "A",
        "B",
        "C",
        "D"
      ],
      "enumNames": [
        "杭州",
        "武汉",
        "湖州",
        "贵阳"
      ],
      "widget": "multiSelect"
    },
    "select_26P4Ms": {
      "title": "单选",
      "type": "string",
      "enum": [
        "a",
        "b",
        "c"
      ],
      "enumNames": [
        "早",
        "中",
        "晚"
      ],
      "widget": "select"
    }
  },
  "column": 2,
  "labelWidth": 120,
  "displayType": "row"
}

export default ()=>{
  const form = useForm();
  return  (
    <div style={{backgroundColor:"#fff", margin: 10, height: "90vh", }}> 
      <FormRender form={form} schema={schema} />
      <Button type="primary" onClick={form.submit}>
        提交
      </Button>
    </div>
  );
}