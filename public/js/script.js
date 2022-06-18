console.log('dfsdfss')

document.querySelectorAll('.edit-video').forEach(btn => {
    btn.addEventListener('click', e => {
        const video = JSON.parse(e.target.dataset.video);
        document.querySelector('input[name="embedLink"]').value = video.embedLink;
        document.querySelector('textarea[name="description"]').value = video.description;
        const videoForm = document.querySelector('form');
        videoForm.innerHTML += `
            <input name="id" value=${video._id} type="hidden" />
        `; 
    });
});