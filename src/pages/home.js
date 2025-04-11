
export default function Header() {
    const headerContent = document.createElement("header");
    headerContent.innerHTML = `
    <section class="Darkmode__container"> 
        <button id="theme-switch">
            <svg class="svg_black" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z"/></svg>
            <svg class="svg_white" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z"/></svg>
        </button>
    </section>
    <!-- navsection -->
    <nav class="navbar">
    <div class="logo">
            <a href="#">  <img src="./public/img/logo 2.png" alt=""></a>
        </div>
        <div class="menu">
            <div class="menu-links">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">kontakt</a>
                <a href="#">projects</a>
                
               
            </div>
           
        </div>
      <!--   <div class="menu-btn">
            <i class="fa-solid fa-bars"></i>
        </div> -->

    `;


    setTimeout(() => {
        const themeSwitch = document.getElementById('theme-switch');
        let darkmode = localStorage.getItem('darkmode');

        const enableDarkmode = () => {
            document.body.classList.add('darkmode');
            localStorage.setItem('darkmode', 'active');
        };

        const disableDarkmode = () => {
            document.body.classList.remove('darkmode');
            localStorage.setItem('darkmode', null);
        };

        if (darkmode === "active") enableDarkmode();

        themeSwitch.addEventListener("click", () => {
            darkmode = localStorage.getItem('darkmode');
            darkmode !== "active" ? enableDarkmode() : disableDarkmode();
        });
    }, 0);

    return headerContent;
}