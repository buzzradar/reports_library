/**
 * Created by Juan Infante on 2/10/2019
 */

var Main = function () {

    var loadMasterConfig = function() {

        $.getJSON( "assets/json/ReportsEntries.json", function( data ) {
            loadGalleryReports(data.reportsentries);         
        });

    };

    var loadGalleryReports = function(reportsentries) {

        

        var items = [];
        $.each( reportsentries, function( key, report ) {

            var thumbHTML = `
              <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                  <img class="card-img-top" src="assets/thumbnails/`+report.imgName+`" alt="Card image cap">
                  <div class="card-body">
                    <p class="card-text"><strong>`+report.name+`</strong></p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <a href="reportpages/`+report.slug+`.html" class="btn btn-sm btn-outline-secondary">View</a>
                      </div>
                      <small class="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>`;

            console.log(key,report);
            $('.gallery-container').append(thumbHTML);
        });

        $('.gallery-container').find('button').click(function() {
          console.log($(this));
        });

    };


    

    return {
        init: function () {
            loadMasterConfig();
        }
    };
}();

Main.init();