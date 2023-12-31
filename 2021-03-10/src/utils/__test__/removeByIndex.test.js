import { removeByIndex } from '../removeByIndex'

describe('utils/removeByIndex', () => {
  it('should remove the item at the index specified', () => {
    const array = ['a', 'b', 'c', 'd']
    removeByIndex(array, 2)
    expect(array.length).toEqual(3)
    expect(JSON.stringify(array)).toEqual(JSON.stringify(['a', 'b', 'd']))
  })
})
