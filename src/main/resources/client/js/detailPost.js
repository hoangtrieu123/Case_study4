displayDetails()

function displayDetails() {
    let idPost = localStorage.getItem("postsId")
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/posts/" + idPost,

        success: function (data) {
            console.log(data)
            let results = ""
            results += "   <div class = 'col-md-2 col-sm-12 col-12' >"
            results += "     <div class = 'job-detail-header-logo' >"
            results += "     <img src='../static/" + data.business.imageUrl + "' class='job-logo-ima' alt='job-logo'>"
            results += "    </div>"
            results += "   </div>"
            results += "       <div class='col-md-7 col-sm-12 col-12'>"
            results += "            <div class='job-detail-header-desc'>"
            results += "             <div class='job-detail-header-title'>"
            results += "             </div>"
            results += "             <div class='job-detail-header-company'>"
            results += "               <a href='#'>" + data.title + "</a>"
            results += "      </div>"
            results += "           <div class='job-detail-header-de'>"
            results += "          <ul>"
            results += "             <li><i class='fa fa-map-marker icn-jd'></i><span>" + data.business.address + "</span></li>"
            results += "          <li><i class='fa fa-usd icn-jd'></i><span>" + data.salary + "</span></li>"
            results += "      </ul>"
            results += "    </div>"
            results += "  </div>"
            results += "  </div>"
            results += "  <div class='col-md-3 col-sm-12 col-12'>"
            results += "        <div class='jd-header-wrap-right'>"
            results += "           <div class='jd-center'>"
            results += "                <a href='ApplicationForm.html' class='btn btn-primary btn-apply'>Nộp đơn</a>"
            results += "      </div>"
            results += "     </div>"
            results += "  </div>"
            results += "      <div class = 'col-md-4 col-sm-12 col-12 clear-right' >"

            results += "    <span>Phúc lợi</span>"
            results += "   </h2>"
            results += "   <div class='welfare-wrap'>"
            results += "    <div class='row'>"
            results += "      <div class='welfare-list'>"
            results += "         <ul>"
            results += "         <li>"
            results += "              <p><i class='fa fa-usd icn-welfare'></i>" + data.benefits + "</p>"
            results += "           </li>"
            results += "    </ul>"
            results += "   </div>"
            results += "   </div>"
            results += "  </div>"

            results += " <h2 class='widget-title'>"
            results += "   <span>Mô tả công việc</span>"
            results += "    </h2>"
            results += " <div class='jd-content'></div>" + data.description + " </div>"


            results += " <div class='side-bar mb-3'>"
            results += "    <div class='container'>"
            results += "         <div class='row'>"
            results += "         <div class='col-md-12'>"
            results += "                 <div class='home-ads'>"
            results += "              </div>"
            results += "            </div>"
            results += "   </div>"
            results += "  </div>"

            results += "    </div>"

            results += " <div class = 'side-bar mb-3' >"
            results += " <div class='main-wrapper'>"
            results += "    <h2 class='widget-title'>"
            results += "  <h2 class = 'widget-title' >"
            results += " <span> Thông tin </span>"
            results += " </h2>"

            results += "     <div class='job-info-wrap'>"
            results += " <div class='job-info-list'>"
            results += "     <div class='row'>"
            results += "       <div class='col-sm-4'>"
            results += "         <span class='ji-title'>Nơi làm việc:</span>"
            results += "     </div>"
            results += "     <div class='col-sm-8'>"
            results += "         <span class='ji-main'>Đà Nẵng</span>"
            results += "      </div>"
            results += "     </div>"
            results += "  </div>"

            results += "   <div class='job-info-list'>"
            results += "       <div class='row'>"
            results += "      <div class='col-sm-4'>"
            results += "         <span class='ji-title'>Lương:</span>"
            results += "      </div>"
            results += "       <div class='col-sm-8'>"
            results += "          <span class='ji-main'> $" + data.salary + " </span>"
            results += "       </div>"
            results += "        </div>"
            results += "   </div>"

            results += "   <div class='job-info-list'>"
            results += "     <div class='row'>"
            results += "      <div class='col-sm-4'>"
            results += "         <span class='ji-title'>Kỹ năng:</span>"
            results += "      </div>"
            results += "     <div class='col-sm-8'>"
            results += "           <span class='ji-main'>" + data.skill + "</span>"
            results += "        </div>"
            results += "     </div>"
            results += "   </div>"

            results += " </div>"
            results += "       </div>"
            results += "  <div class='side-bar mb-3'>"
            results += "   <h2 class='widget-title'>"
            results += "     <span>Giới thiệu công ty</span>"
            results += "   </h2>"
            results += "   <div class='company-intro'>"
            results += "   <a href='#'>"
            results += "      <img src='../static/" + data.business.imageUrl + "' class='job-logo-ima' alt='job-logo'>"
            results += "     </a>"
            results += "  </div>"
            results += "  <h2 class='company-intro-name'>" + data.business.nameBusiness + "</h2>"
            results += "  <ul class='job-add'>"
            results += "      <li>"
            results += "         <i class='fa fa-map-marker ja-icn'></i>"
            results += "          <span>" + data.business.address + " </span>"
            results += "      </li>"
            results += "      <li>"
            results += "         <i class='fa fa-map-marker ja-icn'></i>"
            results += "          <span> Tổng đài: 0" + data.business.telephone + " </span>"
            results += "      </li>"
            results += "      </ul>"
            results += "   </div>"

            results += "    <div class='side-bar mb-3'>"
            results += "     <div class='container'>"
            results += "         <div class='row'>"
            results += "          <div class='col-md-12'>"
            results += "       <div class='home-ads'>"
            results += "           </div>"
            results += "         </div>"
            results += "          </div>"
            results += "      </div>"

            results += "          </div>"
            results += "          </div>"


            document.getElementById('header').innerHTML = results


        }
    })

}
