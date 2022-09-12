showAll()

function showAll(id) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/posts/" + id,
        success: function (data) {
            displayJD(data);
            displayHeader(data)
            console.log(data)
        }
    })
}
function displayHeader(data) {
    let results = ""
    for (let i = 0; i < data.length; i++){
        results = "  <div class='col-md-2 col-sm-12 col-12'>"
        results = "       <div class='job-detail-header-logo'>"
        results = "          <a href='#'>"
        results = "              <img src='img/fpt-logo.png' class='job-logo-ima' alt='job-logo'>"
        results = "        </a>"
        results = "      </div>"
        results = "  </div>"
        results = "   <div class='col-md-7 col-sm-12 col-12'>"
        results = "      <div class='job-detail-header-desc'>"
        results = "           <div class='job-detail-header-title'>"
        results = "        <a href='#'>"+data[i].title+"</a>"
        results = "    </div>"
        results = "    <div class='job-detail-header-company'>"
        results = "        <a href='#'>"+data[i].business.nameBusiness+"</a>"
        results = "   </div>"
        results = "    <div class='job-detail-header-de'>"
        results = "       <ul>"
        results = "            <li><i class='fa fa-map-marker icn-jd'></i><span>"+data[i].business.address+"</span></li>"
        results = "           <li><i class='fa fa-usd icn-jd'></i><span>"+data[i].salary+"</span></li>"
        results = "       </ul>"
        results = "    </div>"
        results = "      </div>"
        results = "  </div>"
        results += "<div class='col-md-8 col-sm-12 col-12 clear-left'>"
        results += "<div class='main-wrapper'>"
        results += "   <h2 class='widget-title'>"
        results += "      <span>Phúc lợi</span>"
        results += "   </h2>"

        results += "   <div class='welfare-wrap'>"
        results += "     <div class='row'>"
        results += "         <div class='welfare-list'>"
        results += "              <ul>"
        results += "                 <li>"
        results += "                     <p><i class='fa fa-usd icn-welfare'></i>" + data[i].benefits + "</p>"
        results += "                 </li>"
        results += "           </ul>"
        results += "         </div>"
        results += "     </div>"
        results += "  </div>"
        results += "    <h2 class='widget-title'>"
        results += "        <span>Mô tả công việc</span>"
        results += "    </h2>"
        results += "    <div class='jd-content'>" + data.description + "</div>"
        results += " </div>"
        results += "</div>"
        results += "</div>"
    }

}
function displayJD(data) {
    let results = ""
    for (let i = 0; i < data.length; i++) {
        // <!-- Sidebar -->
        results += " <div class='col-md-4 col-sm-12 col-12 clear-right'>"
        results += "  <div class='side-bar mb-3'>"
        results += "      <h2 class='widget-title'>"
        results += "         <span>Thông tin</span>"
        results += "   </h2>"

        results += "      <div class='job-info-wrap'>"
        results += "   <div class='job-info-list'>"
        results += "       <div class='row'>"
        results += "            <div class='col-sm-4'>"
        results += "               <span class='ji-title'>Nơi làm việc:</span>"
        results += "           </div>"
        results += "            <div class='col-sm-8'>"
        results += "                <span class='ji-main'>" + data[i].address + "</span>"
        results += "             </div>"
        results += "          </div>"
        results += "      </div>"
        results += "         <div class='job-info-list'>"
        results += "        <div class='row'>"
        results += "              <div class='col-sm-4'>"
        results += "                  <span class='ji-title'>Lương: </span>"
        results += "             </div>"
        results += "              <div class='col-sm-8'>"
        results += "                  <span class='ji-main'>" + data[i].salary + "</span>"
        results += "              </div>"
        results += "            </div>"
        results += "          </div>"
        results += "     <div class='job-info-list'>"
        results += "       <div class='row'>"
        results += "          <div class='col-sm-4'>"
        results += "               <span class='ji-title'>Kỹ năng:</span>"
        results += "          </div>"
        results += "              <div class='col-sm-8'>"
        results += "                <span class='ji-main'>" + data[i].skill + "</span>"
        results += "             </div>"
        results += "            </div>"
        results += "        </div>"
        results += "     </div>"

        results += "  <div class='side-bar mb-3'>"
        results += "            <h2 class='widget-title'>"
        results += "               <span>Giới thiệu công ty</span>"
        results += "            </h2>"
        results += "     <div class='company-intro'>"
        results += "         <a href='#'>"
        results += "  <img src='img/fpt-logo.png' class='job-logo-ima' alt='job-logo'>"
        results += "     </a>"
        results += "      </div>"
        results += "         <h2 class='company-intro-name'>" + data[i].business.nameBusiness + "</h2>"
        results += "      <ul class='job-add'>"
        results += "        <li>"
        results += "            <i class='fa fa-map-marker ja-icn'></i>"
        results += "            <span>Trụ sở: " + data[i].business.address + " </span>"
        results += "        </li>"
        results += "        <li>"
        results += "            <i class='fa fa-bar-chart ja-icn'></i>"
        results += "            <span>Tổng đài: " + data[i].business.telephone + " </span>"
        results += "        </li>"
        results += "      </ul>"

        results += "        <div class='side-bar mb-3'>"
        results += "         <h2 class='widget-title'>"

        results += "   </div>"
    }
    document.getElementById("test").innerHTML = results

}


















