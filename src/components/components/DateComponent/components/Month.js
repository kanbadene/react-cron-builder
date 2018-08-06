// @flow

import {PureComponent} from 'react'

const monthOptions = [
    '一月', '二月', '三月', '四月',
    '五月', '六月', '七月', '八月', '九月','十月',
    '十一月', '十二月'
].map((month: string, i: number) => ({
    label: month,
    value: String(i + 1)
}));

const options = [
    {
        label: '月份',
        value: '*'
    }
].concat(monthOptions);

export default class Month extends PureComponent {
    static getOptions() {
        return options
    }

    static className: string = 'Month';
}
