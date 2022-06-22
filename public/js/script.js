
// document.getElementById("submit").addEventListener("click", async function(e) {
//     e.preventDefault()
//     await fetch("/login", {
//         method: "POST",
//         headers: {
//             "content-type": "Application/json",
//         },
//         body: JSON.stringify({
//             email: document.getElementById("email").value,
//             password: document.getElementById("password").value
//         })
//     })
//     // .then(res => res.json())
//     .then(data => {
//         if(data.status == "200"){
//             console.log("data", data)
//         }else{
//             console.log("nope", data)
//         }
//     })
//     .catch(err => console.log("err", err))
// })

document.querySelectorAll('.edit-video').forEach(btn => {
    btn.addEventListener('click', e => {


        const video = JSON.parse(e.target.dataset.video);
  
        // const videoForm = document.querySelector('form');
        // videoForm.innerHTML += `
        //     <input name="id" value=${video._id} type="hidden" />
        // `; 

        document.querySelector('input[name="id"]').value = video._id;
        document.querySelector('input[name="embedLink"]').value = video.embedLink;
        document.querySelector('textarea[name="description"]').value = video.description;

    });
});

document.getElementById('addVideo').addEventListener('click', e => {

    document.querySelector('input[name="id"]').value = '';
    document.querySelector('input[name="embedLink"]').value = '';
    document.querySelector('textarea[name="description"]').value = '';


})