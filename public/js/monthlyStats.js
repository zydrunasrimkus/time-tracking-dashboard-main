function monthlyStats() {
    boxContent = "";
    document.querySelector('.active').classList.remove('active');
    document.getElementById('monthly').classList.add('active'); 
    DATA.map((data) => {
        boxContent += `
      <div class="info-card">
      <div class="top ${data.title.toLowerCase()}"></div>
      <div class="bottom">
        <div class="left-side">
          <div>${data.title}</div>
          <div>${data.timeframes.monthly.current} hrs</div>
          <div class="previousDesktop">Last week - ${data.timeframes.monthly.previous} hrs</div>
        </div>
        <div class="right-side">
          <span><img class="dots" src="/images/icon-ellipsis.svg" alt=""></span>
          <div class="previousMobile">Last week - ${data.timeframes.monthly.previous} hrs</div>
        </div>
      </div>
    </div>
        `;
    });
    userData.innerHTML = boxContent;
}