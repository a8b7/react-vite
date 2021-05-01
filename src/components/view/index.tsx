import React from 'react';
import {PageHeader } from 'antd'
import './index.less'



export default ({children})=> {
    return (
        <div className="pageContainer">
           <PageHeader
                className="site-page-header"
                onBack={() => null}
                title="Title"
                subTitle="This is a subtitle"
                style={{ backgroundColor: '#fff'}}
            />
            {children}
        </div>
    )
};
