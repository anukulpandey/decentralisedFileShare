/*==================== SHOW NAVBAR ====================*/

/*==================== LINK ACTIVE ====================*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    linkColor.forEach(l => l.classList.remove('active'))
    this.classList.add('active')
}

linkColor.forEach(l => l.addEventListener('click', colorLink))

function handleNewUpload(){
    let container=document.getElementById('container');
    container.innerHTML=`
    <img src="./svg/ad.svg" alt="" style="height:auto;width:450px;margin-right: 50px;margin: auto;" >
    <div class="uploader" id="uploader" >
                  <div class="card">
                    <div class="card-body">
                    <form action="/dashboard" method="post" enctype="multipart/form-data">
                     <input type="file" name="file" required>
                    <input type="submit" value="UPLOAD" class="btn">
                    </form>
                    <br>
                  </div>
    `
}
function handleClickHome(){
    location.reload();
}