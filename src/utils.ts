export function translateToNyan(str = '') {
    const unicodeNumArray = Array.from(str).map((i: string) => {
        return i.charCodeAt(0).toString(16)
    })
    const texts = unicodeNumArray.map(unicodeNum => {
        return Array.from(unicodeNum).map(s => {
            if (s !== '0') {
                return 'Ny' + String.fromCharCode(parseInt('0430', 16)) + String.fromCharCode(parseInt('030' + s, 16)) + 'n'
            } else {
                return 'Nyan'
            }
        }).join('')
    })
    return texts.join(' ')
}


export function translateFromNyan(str = '') {
    const strArray = str.split(' ')
    const result = strArray.map(i => {
        const r = i.match(/Ny..n|Nyan/g)
        console.log(r);
        if (r && r.length) {
            return r.map(t => {
                if (t === 'Nyan') {
                    return '0'
                } else {
                    const hx16 = t.charCodeAt(3).toString(16)
                    return hx16[hx16.length - 1]
                }
            }).join('')
        } else {
            return ''
        }
    }).filter(i => i).map(i => {
        return String.fromCharCode(parseInt(i, 16))
    }).join('')
    return result
}
