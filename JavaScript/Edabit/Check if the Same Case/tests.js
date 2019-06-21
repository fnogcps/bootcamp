var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('Check if the Same Case (unit tests)\n', () => {
    it('[Test 1] Expected: true', () => 
        assert.equal(e.sameCase("HELLO"), true)
    )
    it('[Test 2] Expected: false', () => 
        assert.equal(e.sameCase("HEllo"), false)
    )
    it('[Test 3] Expected: false', () => 
        assert.equal(e.sameCase("mArmALadE"), false)
    )
    it('[Test 4] Expected: true', () => 
        assert.equal(e.sameCase("marmalade"), true)
    )
    it('[Test 5] Expected: true', () => 
        assert.equal(e.sameCase("MARMALADE"), true)
    )
    it('[Test 6] Expected: false', () => 
        assert.equal(e.sameCase("ketchUP"), false)
    )
    it('[Test 7] Expected: true', () => 
        assert.equal(e.sameCase("pickle"), true)
    )
    it('[Test 8] Expected: true', () => 
        assert.equal(e.sameCase("MUSTARD"), true)
    )
})
