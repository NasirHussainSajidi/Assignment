
// function showBlogCard(){
//     let uplodePicture = document.querySelector("#uplode-picture")
//     const addName = document.querySelector("#add-name")
//     const addDescription = document.querySelector("#enter-discription")
//     const blogCard = document.querySelector("#blog-card")

//     blogCard.innerHTML += `<div id="javaDiv">${uplodePicture.value} ${addDescription}</div>`

//     console.log(addName)

//     uplodePicture.value = ''
// }




const showBlogCard = () => {
    const uplodePicture = document.querySelector("#uplode-picture");
    const addName = document.querySelector("#add-name");
    const addDescription = document.querySelector("#enter-discription");
    const blogCard = document.querySelector("#blog-card");
  
    blogCard.innerHTML += `
      <div id="javaDiv">
        ${uplodePicture.files[0].name}
        ${addDescription.value}
      </div>
    `;
  
    uplodePicture.value = '';
  };



