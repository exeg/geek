exports.catH = async (cats) => {
  let result = [];
  let child = {};

  for (let itm of cats) {
    if (!itm.master) {
      result.push({ value: itm });
      continue;
    }
    if (child[itm.master]) {
      child[itm.master].push({ value: itm });
    } else {
      child[itm.master] = [];
      child[itm.master].push({ value: itm });
    }
  }

  const findChildren = (parent) => {

    if (child[parent.value._id]) {
      parent.children = child[parent.value._id];
      for (let i in parent.children) {
        findChildren(parent.children[i]);
      }  
    }
  };
  const getParent = () => {
    let parent = null;

      for (let i of cats) {
        if(child[i._id]) parent = i;
      }
    return parent;
  }

  if (result.length) {
    for (let r of result) {
      findChildren(r);
    }
  } else {
    let parent = getParent();
    result.push({ value: parent });
    for (let r of result) {
      findChildren(r);
    }
      
  }
  return result; 
}