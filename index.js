function getFirstSelector(selector) {
  return document.querySelector(selector);
}


function nestedTarget() {
  return document.querySelector('#nested .target');
}


function increaseRankBy(n) {
  const rankedLists = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  const firstList = rankedLists[0]
  const secondList = rankedLists[1]
  let children = firstList.children
  let start = 1
  for (let i = 0, l = children.length; i < l; i++) {
        return (parseInt(children[i].innerHTML) + n) 
  }
  children = secondList.children
  start = 12

      for (let i = 0, l = children.length; i < l; i++) {
       return (parseInt(children[i].innerHTML) + n)
} console.log(rankedLists)
}

increaseRankBy(2)

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}