import axios from "axios";

const baseURL = "https://rasp-back-testing.utme.space";
const instance = axios.create({
    baseURL: baseURL
});

export const getEducationLevels = async () => {
    const url = `/levels`
    const response = await instance.get(url)
    return response.data
}

export const getGroups = async (education_level) => {
    const url = `/groups?level_id=${education_level}`
    const response = await instance.get(url)
    return response.data
}

export const getSchedule = async (group_id, start_date, end_date, subject_props) => {
    subject_props = encodeURI(JSON.stringify(subject_props))
    const url = `/schedules` +
    `?group=${group_id}` +
    `&dateStart=${start_date}` +
    `&dateEnd=${end_date}` +
    `&subgroups=${subject_props}`
    const response = await instance.get(url)
    return response.data
}

export const getGrades = async (last_name, pin) => {
    const url = `/grades?last_name=${last_name}&pin=${pin}`
    const response = await instance.get(url)
    return response.data
}

export const getCalendar = async (group_id, {
    start_date,
    end_date,
    subgroups
}) => {
    const url = [`/calendar?group=${group_id}`]
    url.push(start_date ? `&dateStart=${start_date}` : '')
    url.push(end_date ? `&dateEnd=${end_date}` : '')
    url.push(subgroups ? `&subgroups=${encodeURI(JSON.stringify(subgroups))}` : '')
    const response = await instance.get(url.join(''))
    return response.data
}


export const getDate = ({
        d= undefined,
        m= undefined,
        y= undefined,
        // days, months, years to add
        dd= 0,
        md= 0,
        yd= 0,
        periodDate= undefined
    }) => {

    const periods = [
        'week-start',
        'week-end',
        'month-start',
        'month-end'
    ]

    let day = new Date().getDate().toString()
    let month = (new Date().getMonth() + 1).toString()
    let year = new Date().getFullYear().toString()

    day = d !== undefined ? (d+dd).toString() : day - 0 + dd
    month = m !== undefined ? (m+md).toString() : month - 0 + md
    year = y !== undefined ? (y+yd).toString() : year - 0 + yd

    if (periodDate !== undefined) {
        switch (periodDate) {
            case periods[0]:
                return getDate( {
                    d: day-0, m: month-0, y: year-0,
                    dd: -(new Date().getDay())+1
                })
            case periods[1]:
                return getDate( {
                    d: day-0, m: month-0, y: year-0,
                    dd: 7-(new Date().getDay())
                })
            case periods[2]:
                return getDate( {
                    d: day-0, m: month-0, y: year-0,
                    dd: -(new Date().getDate())+1
                })
            case periods[3]:
                return getDate( {
                    d: day-0, m: month-0, y: year-0,
                    dd: -(new Date().getDate()),md: 1
                })
        }
    }

    day = day.toString().length === 1 ? `0${day}` : day
    month = month.toString().length === 1 ? `0${month}` : month

    return new Date(year - 0, month - 1, day - 0)
        .toLocaleDateString()
}