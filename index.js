function getFirstSelector(selector) {
  const firstSelector = document.querySelector(selector);
  return firstSelector;
}

function nestedTarget() {
  const target = document.querySelector("#nested .target");
  return target;
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll(".ranked-list li");
  for(let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML)+n;
  }
  return lis;
}

function deepestChild() {
  let node = document.querySelector("#grand-node");
  let nextNode = node.children[0];
  
  while(nextNode) {
    node = nextNode.children[0];
  }
}