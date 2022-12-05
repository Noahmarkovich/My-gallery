console.log('Starting up');

$(onInit)

function onInit(){
    renderProjects()
}

function renderProjects() {
    var projects = getProjects()
    var strHtmls = projects.map(project => `
        <div class="col-md-6 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
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