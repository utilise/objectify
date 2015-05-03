var expect = require('chai').expect
  , objectify = require('./')

describe('objectify', function() {
  it('should convert array to object', function() {
    var a = [ 
      { 
        'id': 'apples'
      , 'color': 'green' 
      }
    , { 
        'id': 'bananas'
      , 'color': 'yellow' 
      }
    ]

    expect(objectify(a, 'id')).to.eql({
      apples: { 
        'id': 'apples'
      , 'color': 'green' 
      }
    , bananas: { 
        'id': 'bananas'
      , 'color': 'yellow' 
      }
    })
  })

  it('should use default name prop if none specified', function() {
    var a = [ 
      { 
        'name': 'apples'
      , 'color': 'green' 
      }
    , { 
        'name': 'bananas'
      , 'color': 'yellow' 
      }
    ]

    expect(objectify(a)).to.eql({
      apples: { 
        'name': 'apples'
      , 'color': 'green' 
      }
    , bananas: { 
        'name': 'bananas'
      , 'color': 'yellow' 
      }
    })
  })
})