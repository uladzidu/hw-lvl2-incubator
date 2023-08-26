import React, {useEffect, useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)

    const start = () => {
        // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
        // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)
        // stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const stop = () => {
        // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
        setTimerId(undefined)
        clearTimeout(timerId)
    }

    const onMouseEnter = () => { // пишут студенты // показать дату если наведена мышка
        setShow(true)
    }
    const onMouseLeave = () => { // пишут студенты // спрятать дату если мышка не наведена
        setShow(false)
    }

    const getHours = () => {
        return date.getHours() <= 9 ? '0' + date.getHours() : date.getHours()
    }
    const getMinutes = () => {
        return date.getMinutes() <= 9 ? '0' + date.getMinutes() : date.getMinutes()
    }
    const getSeconds = () => {
        return date.getSeconds() <= 9 ? '0' + date.getSeconds() : date.getSeconds()
    }

    const getDay = () => {
        return date.getDay() <= 9 ? '0' + date.getDay() : date.getDay()
    }
    const getNumberOfMonth = () => {
        return date.getMonth() <= 9 ? '0' + date.getMonth() : date.getMonth()
    }
    const getFullYear = () => {
        return date.getFullYear() <= 9 ? '0' + date.getFullYear() : date.getFullYear()
    }

    const dayOfTheWeek = () : string => {

        const day = date.getDay()
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

        return days[day-1]
    }

    const getMonth = () : string => {

        const currentMonth = date.getDay()
        const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

        return month[currentMonth]
    }

    const stringTime = `${getHours()}:${getMinutes()}:${getSeconds()}` || <br/> // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
    const stringDate = `${getDay()}.${getNumberOfMonth()}.${getFullYear()}` || <br/> // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем

    // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
    const stringDay = dayOfTheWeek() || <br/> // пишут студенты
    const stringMonth = getMonth() || <br/> // пишут студенты

    useEffect( () => {
        setDate(new Date(Date.now()))
        console.log(new Date(Date.now()))
    },[] )

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={false} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={false} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
