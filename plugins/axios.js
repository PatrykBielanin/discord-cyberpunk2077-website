export default function ({ $axios }) {
    $axios.setHeader('X-Requested-With', 'XMLHttpRequest')
}
