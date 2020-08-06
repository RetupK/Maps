const sizeMap = new Map();

export function onResize(selector, callback, timeout = 200) {

    const element = document.querySelector(selector);

    const size = element.getBoundingClientRect();
    sizeMap.set(selector, size);

    setInterval(() => {
        const newSize = element.getBoundingClientRect();
        const oldSize = sizeMap.get(selector);

        if (!oldSize || oldSize.width !== newSize.width || oldSize.height !== newSize.height) {
            sizeMap.set(selector, newSize);
            callback();
        }
    }, timeout);
}
