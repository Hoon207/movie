import React from 'react';
import '../css/home.css';
function Home(props) {
  return (
    <main id='main_home'>
    <section id='sec1'>
      <h2>Download YTS YIFY movies: HD smallest size</h2>
      <div id='txtbox'>
        <p>Welcome to the official <span className='bold'>YTS.MX</span> website. <span className='bold'>Here</span> you can browse and download YIFY movies in excellent 720p, 1080p, 2160p 4K and 3D quality, all at the smallest file size. YTS Movies Torrents.
        IMPORTANT - YTS.MX is the only new official domain for  <span className='bold'>YIFY Movies</span></p>
      </div>
      <ul id='sns'>
        <li>@YTSMX_UPDATES</li>
        <li>Follow <span className='bold'>@YTSYIFY</span> for upcoming featured movies!</li>
        <li>@ytsyify</li>
      </ul>
      <ul id='down'>
        <li>🎃<span className='bold'>Popular Downloads</span></li>
        <li>🧩<span className='bold'>more featured...</span></li>
      </ul>

      <div>
        <ul id='movie_list'>
          <li><img src={`${process.env.PUBLIC_URL}/images/snowwhite.jpg`} alt="" /></li>
          <li><img src={`${process.env.PUBLIC_URL}/images/nomas.jpg`} alt="" /></li>
          <li><img src={`${process.env.PUBLIC_URL}/images/minecraft.jpg`} alt="" /></li>
          <li><img src={`${process.env.PUBLIC_URL}/images/ugly.jpg`} alt="" /></li>
        </ul>
      </div>
    </section>
    <section id='sec2'>
      <h2>Warning! Download only with VPN </h2>
      <div id='warning'>
        <p>Downloading torrents is risky for you: your IP and leaked private data being actively tracked by your ISP and Government Agencies Protect yourself from expensive lawsuits and fines NOW! You must use a VPΝ like Expert. It is the only way to download torrents fully anonymous by encrypting all traffic with zero logs.</p>
        <p>
        <span className='green'>Personal data disclosing your real identity: your IP address, <span className='red'>106.246.249.226</span> is exposed, which points directly to your location in <span className='red'>SOUTH KOREA</span>. You are browsing with <span className='red'>Chrome 136.0.0.0 (Windows 10)</span>, resolution <span className='red'>1920x1080px</span>, <span>4-cores CPU</span></span>.</p> 
        <p><span className='blue'>″Do not risk it! Protect yourself right now by downloading Expert VPN″ - William</span></p>
      </div>
    </section>
    </main>
  );
}

export default Home;