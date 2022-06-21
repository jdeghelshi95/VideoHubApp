

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