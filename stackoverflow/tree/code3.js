const createDataTree = dataset => {
    let hashTable = Object.create(null)
    dataset.forEach( aData => hashTable[aData.ID] = { ...aData, childNodes : [] } )
    let dataTree = []
    dataset.forEach( aData => {
      if( aData.parentID ) hashTable[aData.parentID].childNodes.push(hashTable[aData.ID])
      else dataTree.push(hashTable[aData.ID])
    } )
    return dataTree
}

it('creates a correct shape of dataTree', () => {

    let dataSet = [
        {
            "ID": 1,
            "Phone": "(403) 125-2552",
            "City": "Coevorden",
            "Name": "Grady"
        },
        {
            "ID": 2,
            "parentID": 1,
            "Phone": "(979) 486-1932",
            "City": "Chełm",
            "Name": "Scarlet"
        }
    ]

    let expectedDataTree = [ 
    {
            "ID": 1,
            "Phone": "(403) 125-2552",
            "City": "Coevorden",
            "Name": "Grady",
            childNodes : [
                {
                    "ID": 2,
                    "parentID": 1,
                    "Phone": "(979) 486-1932",
                    "City": "Chełm",
                    "Name": "Scarlet",
                    childNodes : []
                }
            ]
    } 
    ]

  expect( createDataTree(dataSet) ).toEqual(expectedDataTree)
});