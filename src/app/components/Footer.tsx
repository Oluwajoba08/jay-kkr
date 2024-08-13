import React from "react"

const Footer = () => {
  return (
    <footer className="bg-[--footer-primary] font-normal min-h-screen px-[1.25rem] text-[--color-primary-purple]">
      <div className="flex flex-col py-[2.5rem] mx-auto max-w-[1145px]">
        <ul className="flex flex-wrap md:flex-nowrap md:gap-[2rem]">
          <li className="flex flex-col gap-2 mb-[1.5rem] w-1/2 md:w-auto">
            <a href="/about" className="font-bold">
              ABOUT
            </a>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="/about/history">History</a>
              </li>
              <li>
                <a href="/about/our-people">Our People</a>
              </li>
              <li>
                <a href="/about/institutional-investors">Institutional Investors</a>
              </li>
              <li>
                <a href="/about/global-wealth">Global wealth</a>
              </li>
              <li>
                <a href="/about/family-capital">Family Capital</a>
              </li>
              <li>
                <a href="/about/sustainability">Sustainability</a>
              </li>
            </ul>
          </li>
          <li className="flex flex-col gap-2 mb-[1.5rem] w-1/2 md:w-auto">
            <a href="/approach" className="font-bold">
              APPROACH
            </a>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="/approach/capstone">Capstone</a>
              </li>
            </ul>
          </li>
          <li className="flex flex-col gap-2 mb-[1.5rem] w-1/2 md:w-auto">
            <a href="/invest" className="font-bold">
              INVEST
            </a>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="/invest/private-equity">Private Equity</a>
              </li>
              <li>
                <a href="/invest/infrastructure">Infrastructure</a>
              </li>
              <li>
                <a href="/invest/real-estate">Real Estate</a>
              </li>
              <li>
                <a href="/invest/credit">Credit</a>
              </li>
              <li>
                <a href="/invest/family-capital">Capital Markets</a>
              </li>
              <li>
                <a href="/invest/insurance">Insurance</a>
              </li>
              <li>
                <a href="/invest/strategic-patnerships">Strategic Patnerships</a>
              </li>
              <li>
                <a href="/invest/portfolio">Portfolio</a>
              </li>
            </ul>
          </li>
          <li className="flex flex-col gap-2 mb-[1.5rem] w-1/2 md:w-auto">
            <a href="/insights" className="font-bold">
              INSIGHTS
            </a>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="/insights">Macro Insights</a>
              </li>
              <li>
                <a href="/insights">Investment Insights</a>
              </li>
              <li>
                <a href="/insights">Wealth Insights</a>
              </li>
              <li>
                <a href="/alternatives-unlocked">Education</a>
              </li>
            </ul>
          </li>
          <li className="flex flex-col gap-2 mb-[1.5rem] w-1/2 md:w-auto">
            <a href="/careers" className="font-bold">
              CAREERS
            </a>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="/careers/career-opportunities">Career Opportunities Insights</a>
              </li>
              <li>
                <a href="/careers/students-careers">Student Careers</a>
              </li>
              <li>
                <a href="/careers/diversity-equity-and-inclusion">Diversity Equity & Inclusion</a>
              </li>
              <li>
                <a href="/careers/citizenship">Citizenship</a>
              </li>
              <li>
                <a href="/careers/shared-success">Shared Success</a>
              </li>
            </ul>
          </li>
          <li className="w-1/2 md:w-auto">
            <ul className="w-full">
              <li className="flex mb-[1.5rem]">
                <a href="/portal" className="font-bold flex">
                  CLIENT PORTAL
                </a>
              </li>
              <li className="flex mb-[1.5rem]">
                <a href="/ir" className="font-bold flex">
                  INVESTOR RELATIONS
                </a>
              </li>
              <li className="flex mb-[1.5rem]">
                <a href="/media" className="font-bold flex">
                  MEDIA CENTER
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="flex flex-col md:flex-row gap-6 md:justify-between">
          <div className="flex flex-col md:items-end">
            <br />
            <ul className="flex flex-col gap-3 md:gap-0 md:flex-row font-bold ">
              <p className="md:pr-4">STAY CONNECTED:</p>
              <li className="md:px-4 md:border-r border-[--color-primary-purple]">
                <a href="/contact">CONTACT US</a>
              </li>
              <li className="md:px-4 md:border-r border-[--color-primary-purple]">
                <a href="/suscribe">SUSCRIBE</a>
              </li>
              <li className="md:px-4 md:border-r border-[--color-primary-purple]">
                <a href="/locations">LOCATIONS</a>
              </li>
              <li className="flex items-center gap-5 hover-svg-blue md:ml-5">
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
                <a href="#">
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M22.288 21h-20.576c-.945 0-1.712-.767-1.712-1.712v-13.576c0-.945.767-1.712 1.712-1.712h20.576c.945 0 1.712.767 1.712 1.712v13.576c0 .945-.767 1.712-1.712 1.712zm-10.288-6.086l-9.342-6.483-.02 11.569h18.684v-11.569l-9.322 6.483zm8.869-9.914h-17.789l8.92 6.229s6.252-4.406 8.869-6.229z" />
                  </svg>
                </a>
              </li>
            </ul>
            <div className="flex mt-10 gap-6 text-sm flex-wrap md:flex-nowrap">
              <a className="hover:underline hover:text-[--color-primary-turquoise]" href="#">
                Manage Cookies
              </a>
              <a className="hover:underline hover:text-[--color-primary-turquoise]" href="#">
                Privacy and Cookies
              </a>
              <a className="hover:underline hover:text-[--color-primary-turquoise]" href="#">
                Terms of use
              </a>
              <a className="hover:underline hover:text-[--color-primary-turquoise]" href="#">
                Security and Fraud Awareness
              </a>
              <a className="hover:underline hover:text-[--color-primary-turquoise]" href="#">
                Disclosures
              </a>
              <a className="hover:underline hover:text-[--color-primary-turquoise]" href="#">
                Accessibility
              </a>
            </div>
            <p className="text-sm font-bold uppercase">
              <br />
              <br />© 2024 Joba Anonymous Yang & Co. L.P. All Rights Reserved.
            </p>
          </div>
          <div className="text-4xl font-bold md:-order-1 md:px-6">JAY</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
