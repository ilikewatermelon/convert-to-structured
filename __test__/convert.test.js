const convert = require('../convert')

test('normal', async ()=> {
    const result = await convert ({
        key1: {
            key2: {
                a: 'value1',
                b: 'value2'
            }
        }
    })
    expect(result).toEqual({
        key1: {
            key2: {
                a: {
                    string: 'value1',
                },
                b: {
                    string: 'value2'
            }
        }
    }})
}) 