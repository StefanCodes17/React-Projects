import moment from 'moment'

const posts = [
    {
        title: 'Can anyone code?',
        date: moment().format('MMMM DD, YYYY'),
        categories: ['Tech Culture', 'Tech News'],
        link: '#',
        image: 'code.jpg'
    },
    {
        title: 'React vs Vue',
        date: moment().format('MMMM DD, YYYY'),
        categories: ['React', 'Tech News'],
        link: '#',
        image: 'code2.jpg'
    },
    {
        title: 'What is Javascript?',
        date: moment().format('MMMM DD, YYYY'),
        categories: ['Javascript', 'Tech News'],
        link: '#',
        image: 'code2.jpg'
    },
    {
        title: 'How did I start coding?',
        date: moment().format('MMMM DD, YYYY'),
        categories: ['Tech Culture', 'Tech News'],
        link: '#',
        image: 'code2.jpg'
    },
    {
        title: 'Is it true that programming is hard?',
        date: moment().format('MMMM DD, YYYY'),
        categories: ['Tech Culture', 'React'],
        link: '#',
        image: 'code2.jpg'
    }
]

export default posts;