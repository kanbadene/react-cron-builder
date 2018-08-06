// @flow

import {PureComponent} from 'react'

const weekDaysOptions = [
    '星期一', '星期二', '星期三',
    '星期四', '星期五', '星期六',
    '星期日'
].map((day: string, i: number) => ({
    label: day,
    value: String(i + 1)
}));

const options = [
    {
        label: '每天',
        value: '*'
    },
    {
        label: '星期一到星期五',
        value: '1-5'
    },
    {
        label: '星期六到星期日',
        value: '6-7'
    }
].concat(weekDaysOptions);

export default class DayOfWeek extends PureComponent {
    static getOptions() {
        return options
    }

    static className: string = 'DayOfWeek';
}
