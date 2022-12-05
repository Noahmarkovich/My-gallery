console.log('Starting up');

$(onInit)

function onInit(){
    renderProjects()
}

function renderProjects() {
    var projects = getProjects()
    var strHtmls = projects.map(project => `
        <div onclick="onOpenModal('${project.id}')" class="col-md-6 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio/${project.id}-thumbnail.jpg" alt="">
            </a>
          <div class="portfolio-caption">
            <h4>${project.name}</h4>
            <p class="text-muted">${project.title}</p>
          </div>
        </div>
   `)
   $('#photos').html(strHtmls)

}


function onOpenModal(projectId){
    var project = getProjectById(projectId)
    var $elBodyModal = $('.modal-body')
    var strHtml = `<h2>${project.id}</h2>
    <p class="item-intro text-muted">${project.title}</p>
    <img class="img-fluid d-block mx-auto" src="img/portfolio/${project.id}.jpg" alt="">
    <p class="desc">${project.desc}</p>
    <ul class="list-inline">
      <li>Date: January 2017</li>
      <li>Client: Threads</li>
      <li>Category: Illustration</li>
    </ul>
    <button class="btn btn-primary" data-dismiss="modal" type="button">
        <i class="fa fa-times"></i>
        Close Project</button>`

    $elBodyModal.html(strHtml)

}

function onSubmitForm(ev){
    ev.preventDefault()
    const $elEmail = $('.email')
    console.log($elEmail)
    

}