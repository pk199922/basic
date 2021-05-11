

    const list = [
  { id: 4 , name:'abc' },
  { id: 10, name:'ab2' },
  { id: 5, name:'abc3' },
  {id:6, name:'abc5'}
]
    list.sort((a, b) => (a.id > b.id) ? 1 : -1)
    list.sort((a, b) => (a.id > b.id) ? 1 : (a.id === b.id) ? ((a.name > b.name) ? 1 : -1) : -1 )
console.log(list);
