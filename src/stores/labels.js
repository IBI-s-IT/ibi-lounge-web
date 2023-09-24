import { defineStore } from 'pinia'
import {useUIStore} from "@/stores/ui";

export const useLabels =
    defineStore('labelStore', () => {
        const labels = {
            ru: {
                app: {
                    'name': 'IBI Web',
                    'description':
                        'Приложение для просмотра расписания занятий, ' +
                        'успеваемости и прочих материалов для студентов ' +
                        'Международного Банковского Института имени Анатолия Собчака',
                    'cred_text': 'МБИ имени А. Собчака',
                    'cred_link': 'https://ibi.spb.ru/',
                    'cred_author': 'cullfy',
                    'cred_author_link': 'https://cullfy.ru/',
                    'cred_tooltip':
                        'Сайт разработан информационным отделом студенческого совета ' +
                        'МБИ имени А. Собчака для его студентов',
                },

                sidenav : {
                    'schedule': 'Расписание',
                    'grades': 'Оценки',
                    'materials': 'Материалы',
                    'settings': 'Настройки'
                },

                picker: {
                    'select': 'Выбрать',
                    'cancel': 'Отмена',
                    'placeholder': 'Выберите период',
                    'locale': 'ru',
                },

                schedule: {
                    'this-week': 'Текущая неделя',
                    'next-week': 'Следующая неделя',
                    'this-month': 'Текущий месяц',
                    'next-month': 'Следующий месяц',
                    'custom': 'Свой период',
                    'export': 'Экспорт',


                    'online': 'Онлайн',
                    'lecture': 'Лекция',
                    'practice': 'Практика',
                    'consultation': 'Консультация',
                    'subject_report_with_grade': 'Диф. зачёт',
                    'subject_report': 'Зачёт',
                    'exam': 'Экзамен',
                    'library_day': 'Библиотечный день',
                    'project_work': 'Проектная деятельность'
                },

                grades: {
                    'subject_report_with_grade': 'Диф. зачёт',
                    'subject_report': 'Зачёт',
                    'exam': 'Экзамен',
                    'online_course_work': 'Курсовая работа (очно)',
                    'offline_course_work': 'Курсовая работа (заочно)',
                    'unknown': 'Неизвестно',

                    'failed': 'Не зачтено',
                    'passed': 'Зачтено',
                    'absence': 'Н/Я',
                    'not_admitted': 'Н/Д',
                    '2': '2',
                    '3': '3',
                    '4': '4',
                    '5' : '5'
                },

                errors: {
                    'error': 'При загрузке возникла ошибка: \n',
                    'just_error': 'Ошибка',
                    'just_error_text': 'При загрузке возникла ошибка',

                    'no_grades': 'Оценок нет, проверьте правильность ввода фамилии и ПИНа',

                    'no_schedules': 'Занятий нет или нет доступа к расписанию',
                    'no_lessons_subgroup': 'Нет занятий для выбранной подгруппы',
                    'no_subgroup_filter': 'У вас не настроены фильтры подгрупп',

                },
                helpers: {
                    'loading': 'Загрузка...',
                },

                week: {
                    'mon': 'понедельник',
                    'tues': 'вторник',
                    'wed': 'среда',
                    'thurs': 'четверг',
                    'fri': 'пятница',
                    'sat': 'суббота',
                    'sun': 'воскресенье'
                },

                settings: {
                    'grades_data': 'Успеваемость',
                    'last_name': 'Фамилия',
                    'pin': 'Пин',
                    'ui': 'Интерфейс',
                    'language': 'Язык',
                    'theme': 'Тема',
                    'group_selection': 'Выбор группы',
                    'level': 'Уровень образования',
                    'group': 'Группа',
                    'subgroup': 'Подгруппа',
                    'subgroup_filter': 'Выбрать подгруппы',
                    'subgroup_filter_description': 'Выберите подгруппы, которые будут отображаться в расписании',
                    'subgroup_filter_all': 'Все подгруппы',
                    'subgroup_filter_add': 'Добавить',
                    'close': 'Закрыть',
                },
                materials: {
                    'header': 'Тут вы можете найти ссылки на самые востребованные материалы',
                    'link-lms': 'Среда дистанционного обучения МБИ (ЕЭОС)',
                    'link-mail': 'Студенческая почта',
                    'link-e-lib': 'Электронная библиотека',
                    'link-magazine': 'Журнал Банк\'а',
                    'link-stud-life': 'Студенческая жизнь',
                    'link-contacts': 'Контакты',
                    'link-pay': 'Оплата обучения',
                }

            },
            en: {
                app: {
                    'name': 'IBI Web',
                    'description':
                        'Application for viewing class schedules, ' +
                        'progress and other materials for students' +
                        'International Banking Institute named after Anatoly Sobchak',
                    'cred_text': 'IBI',
                    'cred_link': 'https://ibi.spb.ru/',
                    'cred_author': 'cullfy',
                    'cred_author_link': 'https://cullfy.ru/',
                    'cred_tooltip':
                        'The site was developed by the IBI student council information ' +
                        'department for its students',
                },

                sidenav : {
                    'schedule': 'Schedule',
                    'grades': 'Grades',
                    'materials': 'Materials',
                    'settings': 'Settings'
                },

                picker: {
                    'select': 'Select',
                    'cancel': 'Cancel',
                    'placeholder': 'Select period',
                    'locale': 'en',
                },

                schedule: {
                    'this-week': 'This week',
                    'next-week': 'Next week',
                    'this-month': 'This month',
                    'next-month': 'Next month',
                    'custom': 'Custom period',
                    'export': 'Export',


                    'online': 'Online',
                    'lecture': 'Lecture',
                    'practice': 'Practice',
                    'consultation': 'Consultation',
                    'subject_report_with_grade': 'Diff. credit',
                    'subject_report': 'Credit',
                    'exam': 'Exam',
                    'library_day': 'Library day',
                    'project_work': 'Project work'
                },

                grades: {
                    'subject_report_with_grade': 'Diff. credit',
                    'subject_report': 'Credit',
                    'exam': 'Exam',
                    'online_course_work': 'Online course work',
                    'offline_course_work': 'Offline course work',
                    'unknown': 'Unknown',

                    'failed': 'Failed',
                    'passed': 'Passed',
                    'absence': 'Absence',
                    'not_admitted': 'N/A',
                    '2': '2',
                    '3': '3',
                    '4': '4',
                    '5' : '5'
                },

                errors: {
                    'error': 'An error occurred while loading: \n',
                    'just_error': 'Error',
                    'just_error_text': 'An error occurred while loading',

                    'no_grades': 'No grades, try to check your last name and PIN',

                    'no_schedules': 'No classes or no access to the schedule',
                    'no_lessons_subgroup': 'No lessons for the selected subgroup',
                    'no_subgroup_filter': 'You have no subgroup filters set',

                },
                helpers: {
                    'loading': 'Loading...',
                },

                week: {
                    'mon': 'monday',
                    'tues': 'tuesday',
                    'wed': 'wednesday',
                    'thurs': 'thursday',
                    'fri': 'friday',
                    'sat': 'saturday',
                    'sun': 'sunday'
                },

                settings: {
                    'grades_data': 'Grades',
                    'last_name': 'Last name',
                    'pin': 'PIN',
                    'ui': 'UI',
                    'language': 'Language',
                    'theme': 'Theme',
                    'group_selection': 'Group selection',
                    'level': 'Level of education',
                    'group': 'Group',
                    'subgroup': 'Subgroup',
                    'subgroup_filter': 'Select subgroups',
                    'subgroup_filter_description': 'Select the subgroups that will be displayed in the schedule',
                    'subgroup_filter_all': 'All subgroups',
                    'subgroup_filter_add': 'Add',
                    'close': 'Close',
                },
                materials: {
                    'header': 'Here you can find links to the most popular materials',
                    'link-lms': 'Learning Management System of IBI',
                    'link-mail': 'Student mail',
                    'link-e-lib': 'Electronic library',
                    'link-magazine': '"Банк\'а" magazine',
                    'link-stud-life': 'Student life',
                    'link-contacts': 'Contacts',
                    'link-pay': 'Payment',
                }

            },
            ar: {
                app: {
                    'name': 'IBI Web',
                    'description':
                        'Приложение для просмотра расписания занятий, ' +
                        'успеваемости и прочих материалов для студентов ' +
                        'Международного Банковского Института имени Анатолия Собчака',
                    'cred_text': 'МБИ имени А. Собчака',
                    'cred_link': 'https://ibi.spb.ru/',
                    'cred_author': 'cullfy',
                    'cred_author_link': 'https://cullfy.ru/',
                    'cred_tooltip':
                        'Сайт разработан информационным отделом студенческого совета ' +
                        'МБИ имени А. Собчака для его студентов',
                },

                sidenav : {
                    'schedule': 'Расписание',
                    'grades': 'Оценки',
                    'materials': 'Материалы',
                    'settings': 'Настройки'
                },

                picker: {
                    'select': 'Выбрать',
                    'cancel': 'Отмена',
                    'placeholder': 'Выберите период',
                    'locale': 'ru',
                },

                schedule: {
                    'adib': 'Вы включили режим Адиба, расписания для вас просто не существует...',

                    'this-week': 'Текущая неделя',
                    'next-week': 'Следующая неделя',
                    'this-month': 'Текущий месяц',
                    'next-month': 'Следующий месяц',
                    'custom': 'Свой период',
                    'export': 'Экспорт',


                    'online': 'Спать',
                    'lecture': 'Лекция',
                    'practice': 'Можно и не идти..',
                    'consultation': 'И так сдам..',
                    'subject_report_with_grade': 'Автомат 5',
                    'subject_report': 'Автомат сто проц',
                    'exam': 'Изи 5',
                    'library_day': 'Библиотечный день',
                    'project_work': 'Проектная деятельность'
                },

                grades: {
                    'subject_report_with_grade': 'Диф. зачёт',
                    'subject_report': 'Зачёт',
                    'exam': 'Экзамен',
                    'online_course_work': 'Курсовая работа (очно)',
                    'offline_course_work': 'Курсовая работа (заочно)',
                    'unknown': 'Неизвестно',

                    'failed': 'Не зачтено, но автомат 5',
                    'passed': 'Зачтено (да, даже тут 5)',
                    'absence': 'Н/Я, но автомат 5',
                    'not_admitted': 'Н/Д, но автомат 5',
                    '2': 'автомат 5',
                    '3': 'автомат 5',
                    '4': 'автомат 5',
                    '5' : 'автомат 5'
                },

                errors: {
                    'error': 'При загрузке возникла ошибка: \n',
                    'just_error': 'Ошибка',
                    'just_error_text': 'При загрузке возникла ошибка',
                    'no_grades': 'Оценок нет, но автомат 5.. :(',

                    'no_schedules': 'Занятий нет или нет доступа к расписанию',
                    'no_lessons_subgroup': 'Нет занятий для выбранной подгруппы',
                    'no_subgroup_filter': 'У вас не настроены фильтры подгрупп',

                },
                helpers: {
                    'loading': 'Загрузка пятерок...',
                },

                week: {
                    'mon': 'понедельник',
                    'tues': 'вторник',
                    'wed': 'среда',
                    'thurs': 'четверг',
                    'fri': 'пятница',
                    'sat': 'суббота',
                    'sun': 'воскресенье'
                },

                settings: {
                    'grades_data': 'Успеваемость',
                    'last_name': 'Фамилия',
                    'pin': 'Пин',
                    'ui': 'Интерфейс',
                    'language': 'Язык',
                    'theme': 'Тема',
                    'group_selection': 'Выбор группы',
                    'level': 'Уровень образования',
                    'group': 'Группа',
                    'subgroup': 'Подгруппа',
                    'subgroup_filter': 'Выбрать подгруппы',
                    'subgroup_filter_description': 'Выберите подгруппы, которые будут отображаться в расписании',
                    'subgroup_filter_all': 'Все подгруппы',
                    'subgroup_filter_add': 'Добавить',
                    'close': 'Закрыть',
                },
                materials: {
                    'header': 'Тут вы можете найти ссылки на самые востребованные материалы',
                    'link-lms': 'Среда дистанционного обучения МБИ (ЕЭОС)',
                    'link-mail': 'Студенческая почта',
                    'link-e-lib': 'Электронная библиотека',
                    'link-magazine': 'Журнал Банк\'а',
                    'link-stud-life': 'Студенческая жизнь',
                    'link-contacts': 'Контакты',
                    'link-pay': 'Оплата обучения',
                }

            },
        }

        const label = ([section, label]) => {
            const lang = useUIStore().language
            try {
                let res = labels[lang][section][label]
                if (res === undefined) return label
                return res
            } catch {
                return label
            }
        }

        return { label }
    })
