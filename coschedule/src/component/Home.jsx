import styles from "../Css/Home.module.css";

const Home = () => {
  return (
    <div>
      <h1 className={styles.heading}>
        Organize All Of Your Marketing In
        <h1>One Place.From&nbsp;Any&nbsp;Place.</h1>
      </h1>
      <p className={styles.para}>
        Get more done in less time with the only work management software
        for&nbsp;marketers.
      </p>
      <a href="www.goggle.com" className={styles.button}>
        Get Started Free
      </a>
      <p className={styles.small}>Why not? it's free forever</p>
      <img
        className={styles.imgposter}
        src="https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fhome-calendar.png&w=3840&q=75"
        alt="p"
      />
      <h2 className={styles.heading2}>
        30,000 marketers start their day with&nbsp;CoSchedule
      </h2>
      <div className={styles.container}>
        <div className={styles.second_container}>
          <div className={styles.customerlogo}>
            <span>
              <img
                className={styles.imgstyle}
                src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fforbes-logo.webp&w=384&q=75"
                alt="logo1"
              />
            </span>
          </div>
          <div className={styles.customerlogo}>
            <span>
              <img
                className={styles.imgstyle}
                src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fyamaha-logo.webp&w=384&q=75"
                alt="logo1"
              />
            </span>
          </div>
          <div className={styles.customerlogo}>
            <span>
              <img
                className={styles.imgstyle}
                src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Funicef-logo.webp&w=384&q=75"
                alt="logo1"
              />
            </span>
          </div>
          <div className={styles.customerlogo}>
            <span>
              <img
                className={styles.imgstyle}
                src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fconvertkit-logo.webp&w=384&q=75"
                alt="logo1"
              />
            </span>
          </div>
          <div className={styles.customerlogo}>
            <span>
              <img
                className={styles.imgstyle}
                src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fwalgreens-logo.webp&w=384&q=75"
                alt="logo1"
              />
            </span>
          </div>
          <div className={styles.customerlogo}>
            <span>
              <img
                className={styles.imgstyle}
                src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fdictionary-com-logo.webp&w=384&q=75"
                alt="logo1"
              />
            </span>
          </div>
          <div className={styles.customerlogo}>
            <span>
              <img
                className={styles.imgstyle}
                src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fp-and-g-logo.webp&w=384&q=75"
                alt="logo1"
              />
            </span>
          </div>
          <div className={styles.customerlogo}>
            <span>
              <img
                className={styles.imgstyle}
                src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fschwans-logo.webp&w=384&q=75"
                alt="logo1"
              />
            </span>
          </div>
        </div>
      </div>

      {/* end of div */}

      <div className={styles.BigBox}>
        <div className={styles.boxA}>
          <h2 className={styles.heading3}>Our Products</h2>
        </div>
        <div className={styles.box}>
          <div className={styles.inside}>
            <div className={styles.smallBox}>
              <span>
                <img
                  className={styles.banner}
                  src="	https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fmc-product-background.png&w=1920&q=100"
                  alt="banner"
                />
              </span>

              <span>
                <img
                className={styles.imglogo}
                  src="https://coschedule.com/_next/image?url=%2Fimg%2Fproduct%2Fmarketing-calendar-product-icon.png&w=128&q=75"
                  alt="banner"
                />
              </span>
              <h3 className={styles.subheading}>Marketing Calendar</h3>
              <p className={styles.subpara}>
                A calendar that helps you see, schedule, and share
                your&nbsp;marketing.
              </p>
              <ul className={styles.ullist}>
                <li>See everything together in one place</li>
                <li>Share your progress with higher-ups</li>
                <li>Show what your marketing is doing</li>
              </ul>
              <a className={styles.checkbtn}
                href="/marketing-calendar"
                title="Learn more about CoSchedule's Marketing Calendar"
                class="ButtonLink_buttonLink__hj1vQ btn btn-small btn-cal"
              >
                Explore More
              </a>
            </div>
          </div>
          <div className={styles.inside}>
            <div className={styles.smallBox}>
              <span>
                <img
                  className={styles.banner}
                  src="https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fsuite-product-background.png&w=1920&q=100"
                  alt="banner"
                />
              </span>

              <span>
                <img

                 className={styles.imglogo}
                  src="https://coschedule.com/_next/image?url=%2Fimg%2Fproduct%2Fmarketing-suite-product-icon.png&w=128&q=75"
                  alt="banner"
                />
              </span>

              <h3>Marketing Suite</h3>
              <p>
                A family of agile marketing products to coordinate your team,
                projects, and&nbsp;process.
              </p>
              <ul>
                <li>Manage marketing requests</li>
                <li>Eliminate content bottlenecks</li>
                <li>Maximize resources to increase output</li>
              </ul>
              <a
                href="/marketing-suite"
                data-testid="button-link"
                title="Learn more about CoSchedule's Marketing Suite"
                class="ButtonLink_buttonLink__hj1vQ btn btn-small btn-cal"
              >
                Explore More
              </a>
            </div>
          </div>
        </div>

{/* end flex 1 */}
<div className={styles.box}>
          <div className={styles.inside}>
            <div className={styles.smallBox}>
              <span>
                <img
                  className={styles.banner}
                  src="	https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fhs-product-background.png&w=1920&q=100"
                  alt="banner"
                />
              </span>

              <span>
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width="60" height="60" alt="Headline Studio Icon"  className={`${styles.svglogo}`}><path d="M837.929 137.963v-1.636L623.034 390.3V255.364c-85.59 0-165.174 46.549-165.174 153.161v130.394h-.195v12.256h.195v34.34l-51.732 61.14v-294.6c-85.59 0-165.174 46.549-165.174 153.161v438.457c85.59 0 165.174-46.549 165.174-153.161v-42.051l51.537-60.91v159.435c85.59 0 165.174-46.549 165.174-153.161v-142.65h.195v-59.067l50.838-60.084v314.364c85.59 0 165.174-46.549 165.174-153.162v-456.9Z" ></path></svg>
              </span>
              <h3>Marketing Calendar</h3>
              <p>
                A calendar that helps you see, schedule, and share
                your&nbsp;marketing.
              </p>
              <ul>
                <li>See everything together in one place</li>
                <li>Share your progress with higher-ups</li>
                <li>Show what your marketing is doing</li>
              </ul>
              <a
                href="/marketing-calendar"
                title="Learn more about CoSchedule's Marketing Calendar"
                class="ButtonLink_buttonLink__hj1vQ btn btn-small btn-cal"
              >
                Explore More
              </a>
            </div>
          </div>
          <div className={styles.inside}>
            <div className={styles.smallBox}>
              <span>
                <img
                  className={styles.banner}
                  src="https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fami-product-background.png&w=1920&q=100"
                  alt="banner"
                />
              </span>

              <span >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width="60" height="60" alt="Actionable Marketing Institute Icon" className={styles.svglogo1}  ><defs></defs><g ><g id="ami-logo-color_svg__Layer_1" data-name="Layer 1"><path  d="M830.85 902.13 187.52 585.72l76.54-174.6 650.56 320A95.23 95.23 0 0 1 960 854.83a95.24 95.24 0 0 1-129.15 47.3Z"></path><path d="m513 306.29 274.79 553.35A95.22 95.22 0 0 0 912 903.37a95.22 95.22 0 0 0 45.7-129.79L683 220.51a95.23 95.23 0 0 0-124.29-43.88A95.24 95.24 0 0 0 513 306.29Z"></path><path  d="M693.07 263.47a94.6 94.6 0 0 1-10.25 42.81L439 797.18l-170.9-84.06L512.75 220.5a95.27 95.27 0 0 1 180.32 43Z"></path><path d="m264.06 411.12-144.2 32.23a9.81 9.81 0 0 0-6.45 14.65l74.11 127.72Z"></path><path d="m151.35 436.74-21.49 48.79L113.41 458a9.78 9.78 0 0 1 6.44-14.62Z"></path><path  d="m439 797.18-31 62.47a95.24 95.24 0 1 1-169.92-86.08l30-60.45Z"></path><path d="m399.79 447.95-11.92 24.06 170.9 84.04-158.98-108.1zM641.75 565.61l229.35 144.6-208.86-103.26-20.49-41.34zM597.89 477.32l88.3-173.58-72.6 205.17-15.7-31.59z"></path></g></g></svg>
              </span>

              <h3>Marketing Suite</h3>
              <p>
                A family of agile marketing products to coordinate your team,
                projects, and&nbsp;process.
              </p>
              <ul>
                <li>Manage marketing requests</li>
                <li>Eliminate content bottlenecks</li>
                <li>Maximize resources to increase output</li>
              </ul>
              <a
                href="/marketing-suite"
                data-testid="button-link"
                title="Learn more about CoSchedule's Marketing Suite"
                class="ButtonLink_buttonLink__hj1vQ btn btn-small btn-cal"
              >
                Explore More
              </a>
            </div>
          </div>
        </div>

        {/* second flex start */}
      </div>
      {/*container cover div */}
    </div>
  );
};

export default Home;
