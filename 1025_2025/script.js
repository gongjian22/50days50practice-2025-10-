const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 200

        if (c < target) {
            // math.ceil向上取整
            counter.innerText = `${Math.ceil(c + increment)}`
            // 循环调用自己，递归
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
})