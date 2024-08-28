'use client'

import './styles.css';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { FaAngleDown, FaBars } from "react-icons/fa6";
import Testimonial from './testimonial';
import Link from 'next/link';



const delay = 3500;
const items = [
  {
    id: 1,
    quote: "“Prospct’s user experience is second-to-none. I’ve used a few competitors in the past - they were so cumbersome.”",
    user: "Antoine Garcia",
    company: "Ippon Technologies",
    image: "/images/Antoine-Garcia.png",
    statValue: "80%",
    statLabel: "Data accuracy",
  },
  {
    id: 2,
    quote: "“Prospct’s accuracy is excellent, it makes our work much easier and saves us a lot of time.”",
    user: "Jane Doe",
    company: "XYZ Corp",
    image: "/images/Jane-Doe.png",
    statValue: "85%",
    statLabel: "Data accuracy",
  },
  {
    id: 3,
    quote: "“The customer service is top-notch, and the platform is very user-friendly.”",
    user: "John Smith",
    company: "ABC Inc",
    image: "/images/John-Smith.png",
    statValue: "90%",
    statLabel: "Data accuracy",
  },
];



export default function Home(){
  const headerRef = useRef(null);
  const navRightRef = useRef(null);
  const navLeftRef = useRef(null);
  const mainHeroContainerRef = useRef(null);
  const sidePanelRef = useRef(null);
  const parentContainerRef = useRef(null);
  const subPanelRef = useRef(null);
  const subPanelChildRef = useRef(null);


  // Effect for handling scroll events and sticky header
  useEffect(() => {
    const header = headerRef.current;
    const navRight = navRightRef.current;
    const navLeft = navLeftRef.current;
    const mainHeroContainer = mainHeroContainerRef.current;
    const sticky = header.offsetTop;

    const handleScroll = () => {
      if (window.scrollY > sticky) {
        header.classList.add('sticky');
        navRight.classList.add('nav-right-sticky');
        navLeft.classList.add('nav-left-sticky');
        mainHeroContainer.classList.add('main-hero-container-sticky');
      } else {
        header.classList.remove('sticky');
        navRight.classList.remove('nav-right-sticky');
        navLeft.classList.remove('nav-left-sticky');
        mainHeroContainer.classList.remove('main-hero-container-sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect for handling clicks outside of the side panel
  useEffect(() => {
    const handleClickOutside = (event) => {
      const panel = sidePanelRef.current;
      const body = parentContainerRef.current;
  
      if (panel && body && !panel.contains(event.target)) {
        panel.classList.remove('open');
        body.classList.remove('dimmed');
      }
    };
  
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  
  
  // Toggle side panel visibility and dimmed class
  const toggleMenu = () => {
    const panel = sidePanelRef.current;
    const body = parentContainerRef.current;

    if (panel && body) {
      panel.classList.toggle('open');
      body.classList.toggle('dimmed');
    }
  };

  // Toggle visibility and rotation of sub-panel
  const toggleSubItem = () => {
    const subPanel = subPanelRef.current;

    if (subPanel) {
      subPanel.classList.toggle('hidden');

    }
  };

  // Toggle visibility and rotation of sub-panel child
  const toggleSubItemSubChild = () => {
    const subPanelChild = subPanelChildRef.current;

    if (subPanelChild) {
      subPanelChild.classList.toggle('hidden');
    }
  };



  



  const items = [
    {
      quote: '“Prospct’s user experience is second-to-none. I’ve used a few competitors in the past - they were so cumbersome.”',
      user: 'Antoine Garcia',
      company: 'Ippon Technologies',
      image: '/images/Antoine-Garcia.png',
      statValue: '80%',
      statLabel: 'Data accuracy'
    },
    {
      quote: '“Prospct’s user experience is second-to-none. I’ve used a few competitors in the past - they were so cumbersome.”',
      user: 'Jane Doe',
      company: 'TechCorp',
      image: '/images/Antoine-Garcia.png',
      statValue: '85%',
      statLabel: 'Conversion Rate'
    },
    {
      quote: '“Prospct’s user experience is second-to-none. I’ve used a few competitors in the past - they were so cumbersome.”',
      user: 'John Smith',
      company: 'BizSoft',
      image: '/images/Antoine-Garcia.png',
      statValue: '75%',
      statLabel: 'User Satisfaction'
    },
    {
      quote: '“Prospct’s user experience is second-to-none. I’ve used a few competitors in the past - they were so cumbersome.”',
      user: 'Antoine Garcia',
      company: 'Ippon Technologies',
      image: '/images/Antoine-Garcia.png',
      statValue: '80%',
      statLabel: 'Data accuracy'
    },
    {
      quote: '“Prospct’s user experience is second-to-none. I’ve used a few competitors in the past - they were so cumbersome.”',
      user: 'Jane Doe',
      company: 'TechCorp',
      image: '/images/Antoine-Garcia.png',
      statValue: '85%',
      statLabel: 'Conversion Rate'
    },
    {
      quote: '“Prospct’s user experience is second-to-none. I’ve used a few competitors in the past - they were so cumbersome.”',
      user: 'John Smith',
      company: 'BizSoft',
      image: '/images/Antoine-Garcia.png',
      statValue: '75%',
      statLabel: 'User Satisfaction'
    },
    // Add more testimonials here
  ];

  const delay = 3500;

const chunkArray = (array, size) => {
  return array.reduce((acc, _, i) => {
    if (i % size === 0) acc.push(array.slice(i, i + size));
    return acc;
  }, []);
};

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === groupedItems.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  const itemsPerSlide = 3; // Number of testimonials per slide
  const groupedItems = chunkArray(items, itemsPerSlide);


  const [activeIndex, setActiveIndex] = useState(null);


  const toggleOption = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const options = [
    {
      title: 'Why Prospct',
      link: '', // Example link
      subOptions: [
        { title: 'Prospecting', link: '' },
        { title: 'Adapt API', link: '' },
        { title: 'Enrichment', link: '' },
        { title: 'Our Data', link: '' },
        { title: 'Case Studies', link: '' },
        { title: 'Comparison', link: '' },
      ],
    },
    {
      title: 'Data Os',
      link: '',
      subOptions: [], // No sub-options
    },
    {
      title: 'Solutions',
      link: '',
      subOptions: [
        { title: 'Sales', link: '' },
        { title: 'Marketing', link: '' },
      ],
    },
    {
      title: 'Pricing',
      link: '/pricing',
      subOptions: [], // No sub-options
    },
    {
      title: 'Resources',
      link: '',
      subOptions: [
        { title: 'Blogs', link: '' },
        { title: 'Build your marketing stack', link: '' },
        { title: 'Case studies', link: '' },
        { title: 'About us', link: '' },
      ],
    },
    {
      title: 'Sign in',
      link: 'https://app.prospct.io/login',
      subOptions: [], // No sub-options
    },
    {
      title: 'Request Demo',
      link: '',
      subOptions: [], // No sub-options
    },
    {
      title: 'Start free Trial',
      link: 'https://app.prospct.io/register',
      subOptions: [], // No sub-options
    },
  ];


  const [activeTab, setActiveTab] = useState('platform');

  const handleTabClick = (target) => {
    setActiveTab(target);
  };
  



    return(
    <>
    <div ref={sidePanelRef} id="sidePanel" className="side-panel">
      <div className="p-2">
        {options.map((option, index) => (
          <div key={index}>
            <div
              className={`option flex justify-between items-center py-2 px-2 hover:bg-blue-100 ${
                option.subOptions.length ? 'cursor-pointer' : ''
              }`}
              onClick={() => option.subOptions.length && toggleOption(index)}
            >
              <Link href={option.link} className="flex-1">
                {option.title}
              </Link>
              {option.subOptions.length > 0 && (
                <span
                  className={`transform transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  <FaAngleDown />
                </span>
              )}
            </div>
            {option.subOptions.length > 0 && (
              <div
                className={`subOption transition-all duration-200 ease-in-out overflow-hidden transform  ${
                  activeIndex === index ? 'max-h-screen scale-y-100' : 'max-h-0 scale-y-20'
                }`}
                style={{ transformOrigin: 'top' }}
              >
                {option.subOptions.map((subOption, subIndex) => (
                  <Link key={subIndex} href={subOption.link} className="pl-4 py-1  hover:bg-blue-100 block cursor-pointer">
                    {subOption.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>

    {/* sidepanel end */}
    <div className="parent-container" id="idparentcontainer"  ref={parentContainerRef}>
      {/* header section start */}
      <div className="parentofall">
        <section className="main-hero-container w-full" id="main-hero-container"  ref={mainHeroContainerRef}>
          {/* nav */}
          {/* <div className="content"> */}
          <nav className="navbar" id="navbar-controller"  ref={headerRef}>
            <div className="nav-left" id="nav-left"  ref={navLeftRef}>
             <div className='logo-div'>
             <Link href='/'>
              <Image 
                  width={130}
                  height={50} 
                  loading="lazy"
                  src="/images/nav-logo.png"
                  className='mr-4'
                  alt="Company logo"
                />
                </Link>
                </div>
              <div className="logo-container">
                
                <div className="nav-item why-adept-nav-item">
                  <a href="#" className="nav-link">Why Prospct?</a>
                  <div className="sub-items-div-data-os">
                    {/* div.sub-menu-design-temp start */}
                    {/* <div className="sub-menu-design-temp" id="submenuqubic"> */}
                    <div className="submenu-design-tem">
                      <div className="submenu-item1-temp">
                        <div className="submenu-item1-text">Platform</div>
                        <div className="submenu-content-section1">
                          <img 
                            src="/images/roasted-7.svg"
                            alt="No image found"
                            className="submenu-content-section1-image"
                          />
                          <div className="submenucontenttexs1">
                            <a className="submenucontenttexs1-link" href="#"
                              >Prospecting</a
                            >
                            <div>Get access to fresh, accurate B2B data</div>
                          </div>
                        </div>
                        <div
                          className="submenu-content-section1 submenu-content-section-pad-top"
                        >
                          <img 
                            src="/images/roasted-5.svg"
                            alt="No image found"
                            className="submenu-content-section1-image"
                          />
                          <div className="submenucontenttexs1">
                            <a className="submenucontenttexs1-link" href="#"
                              >Adapt API</a
                            >
                            <p>Find leads directly from your browser</p>
                          </div>
                        </div>
                        <div
                          className="submenu-content-section1 submenu-content-section-pad-top"
                        >
                          <img 
                            src="/images/roasted-8.svg"
                            alt="No image found"
                            className="submenu-content-section1-image"
                          />
                          <div className="submenucontenttexs1">
                            <a className="submenucontenttexs1-link" href="#"
                              >Enrichment</a
                            >
                            <p>Empower your systems with Adapts data</p>
                          </div>
                        </div>
                      </div>
                      <div className="submenu-item2-temp">
                        <div className="submenu-item1-temp">
                          <div className="submenu-item1-text">Useful Links</div>
                          <div className="submenu-content-section1">
                            <img 
                              src="/images/roasted-2.svg"
                              alt="No image found"
                              className="submenu-content-section1-image"
                            />
                            <div className="submenucontenttexs1">
                              <a className="submenucontenttexs1-link" href="#"
                                >Our Data</a
                              >
                              <p>Discover verified and accurate B2B data</p>
                            </div>
                          </div>
                          <div
                            className="submenu-content-section1 submenu-content-section-pad-top"
                          >
                            <img 
                              src="/images/roasted-13.svg"
                              alt="No image found"
                              className="submenu-content-section1-image"
                            />
                            <div className="submenucontenttexs1">
                              <a className="submenucontenttexs1-link" href="#"
                                >Case Studies</a
                              >
                              <p>
                                See how companies use Adapt to hit their goals
                              </p>
                            </div>
                          </div>
                          <div
                            className="submenu-content-section1 submenu-content-section-pad-top"
                          >
                            <img 
                              src="/images/roasted-15.svg"
                              alt="No image found"
                              className="submenu-content-section1-image"
                            />
                            <div className="submenucontenttexs1">
                              <a className="submenucontenttexs1-link" href="#"
                                >Comparison</a
                              >
                              <p>Get access to fresh, accurate B2B data</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="submenu-item3-temp">
                        <span>Adapt vs</span>
                        <a href="#">Prospct</a>
                        <a href="#">Zoominfo</a>
                        <a href="#">Slintel</a>
                        <a href="#">Apollo</a>
                        <a href="#">Seamless</a>
                        <a href="#">Uplead</a>
                      </div>
                    </div>
                    {/* </div> */}
                    {/* div.sub-menu-design-temp end */}
                  </div>
                </div>
                <div className="nav-item data-os-brdr">
                  <a href="#" className="nav-link">Data OS</a>
                </div>
              </div>
              <div className="nav-center">
                <div className="nav-item solution-nav-link">
                  <a href="#" className="nav-link">Solutions</a>
                  <div className="sub-items-div-data-os solution-submenu-width-d-o">
                    {/* div.sub-menu-design-temp start */}
                    {/* <div className="sub-menu-design-temp" id="submenuqubic"> */}
                    <div className="submenu-design-tem solution-submenu-width">
                      <div
                        className="submenu-item1-temp submenu-soplutin-break-point-26"
                      >
                        <div className="submenu-item1-text">Personas</div>
                        <div className="submenu-content-section1">
                          <img 
                            src="/images/roasted-9.svg"
                            alt="No image found"
                            className="submenu-content-section1-image"
                          />
                          <div className="submenucontenttexs1">
                            <a className="submenucontenttexs1-link" href="#"
                              >Sales</a
                            >
                            <p>
                              Intelligence to accelerate your sales pipeline
                            </p>
                          </div>
                        </div>
                        <div
                          className="submenu-content-section1 submenu-content-section-pad-top"
                        >
                          <img 
                            src="/images/roasted-14.svg"
                            alt="No image found"
                            className="submenu-content-section1-image"
                          />
                          <div className="submenucontenttexs1">
                            <a className="submenucontenttexs1-link" href="#"
                              >Marketing</a
                            >
                            <p>Build a targeted email list with ease</p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="submenu-item2-temp submenu-soplutin-break-point-26"
                      >
                        <div className="submenu-item1-temp">
                          <div className="submenu-item1-text">Use cases</div>
                          <div className="submenu-content-section1">
                            <img 
                              src="/images/roasted-6.svg"
                              alt="No image found"
                              className="submenu-content-section1-image"
                            />
                            <div className="submenucontenttexs1">
                              <a className="submenucontenttexs1-link" href="#"
                                >Email Finder</a
                              >
                              <p>Find Verified B2B Email Addresses</p>
                            </div>
                          </div>
                          <div
                            className="submenu-content-section1 submenu-content-section-pad-top"
                          >
                            <img 
                              src="/images/roasted-4.svg"
                              alt="No image found"
                              className="submenu-content-section1-image"
                            />
                            <div className="submenucontenttexs1">
                              <a className="submenucontenttexs1-link" href="#"
                                >LinkedIn Email Finder</a
                              >
                              <p>Prospect on the go with Chrome extension</p>
                            </div>
                          </div>
                          <div
                            className="submenu-content-section1 submenu-content-section-pad-top"
                          >
                            <img 
                              src="/images/roasted-10.svg"
                              alt="No image found"
                              className="submenu-content-section1-image"
                            />
                            <div className="submenucontenttexs1">
                              <a className="submenucontenttexs1-link" href="#"
                                >Hyper-Personalization</a
                              >
                              <p>Data parameters to drive tailored messaging</p>
                            </div>
                          </div>
                          <div
                            className="submenu-content-section1 submenu-content-section-pad-top"
                          >
                            <img 
                              src="/images/roasted-2.svg"
                              alt="No image found"
                              className="submenu-content-section1-image"
                            />
                            <div className="submenucontenttexs1">
                              <a className="submenucontenttexs1-link" href="#"
                                >Lead Scoring & Routing</a
                              >
                              <p>Identify and prioritize high value leads</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* </div> */}
                    {/* div.sub-menu-design-temp end */}
                  </div>
                </div>
                <div className="nav-item">
                  <a href="#" className="nav-link">Pricing</a>
                </div>
              </div>
              <div className="nav-center">
                <div className="nav-item resources-nav-link">
                  <a href="#" className="nav-link">Resources</a>
                  <div className="sub-items-div-data-os resources-sub-items-d-os">
                    {/* div.sub-menu-design-temp start */}
                    {/* <div className="sub-menu-design-temp" id="submenuqubic"> */}
                    <div className="submenu-design-tem resources-submenu-width">
                      <div className="submenu-item1-temp">
                        <div className="submenu-content-section1">
                          <img 
                            src="/images/roasted-5.svg"
                            alt="No image found"
                            className="submenu-content-section1-image"
                          />
                          <div className="submenucontenttexs1">
                            <a className="submenucontenttexs1-link" href="#"
                              >Blogs</a
                            >
                            <div>
                              Learn from Adapt’s sales and marketing experts
                            </div>
                          </div>
                        </div>
                        <div
                          className="submenu-content-section1 submenu-content-section-pad-top"
                        >
                          <img 
                            src="/images/roasted-8.svg"
                            alt="No image found"
                            className="submenu-content-section1-image"
                          />
                          <div className="submenucontenttexs1">
                            <a className="submenucontenttexs1-link" href="#"
                              >Build Your Marketing Stack</a
                            >
                            <div>
                              Make informed decisions while choosing the right
                              tool
                            </div>
                          </div>
                        </div>
                        <div
                          className="submenu-content-section1 submenu-content-section-pad-top"
                        >
                          <img 
                            src="/images/roasted-15.svg"
                            alt="No image found"
                            className="submenu-content-section1-image"
                          />
                          <div className="submenucontenttexs1">
                            <a className="submenucontenttexs1-link" href="#"
                              >Case Studies</a
                            >
                            <div>
                              See how companies use Adapt to hit their goals
                            </div>
                          </div>
                        </div>
                        <div
                          className="submenu-content-section1 submenu-content-section-pad-top"
                        >
                          <img 
                            src="/images/roasted-5.svg"
                            alt="No image found"
                            className="submenu-content-section1-image"
                          />
                          <div className="submenucontenttexs1">
                            <a className="submenucontenttexs1-link" href="#"
                              >About Us</a
                            >
                            <div>Learn more about what makes Adapt tick</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* </div> */}
                    {/* div.sub-menu-design-temp end */}
                  </div>
                </div>
                <div className="nav-item">
                  <a href="https://app.prospct.io/login" className="nav-link">Sign In</a>
                </div>
              </div>
            </div>
            <div className="nav-right" id="nav-right"  ref={navRightRef}>
              <a href="#" className="btn btn-outline">Request Demo</a>
              <a href="https://app.prospct.io/register" className="btn btn-solid">Start Free Trial</a>
              <FaBars
                className="nav-right-ham-burger-menu text-slate-500 cursor-pointer mr-3"
                size={20}
                onClick={toggleMenu}
              />
            </div>
          </nav>
          {/* </div> */}
          {/* nav end */}
           <div className="content" id="content">
          <div className="main-hero-center-content">
            <div className="main-hero-flex-column">
              <div className="main-hero-wrap-content">
                <div className="main-hero-content">
                  <div className="main-hero-text-wrapper">
                    <h1 className="main-hero-heading">
                      <span className="main-hero-heading-text"
                        >Reach the right decision makers</span
                      >
                    </h1>
                  </div>
                  <p className="main-hero-subheading">
                    <span className="main-hero-subheading-text"
                      >Sell more and close more with the most accurate B2B
                      <br />
                      company and contact data.</span
                    >
                  </p>
                  <div className="main-hero-form-lead-parent">
                    <form action="">
                      <div className="content-waper-from">
                        <input
                          className="main-hero-from-email-input"
                          type="email"
                          placeholder="Enter your work email"
                        />
                        <button className="main-hero-submit-btn" type="submit">
                          Start for free
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="main-hero-image-section">
                  <div className="main-hero-main-image-container">
                    <img 
                      loading="lazy"
                      src="/images/ratings.svg"
                      alt=""
                      className="main-hero-main-image"
                    />
                  </div>
                </div>
                <div className="hero-gdpr-image-section">
                  <img  src="/images/ccpa-compliant.svg" alt="no image found"/>
                  <img  className="hero-gdpr-image-section-spacing" src="/images/GDPRcompliant.svg" alt="no image found"/>
                  <img  className="hero-gdpr-image-section-spacing" src="/images/iso.svg" alt="no image found"/>
                </div>
                {/* branch sojib */}
                <div className="main-hero-logos-section">
                  {/* <div className="main-hero-logos-container">
                    <img 
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/imag/TEMP/cf1d38380c07ad8fcc8a5bd66a196f9c076c71ba58e264ccfaaaba267366efbb?apiKey=c7fa9664b7ec47a1973cf06a3ad3053e&"
                      alt="Logo 1"
                      className="main-hero-logo-image"
                    />
                    <img 
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/imag/TEMP/07371f26990e9fb404d4202be3c353b9356cb39e9cb1cd52def535732fc32a60?apiKey=c7fa9664b7ec47a1973cf06a3ad3053e&"
                      alt="Logo 2"
                      className="main-hero-logo-image main-hero-second"
                    />
                    <img 
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/imag/TEMP/176a4096334a03c63f2bf94a2a98756529fdab842a0c66dc44a65dcbf15cfae8?apiKey=c7fa9664b7ec47a1973cf06a3ad3053e&"
                      alt="Logo 3"
                      className="main-hero-logo-image main-hero-third"
                    />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>
        {/* header section end */}
        {/* write nav item start */}
        <div className="nav-item-right">
        <video
        width="100%" // Adjust the width as needed
        height="auto" // Adjust the height as needed
        className="hero-video-section-wrapper"
        poster="#" // Replace with a valid image URL or remove if not needed
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="/videos/hero_vid_nhp_full-width.webm"
          type="video/webm"
        />
        Your browser does not support the video tag.
      </video>
      
        </div>
        {/* write nav item end */}
      </div>
      {/* before ideals spacer start */}
      <div className="b-i-s bg-[#600dff] " ></div>
      {/* before ideals spacer end */}

      {/* Spend more time start */}
      <section className="spend-m-t-main-container">
        <div className="spend-m-t-content-wrapper">
          <header className="spend-m-t-headline">
            <div className="spend-m-t-heading-wrapper">
              <h1 className="spend-m-t-heading">Spend more time selling</h1>
            </div>
          </header>
          <section className="spend-m-t-features-container">
            <div className="spend-m-t-feature-group">
              <article className="spend-m-t-feature-column small-center">
                <div
                  className="spend-m-t-feature-wrapper samall-center-items-mrg-aot"
                >
                  <img 
                    loading="lazy"
                    src="/images/Unrivalled-data-quality.svg"
                    className="spend-m-t-feature-image"
                    alt="Data quality illustration"
                  />
                  <h2 className="spend-m-t-feature-title">
                    Unrivaled data quality
                  </h2>
                  <p className="spend-m-t-feature-description">
                    Enhance your sales game with globally compliant and accurate
                    data.
                    <span style={{fontWeight: '900', color: 'rgba(21, 20, 23, 1)'}}>
                      Trusted by 1M users.
                    </span>
                  </p>
                </div>
              </article>
              <article className="spend-m-t-feature-column-middle small-center">
                <div
                  className="spend-m-t-feature-wrapper-middle samall-center-items-mrg-aot"
                >
                  <img 
                    loading="lazy"
                    src="/images/Prospect-stronger-desktop.svg"
                    className="spend-m-t-feature-image"
                    alt="Prospecting illustration"
                  />
                  <h2 className="spend-m-t-feature-title-middle">
                    Prospect stronger
                  </h2>
                  <p className="spend-m-t-feature-description-middle">
                    Fill your pipeline with qualified <br />
                    leads based on buyer intent data.
                  </p>
                </div>
              </article>
              <article className="spend-m-t-feature-column-last small-center">
                <div
                  className="spend-m-t-feature-wrapper-last samall-center-items-mrg-aot"
                >
                  <img 
                    loading="lazy"
                    src="/images/Ramp-reps-faster.svg"
                    className="spend-m-t-feature-image"
                    alt="Training illustration"
                  />
                  <h2 className="spend-m-t-feature-title-last">Ramp reps faster</h2>
                  <p className="spend-m-t-feature-description-last">
                    Onboard your entire team in 10 minutes. Prospect at scale
                    right away.
                  </p>
                </div>
              </article>
            </div>
          </section>
        </div>
      </section>
      {/* Spend more time end */}
      {/* Top revenue teams section start */}
      {/* <section className="heading-top-r-t-container">
      <div className="heading-top-r-t-inner-container">
        <div className="heading-top-r-t-text-wrap">
          <div className="heading-top-r-t-text-content">
            <h2 className="heading-top-r-t-headline">
              Top revenue teams rely on Prospct to smash their goals
            </h2>
          </div>
        </div>
      </div>
      <section className="heading-top-r-t-stats-section">
        <div className="heading-top-r-t-stats-container">
          <div className="heading-top-r-t-stats-wrapper">
            <div className="heading-top-r-t-stats-inner-wrapper">
              <div className="heading-top-r-t-stat-box">
                <div className="heading-top-r-t-stat-number">3X</div>
                <div className="heading-top-r-t-stat-description">
                  <p className="heading-top-r-t-description-text">
                    More outbound leads
                  </p>
                </div>
                <img 
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/imag/TEMP/14b58264cd602dd4a99df80a9abbff617878920c409ed0c93c806859777bcc3a?apiKey=c7fa9664b7ec47a1973cf06a3ad3053e&"
                  alt="Graphic showing 3X more outbound leads"
                  className="heading-top-r-t-image"
                />
              </div>
              <div className="heading-top-r-t-stat-box-alt">
                <div className="heading-top-r-t-stat-number">25%</div>
                <div className="heading-top-r-t-stat-description">
                  <p className="heading-top-r-t-description-text">More deals</p>
                </div>
                <img 
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/imag/TEMP/5e888815b2a924ae0c2fee6d43753cb9e0db7c771cd137565a738b5f4eef64c3?apiKey=c7fa9664b7ec47a1973cf06a3ad3053e&"
                  alt="Graphic showing 25% more deals"
                  className="heading-top-r-t-image-2"
                />
              </div>
              <div className="heading-top-r-t-stat-box-alt">
                <div className="heading-top-r-t-stat-number">1000%</div>
                <div className="heading-top-r-t-stat-description">
                  <p className="heading-top-r-t-description-text">More ROI</p>
                </div>
                <img 
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/imag/TEMP/b63a3cf67599ea8d6eb95ee064c05fbf425ee4571dad0bc27541af23c00e3c64?apiKey=c7fa9664b7ec47a1973cf06a3ad3053e&"
                  alt="Graphic showing 1000% more ROI"
                  className="heading-top-r-t-image-3"
                />
              </div>
              <div className="heading-top-r-t-stat-box">
                <div className="heading-top-r-t-stat-number">10X</div>
                <div className="heading-top-r-t-stat-description">
                  <p className="heading-top-r-t-description-text">
                    More conversions
                  </p>
                </div>
                <img 
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/imag/TEMP/6eecfcd8184b1dd0a5bb6d8f9a665d24a1978448e35b9f6e2fe5a568a56b8d3e?apiKey=c7fa9664b7ec47a1973cf06a3ad3053e&"
                  alt="Graphic showing 10X more conversions"
                  className="heading-top-r-t-image-4"
                />
              </div>
              <div className="heading-top-r-t-stat-box-alt">
                <div className="heading-top-r-t-stat-number">142%</div>
                <div className="heading-top-r-t-stat-description">
                  <p className="heading-top-r-t-description-text">
                    Increase in demos
                  </p>
                </div>
                <img 
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/imag/TEMP/8058d6e3fedddf1206ea74bac915882254d976b270e53fb435f6354fd18d62f9?apiKey=c7fa9664b7ec47a1973cf06a3ad3053e&"
                  alt="Graphic showing 142% increase in demos"
                  className="heading-top-r-t-image-5"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      </section> */}
      {/* Top revenue teams section end */}
      {/* space before reach all your ideal customers start */}
      <div className="space-b-r-a-i-c"></div>
      {/* space before reach all your ideal customers end */}
      {/* Reach all your ideal customers new start */}
      <div className="ideal-customer-se-t-m">
        <h2>Reach all your ideal customers from one place</h2>
        <div className="tabs-content-deal-c-s">
          <div className="tabs">
          <ul>
          {['platform', 'extension', 'enrich', 'api', 'engage'].map((tab) => (
            <li
              key={tab}
              data-target={tab}
              className={activeTab === tab ? 'active' : ''}
              onClick={() => handleTabClick(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </li>
          ))}
        </ul>
            <div className="border-indicator"></div>
          </div>
          <div className="content-deals-main-of-c">
          <div className={`platform ${activeTab === 'platform' ? 'active' : ''}`}>
              <section className="platform-content-sec">
                <section className="platform-left-centent-sec">
                  <h2>Get laser-focused lists</h2>
                  <p>
                    Use our razor-sharp filters to get your list of 1,000
                    prospects in one go. Easily build your lists with accurate
                    and actionable data on each single prospect. In one click,
                    export lists to your CRM and put your workflows on
                    autopilot.
                  </p>
                  <a className="platform-left-centent-sec-a" href="#"
                    >Start Prospecting</a
                  >
                </section>
                <section className="platform-right-centent-sec">
                  <img 
                    src="/images/Platform-690x431-1-1.png"
                    alt="Image not found"
                  />
                </section>
              </section>
            </div>
            <div className={`extension ${activeTab === 'extension' ? 'active' : ''}`}>
              <section className="platform-content-sec">
                <section className="platform-left-centent-sec">
                  <h2>Prospect from anywhere</h2>
                  <p>
                    Install Prospct on your browser to get instant contact and
                    company data on all the people you want to reach, right
                    where you work: LinkedIn, Salesforce, or any company
                    website.
                  </p>
                  <a className="platform-left-centent-sec-a" href="#"
                    >Install Extension</a
                  >
                </section>
                <section className="platform-right-centent-sec">
                  <img 
                    src="/images/Extension-690x431-2.png"
                    alt="Image not found"
                  />
                </section>
              </section>
            </div>
            <div className={`enrich ${activeTab === 'enrich' ? 'active' : ''}`}>
              <section className="platform-content-sec">
                <section className="platform-left-centent-sec">
                  <h2>
                    CRM Data <br />
                    Enrichment
                  </h2>
                  <p>
                    Automatically enrich your Salesforce records with accurate
                    contact and company data - at scale. Transform missing and
                    poor data into new business opportunities in minutes.
                  </p>
                  <a className="platform-left-centent-sec-a" href="#"
                    >Enrich Your Data</a
                  >
                </section>
                <section className="platform-right-centent-sec">
                  <img 
                    src="/images/Enrich-690x431-1-1.png"
                    alt="Image not found"
                  />
                </section>
              </section>
            </div>
            <div className={`api ${activeTab === 'api' ? 'active' : ''}`}>
              <section className="platform-content-sec">
                <section className="platform-left-centent-sec">
                  <h2>
                    Enrich any <br />
                    database
                  </h2>
                  <p>
                    Auto-enrich any database, system, or app, with the most
                    accurate contact and company data. Leave no room for errors
                    or silos in your data. Work with the freshest data all the
                    time.
                  </p>
                  <a className="platform-left-centent-sec-a" href="#"
                    >Check Prospct API</a
                  >
                </section>
                <section className="platform-right-centent-sec">
                  <img 
                    src="/images/API-690x431-2.png"
                    alt="Image not found"
                  />
                </section>
              </section>
            </div>
            <div className={`engage ${activeTab === 'engage' ? 'active' : ''}`}>
              <section className="platform-content-sec">
                <section className="platform-left-centent-sec">
                  <h2>
                    Connect directly <br />
                    from Prospct
                  </h2>
                  <p>
                    Create email sequences and deliver precise messages to your
                    prospect lists directly from the Prospct Platform without the
                    need to integrate with another outreach solution.
                  </p>
                  <a className="platform-left-centent-sec-a" href="#"
                    >Try For Free</a
                  >
                </section>
                <section className="platform-right-centent-sec">
                  <img 
                    src="/images/Engage-690x431-3.png"
                    alt="Image not found"
                  />
                </section>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Target With Precision start */}
      <div className="target-with-precision-main">
        <div className="target-w-p-m-child">
          <div className="t-w-p-m-left-items">
            <h2>Target With Precision</h2>
            <p>
              With our Technology Sector feature, you gain access to over 3,000
              specialized tech sectors! From Artificial Intelligence to
              Sustainability Tech and IoT, discover and connect with decision
              makers who are your ideal customers.
            </p>
            <a className="t-w-p-m-left-items-btn-left t-w-p-m-btn-mrg" href="#"
              >Start free trial</a
            >
            <a className="t-w-p-m-left-items-btn-right" href="#">Book a demo</a>
          </div>
          <div className="t-w-p-m-right-items">
            <img  src="/images/home.gif" alt="No image found" />
          </div>
        </div>
      </div>
      {/* Target With Precision end */}
      {/* Run your sales cycles like a sprint start */}
      <section className="run-s-c-l-s-container">
        <div className="run-s-c-l-s-wrapper">
          <h2 className="run-s-c-l-s-section-title">
            Run your sales cycles like a sprint
          </h2>
          <div className="run-s-c-l-s-content-block">
            <div className="run-s-c-l-s-content-wrapper">
              <div className="run-s-c-l-s-flex-row">
                <div className="run-s-c-l-s-text-column">
                  <div className="run-s-c-l-s-text-content">
                    <h3 className="run-s-c-l-s-text-heading">
                      Pinpoint your ideal customer
                    </h3>
                    <p className="run-s-c-l-s-text-paragraph">
                      Easily build precise contact lists using our advanced
                      search filters. Pull up accurate emails, work numbers, and
                      direct dials on the right prospects in seconds.
                    </p>
                  </div>
                </div>
                <aside className="run-s-c-l-s-image-column">
                  <div className="run-s-c-l-s-image-container">
                  <video
                  width="100%" // or specific width if needed
                  height="auto" // or specific height if needed
                  className="run-s-c-l-s-Image"
                  poster="https://www.lusha.com/wp-content/uploads/2023/08/hompage_04.png"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source
                    src="./main_Filters-3.webm"
                    type="video/webm"
                  />
                  Your browser does not support the video tag.
                </video>
                
                  </div>
                </aside>
              </div>
            </div>
          </div>
          <div className="run-s-c-l-s-content-block">
            <div className="run-s-c-l-s-content-wrapper">
              <div className="run-s-c-l-s-flex-row flex-direction-reverse">
                <aside className="run-s-c-l-s-image-column">
                  <div className="run-s-c-l-s-image-container">
                  <video
                  width="100%" // or specify a fixed width like "800px"
                  height="auto" // or specify a fixed height if needed
                  className="run-s-c-l-s-Image"
                  poster="https://www.lusha.com/wp-content/uploads/2023/08/hompage_04.png"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source
                    src="/videos/CRM_x1.webm"
                    type="video/webm"
                  />
                  Your browser does not support the video tag.
                </video>
                
                  </div>
                </aside>
                <div className="run-s-c-l-s-text-column">
                  <div className="run-s-c-l-s-text-content">
                    <h3 className="run-s-c-l-s-text-heading">
                      Enrich your entire CRM
                    </h3>
                    <p className="run-s-c-l-s-text-paragraph">
                      Push contact lists to your favorite tools and enrich them
                      with actionable data in one click. Easily score, route,
                      and update your pipeline with accurate information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="run-s-c-l-s-content-block">
            <div className="run-s-c-l-s-content-wrapper">
              <div className="run-s-c-l-s-flex-row">
                <div className="run-s-c-l-s-text-column">
                  <div className="run-s-c-l-s-text-content">
                    <h3 className="run-s-c-l-s-text-heading">
                      Search smarter every time
                    </h3>
                    <p className="run-s-c-l-s-text-paragraph">
                      Get instant ideal customer profile insights based on past
                      searches. Identify which source brings in the most leads
                      and reach your KPIs even faster.
                    </p>
                  </div>
                </div>
                <aside className="run-s-c-l-s-image-column">
                  <div className="run-s-c-l-s-image-container">
                  <video
                  width="100%" // Set to a specific value like "800px" if needed
                  height="auto" // Adjust height or set a specific value if necessary
                  className="run-s-c-l-s-Image"
                  poster="https://www.lusha.com/wp-content/uploads/2023/08/hompage_04.png"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source
                    src="/videos/main_Dashboard_LOOP.webm"
                    type="video/webm"
                  />
                  Your browser does not support the video tag.
                </video>
                
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Run your sales cycles like a sprint end */}

      {/* The freshest data you can find start */}
      <section className="the-f-d-ycf-container">
        <div className="the-f-d-ycf-inner-container">
          <div className="the-f-d-ycf-flex-wrapper">
            <section className="the-f-d-ycf-main-section">
              <div className="the-f-d-ycf-left-column">
                <div className="the-f-d-ycf-image-container">
                  <div className="the-f-d-ycf-center-aligned">
                  <video
                  width="100%" // Set a specific width like "800px" if required
                  height="auto" // Adjust or set a specific height if needed
                  className="the-f-d-ycf-Image"
                  poster="https://www.lusha.com/wp-content/uploads/2023/08/hompage_04.png"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source
                    src="/videos/main_Our_Data_LOOP_3.webm"
                    type="video/webm"
                  />
                  Your browser does not support the video tag.
                </video>
                
                  </div>
                </div>
              </div>
              <div className="the-f-d-ycf-right-column">
                <div className="the-f-d-ycf-text-container">
                  <div className="the-f-d-ycf-content-wrapper">
                    <h2 className="the-f-d-ycf-headline">
                      The freshest data you can find
                    </h2>
                    <p className="the-f-d-ycf-description">
                      Join the largest community and work with the cleanest data
                      day in, <br />
                      day out. Share your network’s contact info, get accurate
                      data, free <br />
                      credits, and access to early features.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      {/* The freshest data you can find end */}
      {/* Laser target your next best customer start */}
      <section className="laser-t-n-bc-container">
        <div className="laser-t-n-bc-content">
          <header className="laser-t-n-bc-header">
            <div className="laser-t-n-bc-title-wrapper">
              <h1 className="laser-t-n-bc-title">
                Laser target your next best customer with all the right data
                attributes
              </h1>
            </div>
          </header>
          <div className="laser-t-n-bc-info-sections">
            <div className="laser-t-n-bc-info-section">
              <section className="laser-t-n-bc-info-item">
                <div className="laser-t-n-bc-info-content">
                  <figure className="laser-t-n-bc-info-icon">
                    <img 
                      loading="lazy"
                      src="/images/Revenue_icon.svg"
                      alt="Revenue icon"
                      className="laser-t-n-bc-Image"
                    />
                  </figure>
                  <figcaption className="laser-t-n-bc-info-text">
                    Revenue
                  </figcaption>
                </div>
              </section>
              <section className="laser-t-n-bc-info-item">
                <div className="laser-t-n-bc-info-content">
                  <figure className="laser-t-n-bc-info-icon">
                    <img 
                      loading="lazy"
                      src="/images/companylocationpu.svg"
                      alt="Company location icon"
                      className="laser-t-n-bc-Image"
                    />
                  </figure>
                  <figcaption className="laser-t-n-bc-info-text">
                    Company location
                  </figcaption>
                </div>
              </section>
              <section className="laser-t-n-bc-info-item">
                <div className="laser-t-n-bc-info-content">
                  <figure className="laser-t-n-bc-info-icon">
                    <img 
                      loading="lazy"
                      src="/images/Contactphonepu.svg"
                      alt="Contact phone icon"
                      className="laser-t-n-bc-Image"
                    />
                  </figure>
                  <figcaption className="laser-t-n-bc-info-text">
                    Contact phone
                  </figcaption>
                </div>
              </section>
              <section className="laser-t-n-bc-info-item">
                <div className="laser-t-n-bc-info-content">
                  <figure className="laser-t-n-bc-info-icon">
                    <img 
                      loading="lazy"
                      src="/images/Contact_email_icon.svg"
                      alt="Contact email icon"
                      className="laser-t-n-bc-Image"
                    />
                  </figure>
                  <figcaption className="laser-t-n-bc-info-text">
                    Contact email
                  </figcaption>
                </div>
              </section>
              <section className="laser-t-n-bc-info-item">
                <div className="laser-t-n-bc-info-content">
                  <figure className="laser-t-n-bc-info-icon">
                    <img 
                      loading="lazy"
                      src="/images/employees_icon.svg"
                      alt="No. of employees icon"
                      className="laser-t-n-bc-Image"
                    />
                  </figure>
                  <figcaption className="laser-t-n-bc-info-text">
                    No. of employees
                  </figcaption>
                </div>
              </section>
              <section className="laser-t-n-bc-additional-item">
                <div className="laser-t-n-bc-info-content">
                  <figure className="laser-t-n-bc-info-icon">
                    <img 
                      loading="lazy"
                      src="/images/Country_code_icon.svg"
                      alt="Country code icon"
                      className="laser-t-n-bc-Image"
                    />
                  </figure>
                  <figcaption className="laser-t-n-bc-info-text">
                    Country code
                  </figcaption>
                </div>
              </section>
              <section className="laser-t-n-bc-additional-item">
                <div className="laser-t-n-bc-info-content">
                  <figure className="laser-t-n-bc-info-icon">
                    <img 
                      loading="lazy"
                      src="/images/Title_icon.svg"
                      alt="Title icon"
                      className="laser-t-n-bc-Image"
                    />
                  </figure>
                  <figcaption className="laser-t-n-bc-info-text">Title</figcaption>
                </div>
              </section>
              <section className="laser-t-n-bc-additional-item">
                <div className="laser-t-n-bc-info-content">
                  <figure className="laser-t-n-bc-info-icon">
                    <img 
                      loading="lazy"
                      src="/images/Seniority_icon.svg"
                      alt="Seniority icon"
                      className="laser-t-n-bc-Image"
                    />
                  </figure>
                  <figcaption className="laser-t-n-bc-info-text">
                    Seniority
                  </figcaption>
                </div>
              </section>
              <section className="laser-t-n-bc-additional-item">
                <div className="laser-t-n-bc-info-content">
                  <figure className="laser-t-n-bc-info-icon">
                    <img 
                      loading="lazy"
                      src="/images/Industry_tags_icon.svg"
                      alt="Industry tags icon"
                      className="laser-t-n-bc-Image"
                    />
                  </figure>
                  <figcaption className="laser-t-n-bc-info-text">
                    Industry tags
                  </figcaption>
                </div>
              </section>
              <section className="laser-t-n-bc-additional-item">
                <div className="laser-t-n-bc-info-content">
                  <figure className="laser-t-n-bc-info-icon">
                    <img 
                      loading="lazy"
                      src="/images/Department_icon.svg"
                      alt="Department icon"
                      className="laser-t-n-bc-Image"
                    />
                  </figure>
                  <figcaption className="laser-t-n-bc-info-text">
                    Department
                  </figcaption>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      {/* Laser target your next best customer end */}
      {/* Here’s what our customers say start */}
      <section className="h-w-o-c-say-testimonials">
        <div className="h-w-o-c-say-testimonials-header">
          <div className="h-w-o-c-say-testimonials-title">
            Here’s what our customers say
          </div>
        </div>


        <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {groupedItems.map((group, idx) => (
          <div className="slide" key={idx}>
            <div className="flex flex-wrap justify-center pl-0 pr-0 lg:pr-36 lg:pl-20">
              {group.map((item, subIdx) => (
                <Testimonial
                  key={subIdx}
                  quote={item.quote}
                  user={item.user}
                  company={item.company}
                  image={item.image}
                  statValue={item.statValue}
                  statLabel={item.statLabel}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {groupedItems.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? ' active' : ''}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>



        

        {/* Initialize Swiper */}

        {/* <div className="h-w-o-c-say-testimonial-button-group">
          <div className="h-w-o-c-say-testimonial-dots">
            <div className="h-w-o-c-say-testimonial-dot">
              <div className="h-w-o-c-say-dot"></div>
            </div>
            <div className="h-w-o-c-say-testimonial-dot-active">
              <div className="h-w-o-c-say-dot-active"></div>
            </div>
            <div className="h-w-o-c-say-testimonial-dot">
              <div className="h-w-o-c-say-dot"></div>
            </div>
          </div>
        </div> */}
      </section>
      {/* Heres what our customers say end */}
      {/* top-rated sales intelligence start */}
      <section className="top-rated-sics-wrapper">
        <div className="top-rated-sics-content-container">
          <h2 className="top-rated-sics-title">
            A top-rated sales intelligence for any company size
          </h2>
          <img 
            loading="lazy"
            src="/images/1-Rated-sales-intelligence-for-any-company-size.svg"
            alt="Main visual representation"
            className="top-rated-sics-main-image"
          />
          <div className="top-rated-sics-logo-container">
            <div className="top-rated-sics-logo-row">
              <div className="top-rated-sics-logo">

                  <img 
                    loading="lazy"
                    src="/images/fastestimplementation.svg"
                    alt="Logo 1"
                  />

              </div>
              <div className="top-rated-sics-logo">
                <img 
                  loading="lazy"
                  src="/images/leadereurope.svg"
                  alt="Logo 2"
                />
              </div>
              <div className="top-rated-sics-logo">
                <img 
                  loading="lazy"
                  src="/images/users-love-us.svg"
                  alt="Main Image"
                />
              </div>
              <div className="top-rated-sics-logo">
                <img 
                  loading="lazy"
                  src="/images/highpreformer.svg"
                  alt="Logo 3"
                />
              </div>
              <div className="top-rated-sics-logo">
                <img 
                  loading="lazy"
                  src="/images/easytouse.svg"
                  alt="Logo 4"
                />
              </div>
            </div>
          <div className="top-rated-sics-logo-container-button">
            <a href="#" className="">Here is what reviewers on G2 have to say</a>
            <i className="fa-solid fa-arrow-right-long" style={{color: 'rgb(96, 13, 255)', cursor: 'pointer'}}></i>
          </div>
        </div>
        </div>
      </section>
      {/* top-rated sales intelligence end */}
      {/* Reach your ideal customer with Prospct start */}
      <section className="reach-i-c-w-l-wrapper">
        <div className="reach-i-c-w-l-container pb-12 sm:pb-0">
          <div className="reach-i-c-w-l-inner-container">
            <h1 className="reach-i-c-w-l-title">
              Reach your ideal customer with Prospct
            </h1>
            <form>
              <div
                className="content-waper-from reach-ideal-customer-l-e-f reach-ideal-foot-form"
              >
                <input
                  className="main-hero-from-email-input"
                  type="email"
                  placeholder="Enter your work email"
                />
                <button className="main-hero-submit-btn" type="submit">
                  Start for free
                </button>
              </div>
            </form>
          </div>
        </div>
        <section className="reach-i-c-w-l-info-section">
          <div className="reach-i-c-w-l-info-item">
            <div className="reach-i-c-w-l-info-content">
              <div className="reach-i-c-w-l-icon-parent">
                <img 
                  loading="lazy"
                  src="/images/check-mark.svg"
                  alt="Free contact shows a month"
                  className="reach-i-c-w-l-icon"
                />
              </div>

              <div className="reach-i-c-w-l-info-text">
                <p className="reach-i-c-w-l-description">
                  Free contact shows a month
                </p>
              </div>
            </div>
          </div>
          <div className="reach-i-c-w-l-info-item">
            <div className="reach-i-c-w-l-info-content">
              <div className="reach-i-c-w-l-icon-parent">
                <img 
                  loading="lazy"
                  src="/images/check-mark.svg"
                  alt="Free contact shows a month"
                  className="reach-i-c-w-l-icon"
                />
              </div>
              <div className="reach-i-c-w-l-info-text">
                <p className="reach-i-c-w-l-description">Instant access</p>
              </div>
            </div>
          </div>
          <div className="reach-i-c-w-l-info-item">
            <div className="reach-i-c-w-l-info-content">
              <div className="reach-i-c-w-l-icon-parent">
                <img 
                  loading="lazy"
                  src="/images/check-mark.svg"
                  alt="Free contact shows a month"
                  className="reach-i-c-w-l-icon"
                />
              </div>
              <div className="reach-i-c-w-l-info-text">
                <p className="reach-i-c-w-l-description">
                  280,000 companies love us
                </p>
              </div>
            </div>
          </div>
          <div className="reach-i-c-w-l-info-item">
            <div className="reach-i-c-w-l-info-content">
              <div className="reach-i-c-w-l-icon-parent">
                <img 
                  loading="lazy"
                  src="/images/check-mark.svg"
                  alt="Free contact shows a month"
                  className="reach-i-c-w-l-icon"
                />
              </div>
              <div className="reach-i-c-w-l-info-text">
                <p className="reach-i-c-w-l-description">
                  GDPR compliant & CCPA compliant
                </p>
              </div>
            </div>
          </div>
          <div className="reach-i-c-w-l-info-item">
            <div className="reach-i-c-w-l-info-content">
              <div className="reach-i-c-w-l-icon-parent">
                <img 
                  loading="lazy"
                  src="/images/check-mark.svg"
                  alt="Free contact shows a month"
                  className="reach-i-c-w-l-icon"
                />
              </div>
              <div className="reach-i-c-w-l-info-text">
                <p className="reach-i-c-w-l-description">
                  Monthly & yearly contracts
                </p>
              </div>
            </div>
          </div>
          <div className="reach-i-c-w-l-info-item">
            <div className="reach-i-c-w-l-info-content">
              <div className="reach-i-c-w-l-icon-parent">
                <img 
                  loading="lazy"
                  src="/images/check-mark.svg"
                  alt="Free contact shows a month"
                  className="reach-i-c-w-l-icon"
                />
              </div>
              <div className="reach-i-c-w-l-info-text">
                <p className="reach-i-c-w-l-description">Cancel anytime</p>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* Reach your ideal customer with Prospct end */}
      {/* footer start */}
      <footer className="main-footer-footer">
        <div className="main-footer-footer-content">
          <div className="main-footer-footer-sections">
            <section className="main-footer-footer-section">
              <h3 className="main-footer-section-title">Products</h3>
              <ul className="main-footer-section-items">
                <li className="main-footer-section-item">
                  <a className="main-footer-section-item-text">The Platform</a>
                </li>
                <li className="main-footer-section-item">
                  <a href="#" className="main-footer-section-item-text"
                    >Prospecting</a
                  >
                </li>
                <li className="main-footer-section-item">
                  <a href="#" className="main-footer-section-item-text"
                    >Prospct API</a
                  >
                </li>
                <li className="main-footer-section-item">
                  <a href="#" className="main-footer-section-item-text"
                    >Buyer Intelligence</a
                  >
                </li>
                <li className="main-footer-section-item">
                  <a href="#" className="main-footer-section-item-text"
                    >Enrichment</a
                  >
                </li>
                <li className="main-footer-section-item">
                  <a href="#" className="main-footer-section-item-text"
                    >Integrations</a
                  >
                </li>
                <li className="main-footer-section-item">
                  <a href="#" className="main-footer-section-item-text"
                    >Prospct Extension</a
                  >
                </li>
                <li className="main-footer-section-item">
                  <a href="#" className="main-footer-section-item-text">Engage</a>
                </li>
              </ul>
            </section>
            <section className="main-footer-footer-section">
              <h3 className="main-footer-section-title">Company</h3>
              <ul className="main-footer-section-items">
                <li className="main-footer-section-item">
                  <a href="#" className="main-footer-section-item-text">About</a>
                </li>
                <li className="main-footer-section-item">
                  <a href="#" className="main-footer-section-item-text"
                    >Customers</a
                  >
                </li>
                <li className="main-footer-section-item">
                  <a href="#" className="main-footer-section-item-text">Our Data</a>
                </li>
                <li className="main-footer-section-item">
                  <a href="#" className="main-footer-section-item-text">Newsroom</a>
                </li>
                <li className="main-footer-section-item">
                  <a href="#" className="main-footer-section-item-text">Careers</a>
                </li>
              </ul>
            </section>
            <section className="main-footer-footer-section">
              <h3 className="main-footer-section-title">Information</h3>
              <ul className="main-footer-section-items">
                <li className="main-footer-section-item">
                  <a href="#" className="main-footer-section-item-text"
                    >Data Sources</a
                  >
                </li>
                <li className="main-footer-section-item">
                  <a href="#" className="main-footer-section-item-text"
                    >Community Program</a
                  >
                </li>
                <li className="main-footer-section-item">
                  <a href="#" className="main-footer-section-item-text"
                    >Community Terms of Use</a
                  >
                </li>
                <li className="main-footer-section-item">
                  <a href="#" className="main-footer-section-item-text"
                    >Community FAQ</a
                  >
                </li>
              </ul>
            </section>
            <section className="main-footer-footer-section">
              <h3 className="main-footer-section-title">Legal</h3>
              <ul className="main-footer-section-items">
                <li className="main-footer-section-item">
                  <a href="#" className="main-footer-section-item-text"
                    >Terms and Conditions</a
                  >
                </li>
                <li className="main-footer-section-item">
                  <a href="#" className="main-footer-section-item-text"
                    >Cookie Policy & Settings</a
                  >
                </li>
                <li className="main-footer-section-item">
                  <a href="#" className="main-footer-section-item-text"
                    >Vendor Code of Conduct</a
                  >
                </li>
                <li className="main-footer-section-item">
                  <span className="main-footer-section-item-text"
                    >Privacy Center</span
                  >
                </li>
                <li className="main-footer-section-item">
                  <a href="#" className="main-footer-section-item-text">Opt Out</a>
                </li>
                <li className="main-footer-section-item">
                  <a href="#" className="main-footer-section-item-text">TIA</a>
                </li>
                <li className="main-footer-section-item">
                  <a href="#" className="main-footer-section-item-text"
                    >Do Not Sell My Info</a
                  >
                </li>
              </ul>
            </section>
            <section className="main-footer-footer-section">
              <h3 className="main-footer-section-title">Resources</h3>
              <ul className="main-footer-section-items">
                <li className="main-footer-section-item">
                  <a href="#" className="main-footer-section-item-text">Blog</a>
                </li>
                <li className="main-footer-section-item">
                  <a href="#" className="main-footer-section-item-text"
                    >Help Center Support</a
                  >
                </li>
                <li className="main-footer-section-item">
                  <a href="#" className="main-footer-section-item-text"
                    >API Documentation</a
                  >
                </li>
                <li className="main-footer-section-item">
                  <a href="#" className="main-footer-section-item-text"
                    >Prospct Alternatives</a
                  >
                </li>
                <li className="main-footer-section-item">
                  <span className="main-footer-section-item-text"
                    >Search by Industry</span
                  >
                </li>
                <li className="main-footer-section-item">
                  <a href="#" className="main-footer-section-item-text"
                    >Revenue Calculator</a
                  >
                </li>
                <li className="main-footer-section-item">
                  <a href="#" className="main-footer-section-item-text"
                    >Sales Script Generator</a
                  >
                </li>
              </ul>
            </section>
          </div>
          <div className="main-footer-footer-bottom">
            <div className="main-footer-footer-logo">
              <div className="top-to-btom-res-smb">
                <i className="fa-solid fa-arrow-up main-footer-tb-arrow"></i>
              </div>
            <Link href="/">
              <img 
                width='120'

                src="/images/logo.png"
                alt="Company logo"
                className="main-footer-logo-image"
              />

              </Link>
            </div>
            <div className="main-footer-footer-socials">
              <div className="main-footer-social-icons">
                <Image 
                  src="/images/facebook.svg"
                  alt="Facebook"
                  className="main-footer-social-icon"
                  width={20}
                  height={20}
                />
                <Image
                  src="/images/twitter.svg"
                  alt="Twitter"
                  className="main-footer-social-icon"
                  width={20}
                  height={20}
                />
                <Image 
                  src="/images/linkedin.svg"
                  alt="LinkedIn"
                  className="main-footer-social-icon"
                  width={20}
                  height={20}
                />
                <Image
                  src="/images/youtube.svg"
                  alt="YouTube"
                  className="main-footer-social-icon"
                  width={20}
                  height={20}
                />
                <Image
                  src="/images/g2.svg"
                  alt="G2"
                  className="main-footer-social-icon"
                  width={20}
                  height={20}
                />

                <Image
                  src="/images/tiktok.svg"
                  alt="Tiktok"
                  className="main-footer-social-icon main-footer-social-icon-whatsapp"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
          <div className="main-footer-footer-legal">
            <div className="main-footer-legal-items">
              <div className="main-footer-legal-text">
                © Copyright 2024 Prospct Systems Inc. All rights reserved. 800
                Boylston St. Suite 1410 Boston, MA 02199. Prospct is more than
                just a directory of company phone numbers or a simple email
                finder tool.
              </div>
              <div className="main-footer-legal-actions">
                <div className="main-footer-legal-text">
                  With our sales intelligence platform, your team can build the
                  ultimate prospecting lists with power-ups like data enrichment
                  and buyer intent data and land even more closed-wons.
                  <span
                    ><a href="#" className="main-footer-legal-start-free"
                      >Start for free</a
                    ></span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
      {/* footer end */}
    </>
       
    )
}