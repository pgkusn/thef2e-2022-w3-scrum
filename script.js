const $source = document.querySelector('#source')
const $target = document.querySelector('#target')

const sourceSortableObj = new Sortable($source, {
  group: 'todo-list',
  animation: 150,
})
const targetSortableObj = new Sortable($target, {
  group: 'todo-list',
  animation: 150,
  onAdd() {
    const total = targetSortableObj.toArray().length
    if (total === 4) {
      alert('You have completed the task!')
    }
  },
})
