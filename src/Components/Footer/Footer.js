document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM content loaded");
  const footerContainer = document.getElementById("footer-container");

  // Create a div element for the footer
  function createFooter() {
    console.log("createFooter function called");
    const footer = document.createElement("footer");

    footer.innerHTML = `
         <div class="footer-container">
         
      <div class="row footer-logo" style="display: flex; justify-content: space-between;">
          <div class="col-xl-6 col-md-6 col-sm-6 col-xs-12 col-12">
            <a href="https://www.thehindu.com/"
              ><img
                class="img-fluid mobile-logo"
                src="https://www.thehindu.com/theme/images/th-online/thehindu-logo.svg"
                data-src-template="https://www.thehindu.com/theme/images/th-online/thehindu-logo.svg"
                alt="Return to frontpage"
            /></a>
          </div>
          <div class="col-xl-6 col-md-6 col-sm-6 col-xs-12 col-12">
            <div class="app-icon" style="display: flex">
              <a
                href="https://play.google.com/store/apps/details?id=com.mobstac.thehindu"
                title="Google Play"
                ><img
                  class=""
                  alt="Google Play"
                  data-src-template="https://www.thehindu.com/theme/images/th-online/google-playstore-icon.svg"
                  src="https://www.thehindu.com/theme/images/th-online/google-playstore-icon.svg" /></a
              ><a href="https://bit.ly/thiphone" title="Apple Store"
                ><img
                  class=""
                  alt="Apple Store"
                  data-src-template="https://www.thehindu.com/theme/images/th-online//apple-store-icon.svg"
                  src="https://www.thehindu.com/theme/images/th-online//apple-store-icon.svg"
              /></a>
            </div>
          </div>
        </div>
        <div class="row footer-menu">
          <div class="col-xl-2 col-lg-2 col-md-3 col-sm-3 col-xs-12 col-12">
            <ul class="footer-list">
              <li class="title">
                <h5 class="">The Hindu</h5>
                <ul class="footer-sub-list">
                  <li>
                    <a
                      class="about us-menu"
                      href="https://www.thehindu.com/aboutus/"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      class="code of editorial values-menu"
                      href="https://www.thehindu.com/values/"
                    >
                      Code of Editorial Values
                    </a>
                  </li>
                  <li>
                    <a
                      class="news archive-menu"
                      href="https://www.thehindu.com/archive/"
                    >
                      News Archive
                    </a>
                  </li>
                  <li>
                    <a
                      class="sitemap-menu"
                      href="https://www.thehindu.com/sitemap/"
                    >
                      Sitemap
                    </a>
                  </li>
                  <li>
                    <a
                      class="print subscription-menu"
                      href="http://www.thehindugroup.in/subscribe/"
                    >
                      Print Subscription
                    </a>
                  </li>
                  <li>
                    <a
                      class="digital subscription-menu"
                      href="https://www.thehindu.com/subscription/?utm_source=footer&amp;utm_medium=section&amp;utm_caign=website"
                    >
                      Digital Subscription
                    </a>
                  </li>
                  <li>
                    <a
                      class="subscribe to newsletters-menu"
                      href="https://www.thehindu.com/newsletter-subscription/"
                    >
                      Subscribe to Newsletters
                    </a>
                  </li>
                  <li>
                    <a
                      class="rss feeds-menu"
                      href="https://www.thehindu.com/rssfeeds/"
                    >
                      Rss Feeds
                    </a>
                  </li>
                  <li>
                    <a
                      class="readers editor-terms of reference-menu"
                      href="https://www.thehindu.com/readers-editor-terms/"
                    >
                      Readers Editor-Terms of Reference
                    </a>
                  </li>
                  <li>
                    <a
                      class="authors &amp; contributors-menu"
                      href="https://www.thehindu.com/profile/"
                    >
                      Authors &amp; Contributors
                    </a>
                  </li>
                </ul>
              </li>
              <li class="title">
                <h5 class="">Contact us</h5>
                <ul class="footer-sub-list">
                  <li>
                    <a
                      class="contact us-menu"
                      href="https://www.thehindu.com/contacts/"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      class="social media-menu"
                      href="https://www.thehindu.com/social/"
                    >
                      Social Media
                    </a>
                  </li>
                  <li>
                    <a
                      class="advertise with us-menu"
                      href="https://www.thehindu.com/advertise-with-us/"
                    >
                      Advertise With Us
                    </a>
                  </li>
                </ul>
              </li>
              <li class="title">
                <h5 class="">Group News Sites</h5>
                <ul class="footer-sub-list">
                  <li>
                    <a
                      class="business line-menu"
                      href="https://www.thehindubusinessline.com/"
                      target="_blank"
                    >
                      Business Line
                    </a>
                  </li>
                  <li>
                    <a
                      class="bl on campus-menu"
                      href="https://bloncampus.thehindubusinessline.com/"
                      target="_blank"
                    >
                      BL on Campus
                    </a>
                  </li>
                  <li>
                    <a
                      class="sportstar-menu"
                      href="https://sportstar.thehindu.com/"
                      target="_blank"
                    >
                      Sportstar
                    </a>
                  </li>
                  <li>
                    <a
                      class="frontline-menu"
                      href="https://frontline.thehindu.com/"
                      target="_blank"
                    >
                      Frontline
                    </a>
                  </li>
                  <li>
                    <a
                      class="இந்து தமிழ் திசை-menu"
                      href="https://www.hindutamil.in/"
                      target="_blank"
                    >
                      இந்து தமிழ் திசை
                    </a>
                  </li>
                  <li>
                    <a
                      class="the hindu centre-menu"
                      href="https://www.thehinducentre.com/"
                      target="_blank"
                    >
                      The Hindu Centre
                    </a>
                  </li>
                  <li>
                    <a
                      class="young world club-menu"
                      href="https://ywc.thehindu.com/"
                      target="_blank"
                    >
                      Young World Club
                    </a>
                  </li>
                  <li>
                    <a
                      class="the hindu epaper-menu"
                      href="https://epaper.thehindu.com/?utm_source=Hindu&amp;utm_medium=Menu&amp;utm_campaign=Header"
                      target="_blank"
                    >
                      The Hindu ePaper
                    </a>
                  </li>
                  <li>
                    <a
                      class="business line epaper-menu"
                      href="https://epaper.thehindubusinessline.com/login"
                      target="_blank"
                    >
                      Business Line ePaper
                    </a>
                  </li>
                  <li>
                    <a
                      class="crossword + free games-menu"
                      href="https://crossword.thehindu.com/?utm_source=thehindu&amp;utm_medium=mainmenu"
                      target="_blank"
                    >
                      Crossword + Free Games
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="col-xl-2 col-lg-2 col-md-3 col-sm-3 col-xs-12 col-12">
            <ul class="footer-list">
              <li class="title">
                <h5 class="">Other Products</h5>
                <ul class="footer-sub-list">
                  <li>
                    <a
                      class="roofandfloor-menu"
                      href="https://roofandfloor.thehindu.com/?utm_source=thehindu&amp;amp;utm_medium=referral&amp;amp;utm_campaign=Internal-Marketing"
                      target="_blank"
                    >
                      RoofandFloor
                    </a>
                  </li>
                  <li>
                    <a
                      class="step-menu"
                      href="https://step.thehindu.com/"
                      target="_blank"
                    >
                      STEP
                    </a>
                  </li>
                  <li>
                    <a
                      class="images-menu"
                      href="https://thehinduimages.com/"
                      target="_blank"
                    >
                      Images
                    </a>
                  </li>
                  <li>
                    <a
                      class="classifieds - print-menu"
                      href="http://www.thehinduclassifieds.in/"
                      target="_blank"
                    >
                      Classifieds - Print
                    </a>
                  </li>
                  <li>
                    <a
                      class="bookstore &amp; special publications-menu"
                      href="https://publications.thehindugroup.com/bookstore/"
                      target="_blank"
                    >
                      Bookstore &amp; Special Publications
                    </a>
                  </li>
                </ul>
              </li>
              <li class="title mt-4">
                <h5 class="">Popular Sections</h5>
                <ul class="footer-sub-list">
                  <li>
                    <a
                      class="elections-menu"
                      href="https://www.thehindu.com/elections/"
                    >
                      Elections
                    </a>
                  </li>
                  <li>
                    <a
                      class="israel hamas war live updates-menu"
                      href="https://www.thehindu.com/news/international/israel-hamas-war-live-updates-truce-ends/article67597057.ece"
                    >
                      Israel Hamas War Live Updates
                    </a>
                  </li>
                  <li>
                    <a
                      class="israeli–palestinian conflict 2023-menu"
                      href="https://www.thehindu.com/topic/israel-palestine-conflict/"
                    >
                      Israeli–Palestinian conflict 2023
                    </a>
                  </li>
                  <li>
                    <a
                      class="latest news-menu"
                      href="https://www.thehindu.com/"
                    >
                      Latest News
                    </a>
                  </li>
                  <li>
                    <a
                      class="national news-menu"
                      href="https://www.thehindu.com/news/national/"
                    >
                      National News
                    </a>
                  </li>
                  <li>
                    <a
                      class="international news-menu"
                      href="https://www.thehindu.com/news/international/"
                    >
                      International News
                    </a>
                  </li>
                  <li>
                    <a
                      class="videos-menu"
                      href="https://www.thehindu.com/videos/"
                    >
                      Videos
                    </a>
                  </li>
                  <li>
                    <a
                      class="life &amp; style-menu"
                      href="https://www.thehindu.com/life-and-style/"
                    >
                      Life &amp; Style
                    </a>
                  </li>
                  <li>
                    <a class="food-menu" href="https://www.thehindu.com/food/">
                      Food
                    </a>
                  </li>
                  <li>
                    <a
                      class="podcast-menu"
                      href="https://www.thehindu.com/podcast/"
                    >
                      Podcast
                    </a>
                  </li>
                  <li>
                    <a
                      class="showcase-menu"
                      href="https://www.thehindu.com/showcase/"
                    >
                      Showcase
                    </a>
                  </li>
                </ul>
              </li>
              <li class="title mt-4">
                <h5 class="">
                  <a href="https://www.thehindu.com/opinion/"> Opinion </a>
                </h5>
                <ul class="footer-sub-list">
                  <li>
                    <a href="https://www.thehindu.com/opinion/editorial/">
                      Editorial
                    </a>
                  </li>
                  <li>
                    <a href="https://www.thehindu.com/opinion/columns/">
                      Columns
                    </a>
                  </li>
                  <li>
                    <a href="https://www.thehindu.com/opinion/op-ed/">
                      Comment
                    </a>
                  </li>
                  <li>
                    <a href="https://www.thehindu.com/opinion/cartoon/">
                      Cartoon
                    </a>
                  </li>
                  <li>
                    <a href="https://www.thehindu.com/opinion/letters/">
                      Letters
                    </a>
                  </li>
                  <li>
                    <a href="https://www.thehindu.com/opinion/interview/">
                      Interview
                    </a>
                  </li>
                  <li>
                    <a href="https://www.thehindu.com/opinion/lead/"> Lead </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="col-xl-2 col-lg-2 col-md-3 col-sm-3 col-xs-12 col-12">
            <ul class="footer-list">
              <li class="title">
                <h5 class="">
                  <a href="https://www.thehindu.com/business/"> Business </a>
                </h5>
                <ul class="footer-sub-list">
                  <li>
                    <a href="https://www.thehindu.com/business/agri-business/">
                      Agri-Business
                    </a>
                  </li>
                  <li>
                    <a href="https://www.thehindu.com/business/Industry/">
                      Industry
                    </a>
                  </li>
                  <li>
                    <a href="https://www.thehindu.com/business/Economy/">
                      Economy
                    </a>
                  </li>
                  <li>
                    <a href="https://www.thehindu.com/business/markets/">
                      Markets
                    </a>
                  </li>
                  <li>
                    <a href="https://www.thehindu.com/business/budget/">
                      Budget
                    </a>
                  </li>
                </ul>
              </li>
              <li class="title">
                <h5 class="">
                  <a href="https://www.thehindu.com/sport/"> Sport </a>
                </h5>
                <ul class="footer-sub-list">
                  <li>
                    <a href="https://www.thehindu.com/sport/cricket/">
                      Cricket
                    </a>
                  </li>
                  <li>
                    <a href="https://www.thehindu.com/sport/football/">
                      Football
                    </a>
                  </li>
                  <li>
                    <a href="https://www.thehindu.com/sport/hockey/">
                      Hockey
                    </a>
                  </li>
                  <li>
                    <a href="https://www.thehindu.com/sport/tennis/">
                      Tennis
                    </a>
                  </li>
                  <li>
                    <a href="https://www.thehindu.com/sport/athletics/">
                      Athletics
                    </a>
                  </li>
                  <li>
                    <a href="https://www.thehindu.com/sport/motorsport/">
                      Motorsport
                    </a>
                  </li>
                  <li>
                    <a href="https://www.thehindu.com/sport/races/"> Races </a>
                  </li>
                  <li>
                    <a href="https://www.thehindu.com/sport/other-sports/">
                      Other Sports
                    </a>
                  </li>
                </ul>
              </li>
              <li class="title">
                <h5 class="">
                  <a href="https://www.thehindu.com/sci-tech/"> Sci-Tech </a>
                </h5>
                <ul class="footer-sub-list">
                  <li>
                    <a href="https://www.thehindu.com/sci-tech/science/">
                      Science
                    </a>
                  </li>
                  <li>
                    <a href="https://www.thehindu.com/sci-tech/technology/">
                      Technology
                    </a>
                  </li>
                  <li>
                    <a href="https://www.thehindu.com/sci-tech/health/">
                      Health
                    </a>
                  </li>
                  <li>
                    <a href="https://www.thehindu.com/sci-tech/agriculture/">
                      Agriculture
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.thehindu.com/sci-tech/energy-and-environment/"
                    >
                      Environment
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.thehindu.com/sci-tech/technology/gadgets/"
                    >
                      Gadgets
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.thehindu.com/sci-tech/technology/internet/"
                    >
                      Internet
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="col-xl-2 col-lg-2 col-md-3 col-sm-3 col-xs-12 col-12">
            <ul class="footer-list">
              <li class="title">
                <h5 class="">
                  <a href="https://www.thehindu.com/news/states/"> States </a>
                </h5>
                <ul class="footer-sub-list">
                  <li>
                    <a
                      href="https://www.thehindu.com/news/national/andhra-pradesh/"
                    >
                      Andhra Pradesh
                    </a>
                  </li>
                  <li>
                    <a href="https://www.thehindu.com/news/national/karnataka/">
                      Karnataka
                    </a>
                  </li>
                  <li>
                    <a href="https://www.thehindu.com/news/national/kerala/">
                      Kerala
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.thehindu.com/news/national/tamil-nadu/"
                    >
                      Tamil Nadu
                    </a>
                  </li>
                  <li>
                    <a href="https://www.thehindu.com/news/national/telangana/">
                      Telangana
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.thehindu.com/news/national/other-states/"
                    >
                      Other States
                    </a>
                  </li>
                </ul>
              </li>
              <li class="title">
                <h5 class="">
                  <a href="https://www.thehindu.com/news/cities/"> Cities </a>
                </h5>
                <ul class="footer-sub-list">
                  <li>
                    <a href="https://www.thehindu.com/news/cities/bangalore/">
                      Bengaluru
                    </a>
                  </li>
                  <li>
                    <a href="https://www.thehindu.com/news/cities/chennai/">
                      Chennai
                    </a>
                  </li>
                  <li>
                    <a href="https://www.thehindu.com/news/cities/Coimbatore/">
                      Coimbatore
                    </a>
                  </li>
                  <li>
                    <a href="https://www.thehindu.com/news/cities/Delhi/">
                      Delhi
                    </a>
                  </li>
                  <li>
                    <a href="https://www.thehindu.com/news/cities/Hyderabad/">
                      Hyderabad
                    </a>
                  </li>
                  <li>
                    <a href="https://www.thehindu.com/news/cities/Kochi/">
                      Kochi
                    </a>
                  </li>
                  <li>
                    <a href="https://www.thehindu.com/news/cities/kolkata/">
                      Kolkata
                    </a>
                  </li>
                  <li>
                    <a href="https://www.thehindu.com/news/cities/kozhikode/">
                      Kozhikode
                    </a>
                  </li>
                  <li>
                    <a href="https://www.thehindu.com/news/cities/Madurai/">
                      Madurai
                    </a>
                  </li>
                  <li>
                    <a href="https://www.thehindu.com/news/cities/Mangalore/">
                      Mangaluru
                    </a>
                  </li>
                  <li>
                    <a href="https://www.thehindu.com/news/cities/mumbai/">
                      Mumbai
                    </a>
                  </li>
                  <li>
                    <a href="https://www.thehindu.com/news/cities/puducherry/">
                      Puducherry
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.thehindu.com/news/cities/Thiruvananthapuram/"
                    >
                      Thiruvananthapuram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.thehindu.com/news/cities/Tiruchirapalli/"
                    >
                      Tiruchirapalli
                    </a>
                  </li>
                  <li>
                    <a href="https://www.thehindu.com/news/cities/Vijayawada/">
                      Vijayawada
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.thehindu.com/news/cities/Visakhapatnam/"
                    >
                      Visakhapatnam
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div
            class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 col-12 mobile-footer-pad"
          >
            <h5 class="footer-top-border">Trending on thehindu.com</h5>
            <ul class="footer-menu-list">
              <li>
                <a
                  href="https://www.thehindu.com/society/green-humour-by-rohan-chakravarty-on-lakshadweep-tourism-and-maldives-boycott-row/article67726368.ece"
                  title="Updated: January 11, 2024 12:15 IST
  Published: January 11, 2024 12:15 IST"
                >
                  Green Humour by Rohan Chakravarty on Lakshadweep tourism and
                  Maldives boycott row
                  <span
                    ><img
                      class=""
                      data-src-template="https://www.thehindu.com/theme/images/th-online/graph-arrow-icon.svg"
                      alt=""
                      src="https://www.thehindu.com/theme/images/th-online/graph-arrow-icon.svg"
                  /></span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.thehindu.com/news/international/maldives-china-sign-20-agreements-after-muizzu-xi-meeting-amid-diplomatic-row-with-india/article67728474.ece"
                  title="Updated: January 11, 2024 18:19 IST
  Published: January 11, 2024 02:05 IST"
                >
                  Maldives, China sign 20 agreements after Muizzu-Xi meeting
                  amid diplomatic row with India
                  <span
                    ><img
                      class=""
                      data-src-template="https://www.thehindu.com/theme/images/th-online/graph-arrow-icon.svg"
                      alt=""
                      src="https://www.thehindu.com/theme/images/th-online/graph-arrow-icon.svg"
                  /></span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.thehindu.com/news/international/us-britain-launch-massive-retaliatory-strike-against-iran-backed-houthis-in-yemen/article67733085.ece"
                  title="Updated: January 12, 2024 08:38 IST
  Published: January 12, 2024 05:50 IST"
                >
                  U.S., Britain launch massive retaliatory strike against
                  Iran-backed Houthis in Yemen
                  <span
                    ><img
                      class=""
                      data-src-template="https://www.thehindu.com/theme/images/th-online/graph-arrow-icon.svg"
                      alt=""
                      src="https://www.thehindu.com/theme/images/th-online/graph-arrow-icon.svg"
                  /></span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.thehindu.com/entertainment/movies/netflix-removes-nayanthara-starrer-annapoorani-after-right-wing-outrage/article67729841.ece"
                  title="Updated: January 12, 2024 13:52 IST
  Published: January 11, 2024 14:20 IST"
                >
                  Netflix removes
                  Nayanthara-starrer&nbsp;‘Annapoorani’&nbsp;after right-wing
                  outrage
                  <span
                    ><img
                      class=""
                      data-src-template="https://www.thehindu.com/theme/images/th-online/graph-arrow-icon.svg"
                      alt=""
                      src="https://www.thehindu.com/theme/images/th-online/graph-arrow-icon.svg"
                  /></span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.thehindu.com/entertainment/movies/merry-christmas-movie-review-sriram-raghavan-delivers-a-sumptuous-slice-of-crime-thanks-to-a-fabulous-vijay-sethupathi/article67733569.ece"
                  title="Updated: January 12, 2024 16:13 IST
  Published: January 12, 2024 13:09 IST"
                >
                  ‘Merry Christmas’ movie review: Sriram Raghavan delivers a
                  sumptuous slice of crime thanks to a fabulous Vijay Sethupathi
                  <span
                    ><img
                      class=""
                      data-src-template="https://www.thehindu.com/theme/images/th-online/graph-arrow-icon.svg"
                      alt=""
                      src="https://www.thehindu.com/theme/images/th-online/graph-arrow-icon.svg"
                  /></span>
                </a>
              </li>
            </ul>
            <h5 class="no-border">Trending on our Group sites</h5>
            <ul class="footer-menu-list">
              <li>
                <a
                  href="https://www.thehindubusinessline.com/info-tech/tcs-reports-4-growth-in-q3-consolidated-revenue-led-by-strong-uk-performance/article67730578.ece"
                  title="Updated: January 11, 2024 22:05 IST
  Published: January 11, 2024 18:36 IST"
                >
                  TCS posts a tepid 2% rise in profits with the North American
                  market slow to recover
                  <span
                    ><img
                      class=""
                      data-src-template="https://www.thehindu.com/theme/images/th-online/graph-arrow-icon.svg"
                      alt=""
                      src="https://www.thehindu.com/theme/images/th-online/graph-arrow-icon.svg"
                  /></span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.thehindubusinessline.com/companies/unfazed-by-controversy-mutha-group-to-go-ahead-with-maldives-resort-project/article67722444.ece"
                  title="Updated: January 9, 2024 13:58 IST
  Published: January 9, 2024 13:58 IST"
                >
                  Unfazed by controversy, Mutha group to go ahead with Maldives
                  resort project
                  <span
                    ><img
                      class=""
                      data-src-template="https://www.thehindu.com/theme/images/th-online/graph-arrow-icon.svg"
                      alt=""
                      src="https://www.thehindu.com/theme/images/th-online/graph-arrow-icon.svg"
                  /></span>
                </a>
              </li>
              <li>
                <a
                  href="https://frontline.thehindu.com/world-affairs/yoga-maldives-china-belt-road-initiative-india-mohamed-muizzu-ibu-solih/article67457703.ece"
                  title="Updated: November 10, 2023 13:15 IST
  Published: November 2, 2023 11:00 IST"
                  style="text-decoration: none"
                >
                  How BJP’s yoga misadventure in Maldives paved the way for
                  China to assert its dominance
                  <span
                    ><img
                      class=""
                      data-src-template="https://www.thehindu.com/theme/images/th-online/graph-arrow-icon.svg"
                      alt=""
                      src="https://www.thehindu.com/theme/images/th-online/graph-arrow-icon.svg"
                  /></span>
                </a>
              </li>
              <li>
                <a
                  href="https://frontline.thehindu.com/environment/the-forest-conservation-amendment-act-2023-dramatically-alters-forest-governance-in-india/article67726166.ece"
                  title="Updated: January 11, 2024 12:15 IST
  Published: January 10, 2024 14:08 IST"
                >
                  Greenlight for destruction: Controversial forest Act opens
                  door to unfettered deforestation
                  <span
                    ><img
                      class=""
                      data-src-template="https://www.thehindu.com/theme/images/th-online/graph-arrow-icon.svg"
                      alt=""
                      src="https://www.thehindu.com/theme/images/th-online/graph-arrow-icon.svg"
                  /></span>
                </a>
              </li>
              <li>
                <a
                  href="https://sportstar.thehindu.com/cricket/ind-vs-afg-head-to-head-t20i-record-stats-india-afghanistan-highest-scores-best-performances/article67728311.ece"
                  title="Updated: January 11, 2024 07:13 IST
  Published: January 11, 2024 07:13 IST"
                >
                  IND vs AFG head-to-head record in T20Is: India vs Afghanistan
                  overall stats
                  <span
                    ><img
                      class=""
                      data-src-template="https://www.thehindu.com/theme/images/th-online/graph-arrow-icon.svg"
                      alt=""
                      src="https://www.thehindu.com/theme/images/th-online/graph-arrow-icon.svg"
                  /></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="row pb-5">
          <div class="col-xl-12 col-md-12 col-sm-12 col-xs-12 col-12">
            <ul class="footer-social-icon">
              <li>
                <a
                  href="https://whatsapp.com/channel/0029VaAvwQJ90x34WZ6FDg36"
                  target="_blank"
                  rel="nofollow"
                  title="WhatsApp"
                  ><img
                    alt="Whatsapp"
                    class=""
                    src="https://www.thehindu.com/theme/images/th-online/whatsapp-header-icon.svg"
                    data-src-template="https://www.thehindu.com/theme/images/th-online/whatsapp-header-icon.svg"
                /></a>
              </li>
              <li>
                <a
                  href="https://twitter.com/The_Hindu"
                  target="_blank"
                  rel="nofollow"
                  title="Twitter"
                  ><img
                    class=""
                    alt="Twitter"
                    src="https://www.thehindu.com/theme/images/th-online/twitter-x.svg"
                    data-src-template="https://www.thehindu.com/theme/images/th-online/twitter-x.svg"
                /></a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/thehindu"
                  target="_blank"
                  rel="nofollow"
                  title="Facebook"
                  ><img
                    class=""
                    alt="Facebook"
                    src="https://www.thehindu.com/theme/images/th-online/footer-icon-fb.svg"
                    data-src-template="https://www.thehindu.com/theme/images/th-online/footer-icon-fb.svg"
                /></a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/the_hindu/?ref=badge"
                  target="_blank"
                  rel="nofollow"
                  title="Instagram"
                  ><img
                    alt="Instagram"
                    class=""
                    src="https://www.thehindu.com/theme/images/th-online/footer-icon-insta.svg"
                    data-src-template="https://www.thehindu.com/theme/images/th-online/footer-icon-insta.svg"
                /></a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/school/the-hindu/"
                  target="_blank"
                  rel="nofollow"
                  title="Linkedin"
                  ><img
                    alt="Linkedin"
                    class=""
                    src="https://www.thehindu.com/theme/images/th-online/footer-icon-linkedin.svg"
                    data-src-template="https://www.thehindu.com/theme/images/th-online/footer-icon-linkedin.svg"
                /></a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/user/The1878Hindu"
                  target="_blank"
                  rel="nofollow"
                  title="Youtube"
                  ><img
                    alt="Youtube"
                    class=""
                    src="https://www.thehindu.com/theme/images/th-online/footer-icon-youtube.svg"
                    data-src-template="https://www.thehindu.com/theme/images/th-online/footer-icon-youtube.svg"
                /></a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com/show/5yESTCj0iikA81EP3uXkQC"
                  target="_blank"
                  rel="nofollow"
                  title="Spotify"
                  ><img
                    alt="Spotify"
                    class=""
                    src="https://www.thehindu.com/theme/images/th-online/footer-icon-drizzle.svg"
                    data-src-template="https://www.thehindu.com/theme/images/th-online/footer-icon-drizzle.svg"
                /></a>
              </li>
              <li>
                <a
                  href="https://t.me/THnewsupdates"
                  target="_blank"
                  rel="nofollow"
                  title="Telegram"
                  ><img
                    alt="Telegram"
                    class=""
                    src="https://www.thehindu.com/theme/images/th-online/telegram-icon.svg"
                    data-src-template="https://www.thehindu.com/theme/images/th-online/telegram-icon.svg"
                /></a>
              </li>
            </ul>
            <ul class="link-list">
              <li>
                <a
                  class="terms of use-menu"
                  href="https://www.thehindugroup.com/termsofuse.html"
                  target="_blank"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  class="privacy policy-menu"
                  href="https://www.thehindugroup.com/privacy.html"
                  target="_blank"
                >
                  Privacy Policy
                </a>
              </li>
              <li id="teconsent"></li>
            </ul>
            <div style="display: flex; justify-content: space-between">
              <div class="copyrights">
                <a
                  >Copyright© 2024, THG PUBLISHING PVT LTD. or its affiliated
                  companies. All rights reserved.</a
                >
              </div>
              <div class="back-to-top">
                <p>
                  BACK TO TOP<img
                    alt="Back to Top"
                    class=""
                    data-src-template="https://www.thehindu.com/theme/images/th-online/back-to-top-arrow.svg"
                    src="https://www.thehindu.com/theme/images/th-online/back-to-top-arrow.svg"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>

     </div>
       `;
    // Append the footer to the container
    footerContainer.appendChild(footer);
    // Dynamically create a link element for the external CSS file
    const linkElement = document.createElement("link");
    linkElement.rel = "stylesheet";
    linkElement.href = "Footer.css"; // Replace with the actual path to your CSS file

    // Append the link element to the head of the document
    document.head.appendChild(linkElement);
  }

  // Add your footer content
  createFooter();
});
