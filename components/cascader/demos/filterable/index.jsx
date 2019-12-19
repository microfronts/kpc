import React from 'react';
import Cascader from 'kpc-react/components/cascader';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "data": [
                {
                    "value": "beijing",
                    "label": "北京",
                    "children": [
                        {
                            "value": "haidian",
                            "label": "海淀区"
                        },
                        {
                            "value": "chaoyang",
                            "label": "朝阳区"
                        },
                        {
                            "value": "fengtai",
                            "label": "丰台区"
                        }
                    ]
                },
                {
                    "value": "hunan",
                    "label": "湖南",
                    "children": [
                        {
                            "value": "changsha",
                            "label": "长沙市",
                            "disabled": true,
                            "children": [
                                {
                                    "value": "yuelu",
                                    "label": "岳麓区"
                                }
                            ]
                        },
                        {
                            "value": "yueyang",
                            "label": "岳阳市",
                            "children": [
                                {
                                    "value": "yueyanglou",
                                    "label": "岳阳楼区"
                                },
                                {
                                    "value": "yueyangxian",
                                    "label": "岳阳县"
                                }
                            ]
                        }
                    ]
                }
            ]
        };
    }

    render() {
        return (
            <div>
                <Cascader data={this.state.data} filterable />
            </div>
        )
    }
}