const list = [1,2,3,4,5,6,7,8,9,10]

const reduce1 = list.reduce((res, cur) => {
    return res + cur
}, 0)

const reduce2 = list.reduce((res, cur) => {
    return res * cur
}, 0)