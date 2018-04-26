function getFirstSelector(selector) {
  return document.querySelector(selector);
}


function nestedTarget() {
  return document.querySelector('#nested .target');
}


function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')
  const firstList = rankedLists[0]
  const secondList = rankedLists[1]
  let children = firstList.children
<<<<<<< HEAD

  for (let i = 0, l = children.length; i < l; i++) {
        children[i].innerHTML = parseInt(children[i].innerHTML) + n 
  }
  children = secondList.children
  

      for (let i = 0, l = children.length; i < l; i++) {
       children[i].innerHTML = parseInt(children[i].innerHTML) + n
} console.log(rankedLists)
}


=======
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
>>>>>>> 6ebae293fddc4bf248fff82ab1f84a7aa85596f0

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}