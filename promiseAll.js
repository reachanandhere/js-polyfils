function subscribeVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Subscribe the ${video} video`);
    }, 1000);
  });
}

function likeVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Like the ${video} video`);
      }, 1000);
  });
}

Promise.allPolyfill=(promises)=>{
    return new Promise((resolve, reject)=>{
        const results = []
        if(!promises.length) {
            resolve(results)
            return
        }
        let pending = promises.length
        promises.forEach((promise, index)=>{
            Promise.resolve(promise).then((res)=>{
                results[index]=res
                pending--
                if(pending===0) {
                    resolve(results)
                }
            }, reject)
        })
    })
}


Promise.allPolyfill([
    subscribeVideo("Fast and Furious"),
    likeVideo('Harry Potter')
]).then((res)=>{
    console.log(res)
})


