import React from 'react'
import iconDown from './downward.png'
import iconUp from './arrow-up.png'
import defaultIcon from './sort.png'
import s from './SuperSortt.module.css'

// добавить в проект иконки и импортировать
const downIcon = iconDown;
const upIcon = iconUp;
const noneIcon = defaultIcon;


export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...

    if (sort === '') {
        return down;
    } else if (sort === down) {
        return up;
    } else if (sort === up) {
        sort = '';
        return sort
    } else if (sort !== up && sort !== down) {
        return down
    } else {
        return sort;
    }
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (

        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
            className={s.container}
        >
            <span className={s.spanName}>{value}</span>
            <img
                style={{width: '18px', height: '16px'}}
                id={id + '-icon-' + sort}
                src={icon}
                alt='sort-icon'
            />
        </span>
    )
}

export default SuperSort
