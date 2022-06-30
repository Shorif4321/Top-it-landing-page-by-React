import React, { useEffect } from 'react';
import './BlogFull.css'
import right from "../../Images/rightServiceArrow.png"
import blog1 from "../../Images/ecommerce.jpg"
import john from "../../Images/jane.png"
import comment from "../../Images/comment.png"
import comment2 from "../../Images/comment2.png"
import comment3 from "../../Images/comment3.png"
import f from "../../Images/f.png"
import t from "../../Images/t.png"
import i from "../../Images/i.png"
import youtube from "../../Images/youtube.png"
import red from "../../Images/redarrow.png"
import { Link } from 'react-router-dom';
import Aside from '../Shared/Aside/Aside';

const BlogFull = () => {
    /* ========= Page Load from top of the page code start ========= */
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    /* ========= Page Load from top of the page code end ========= */
    return (
        <>
            <section className='container'>
                <div className='contact-hero container col-11 col-md-8 col-lg-5 m-auto my-md-5'>
                    <h2>Our Blog News</h2>
                    <p>
                        we are trying to help people by our blog.
                    </p>

                </div>
                {/*  <div className='container pb-5'>
                      <p className='navigation text-left'>Home <img className='mx-3' src={right} alt="" /> Blog</p>
                </div> */}
            </section>

            {/* ======= blog Main start ======== */}
            <section className='container d-lg-flex'>
                <div className="col-12 col-md-12 col-lg-7">
                    {/* =======blog Main 1 ======== */}
                    <div className='blog py-4'>
                        <img className='img-fluid rounded' src={blog1} alt="" data-aos="fade-up"
                            data-aos-duration="3000" />
                        <div className='blog-author' data-aos="fade-up"
                            data-aos-duration="1200">
                            <div className='blog-small'>
                                <i className="font-awesome fas fa-folder-open"></i>
                                <h5>Ux Design</h5>
                            </div>
                            <div className='blog-small ps-4'>
                                <i className="font-awesome fas fa-clock"></i>
                                <h5>May28,2022</h5>
                            </div>
                            <div className='blog-small ps-4'>
                                <i className="font-awesome fas fa-user-alt"></i>
                                <h5>Admin</h5>
                            </div>
                            <div className='blog-small ps-4'>
                                <i className="font-awesome fas fa-comment-alt"></i>
                                <h5>18</h5>
                            </div>
                        </div>

                        <h2 data-aos="fade-up"
                            data-aos-duration="1000">eCommerce in Bangladesh</h2>
                        <div className='read-box'>
                            <p className='my-4' data-aos="fade-up"
                                data-aos-duration="1200">
                                The eCommerce sector has seen dramatic growth since the early 2000’s, when Bangladesh lacked widespread internet access or a reliable online transaction system.  In 2009, the Bangladesh Bank, the country’s central bank authority, began permitting online transactions. In 2013, the Bangladesh Bank also permitted the purchase and sale of goods and services online using international credit cards.  The Bangladesh Telecommunication Regulatory Commission (BTRC) puts total internet subscribers at 117.3 million as of May 2021, of which only 9.8 million use broadband connections while the rest are mobile internet users.
                            </p>
                            <p className='mb-4' data-aos="fade-up"
                                data-aos-duration="1200">
                                There are over 2,000 eCommerce sites and more than 50,000 eCommerce pages on Facebook; Facebook remains a popular method for advertising and selling products.  The industry has experienced robust growth in recent years, but growth has accelerated since the outbreak of the COVID-19 pandemic in 2020 as more consumers are inclined to shop online.  According to German research organization Statista, the industry is estimated have grown from $1.6 billion in 2019 to approximately $2 billion in 2020, while it is projected to reach $3 billion in 2023.
                            </p>
                            <p className='mb-4' data-aos="fade-up"
                                data-aos-duration="1200">
                                Currently, the following four types of eCommerce are popular in Bangladesh:
                                ●	Business-to-Business (B2B);
                                ●	Business-to-Consumer (B2C);
                                ●	Consumer-to-Consumer (C2C); and
                                ●	Business-to-Employees (B2E).

                            </p>
                            <p className='mb-4' data-aos="fade-up"
                                data-aos-duration="1200">
                                In order to facilitate eCommerce and encourage the growth of information technology, Bangladesh enacted the Information and Communication Technology (ICT) Act of 2006.  The Act, amended in 2013, includes provisions for imprisonment and/or fines for those committing cyber-crimes.  Enactment of the Act has had significant implications for eCommerce and mobile commerce users and companies in Bangladesh.  The growth of the industry has been inhibited
                            </p>

                            <p className='mb-4' data-aos="fade-up"
                                data-aos-duration="1200">
                                by low usage of credit and debit cards (cash remains the major payment method) and the unavailability of or restrictions on major online transaction sites such as PayPal.
                            </p>
                            <p className='mb-4' data-aos="fade-up"
                                data-aos-duration="1200">
                                In 2018, the Alibaba Group acquired Daraz Group, one of the leading eCommerce companies in Bangladesh.  Daraz announced in June 2020 it would invest $59 million in Bangladesh by 2021 to improve the company’s eCommerce logistics infrastructure, including its warehouse and sorting center.
                            </p>
                            <p className='mb-4' data-aos="fade-up"
                                data-aos-duration="1200">
                                The Government of Bangladesh withdrew the 49 percent maximum allowable shareholding limit on foreign eCommerce companies in June 2020, allowing 100 percent foreign-owned companies to operate in Bangladesh.  COVID-19 social distancing measures significantly boosted demand for eCommerce services and led many brick and mortar businesses to join online sales platforms.
                                Challenges to eCommerce in Bangladesh include:
                                ●	Inadequate delivery mechanisms;
                                ●	A relatively low internet penetration rate;
                                ●	The lack of a robust online transaction system;
                                ●	Prevalence of online fraud;
                                ●	Undeveloped online marketing practices; and
                                ●	The lack of a robust privacy policy.

                            </p>
                            <p className='mb-4' data-aos="fade-up"
                                data-aos-duration="1200">
                                Domestic eCommerce (B2C)
                                B2C websites have become popular in large urban areas, as evidenced by the growth of online food delivery sites such as HungryNaki and FoodPanda.  Highly congested roads and poor driving conditions have also helped drive demand for home delivery services.  Other examples of B2C initiatives include Facebook-based commerce platforms such as Shoprbd and ShoptoBd, which allow Bangladeshi customers to purchase products from leading online shopping sites in the United States, the UK, India, and China.
                                C2C businesses are also growing.  The leading players in this category include Bikroy, Ekhanei, and ClickBd. More recently, the C2C sector has seen some consolidation with Telenor Group purchasing CellBazar and Ekhanei.com purchasing playeOLX.  Online employee recruitment is also growing, largely in the private sector.  Leading online job advertisers and recruiters include:  bdjobs.com, prothom-alojobs.com, and jobsA1.com.

                            </p>
                            <p className='mb-4' data-aos="fade-up"
                                data-aos-duration="1200">
                                Cross-Border eCommerce
                                Cross-border eCommerce remains largely inhibited by a viable online transaction system and capital controls that prevent most outward flows of foreign currency for consumer purposes.  In addition, weak logistics infrastructure and irregular customs practices hinder the growth of cross-border eCommerce.  However, leading logistics provider DHL publicly announced plans to invest in cross-border eCommerce in the future.

                            </p>
                            <p className='mb-4' data-aos="fade-up"
                                data-aos-duration="1200">
                                B2B eCommerce
                                Several B2B websites in Bangladesh are engaged in providing manufacturing and supply-chain solutions.  For instance, the Bangladesh Garment Manufacturers Employee Association (BGMEA) has deployed B2B eCommerce solutions for international ready-made garment (RMG) orders and procurement, as have several large ready-made garment companies.  There are also B2B websites that feature business directories, trade deals, and information about suppliers such as theBangladesh Business Guide, Address Bazar, and Bizbangladesh.


                            </p>
                            <p className='mb-4' data-aos="fade-up"
                                data-aos-duration="1200">
                                eCommerce Services
                                Many Bangladeshi companies engage in eCommerce services, including web design, domain name purchasing, secure hosting, digital marketing and advertising, app development, in-home services, and payment gateways, among others.  A number of these companies provide services to clients abroad, especially in North America.  According to a 2017 study by the Oxford Internet Institute (OII), with nearly 500,000 active freelancers, Bangladesh was the second-largest supplier of online labor after India.  Remitting payments from abroad into Bangladesh is generally not a barrier.  U.S.-based Payoneer is a leading site for processing online payments among freelancers in Bangladesh.

                            </p>
                            <p className='mb-4' data-aos="fade-up"
                                data-aos-duration="1200">
                                eCommerce Intellectual Property Rights
                                The present system of trademark protection lacks a sufficient legal framework to protect intellectual property rights and opens the way for those ready to engage in unscrupulous business practices, complicating the business environment, affecting brand equity, and threatening product safety.


                            </p>
                            <p className='mb-4' data-aos="fade-up"
                                data-aos-duration="1200">
                                Popular eCommerce Sites
                                Popular eCommerce websites in Bangladesh include:
                                ●	Clickbd
                                ●	Bikroy
                                ●	Rokomari
                                ●	Daraz
                                ●	Chaldal
                                ●	Sohoz
                                ●	Online Payment
                                Cash transactions are still the predominant financial transaction method for the majority of the population.  According to research by e-Cab, more than 90 percent of eCommerce users in Bangladesh prefer the cash-on-delivery payment model.  Most eCommerce business portals in Bangladesh have integrated merchant accounts to facilitate credit card transactions. However, almost all eCommerce websites also offer multiple other payment methods and still cater to the consumer preferred cash-on-delivery system.  Very few eCommerce businesses operate on the system of only delivering the product after receiving payment through a wire/bank transfer.


                            </p>
                            <p className='mb-4' data-aos="fade-up"
                                data-aos-duration="1200">
                                Online payment remains limited but is growing in Bangladesh as a result of an increase in internet/mobile cell phone penetration, gridlocked traffic which discourages in-person shopping, and growing per-capita income levels.  Recent developments important to the sector include financial transaction regulation (mobile payments, digital wallets, and smart cards) and transaction infrastructure (e.g., electronic funds transfer payment gateways).  The creation of the Bangladesh Electronic Funds Transfer Network (BEFTN) in 2011 was a foundational step toward developing a modern payment system infrastructure., as it expanded business avenues for financial institutions as well as entrepreneurs to offer electronic or mobile payment processing services to the unbanked population.  This area of electronic payment processing services has attracted local and foreign investment.  Investment areas for non-bank entrepreneurs cluster in the areas of solution development and operations for payment intermediary services, direct service delivery models in partnership with banks, and development of value-added financial applications.
                                The National Payment Switch Bangladesh (NPSB) is an electronic platform started in December 2012 to attain interoperability among schedule banks for card-based/online retail transactions.  At present, NPSB is processing interbank Automated Teller Machines (ATM), Point of Sales (POS), and Internet Banking Fund Transfer (IBFT) transactions.  U.S. companies operating in financial services and the financial payment network sphere (such as VISA and MasterCard) have expressed concerns about operating in the Bangladeshi market after the central bank made a mandatory policy of routing all card transactions through the NPSB.  This mandatory policy eliminates competition and involves security risks, and NPSB becomes a single point of failure if it ever crashes.

                            </p>
                            <p className='mb-4' data-aos="fade-up"
                                data-aos-duration="1200">
                                Mobile eCommerce
                                The 2017 report by the e-Commerce Association of Bangladesh (e-Cab) stated Bangladesh has 99 percent geographic coverage in voice and data connectivity.  The Bangladesh Telecommunication Regulatory Commission (BTRC) puts total internet subscribers at 117.3 million as of May 2021, of which only 9.8 million use broadband connections while the rest are mobile internet users.
                                Utility bill payment and remittance transfers via mobile phone were introduced in Bangladesh in 2006 and 2010 respectively through the country’s leading mobile operators and banks, and have become very popular.  The government also authorized mobile operators to sell railway and bus tickets, and tickets to cricket matches organized by the Bangladesh Cricket Board using mobile phones.
                                As of April 2021, 15 banks are providing mobile financial services (MFS), with 36.75 million active MFS accounts.  In addition, Prime Minister Sheikh Hasina inaugurated digital financial service “Nagad” in 2019, which is partly owned by the Bangladesh Post Office.  Mobile financial services in Bangladesh include cash-in, cash-out, merchant payments, utility payments, salary disbursement, foreign remittances, and fund transfers.  MFS activities grew rapidly following the outbreak of COVID-19 in 2020, as consumers sought to use MFS platforms to comply with social distancing measures.  Bangladesh’s central bank instructed banks in April 2020 to open MFS accounts for all workers of export-oriented companies to facilitate disbursement of salaries and government allowances.
                                Existing mobile financial service providers popular in the market include bKash, Nagad, Rocket, and UCash.


                            </p>
                            <p className='mb-4' data-aos="fade-up"
                                data-aos-duration="1200">
                                Digital Marketing
                                With strong growth in the number of mobile internet subscribers and growing digital infrastructure, more companies in Bangladesh are investing in digital marketing.  While traditional media remains strong among older persons, digital media is more popular among younger segments of the population.  Fund allocation toward digital marketing remains modest at 5 to 10 percent across companies, but as conversion continues, this statistic is set to change drastically.  Digital media has specifically become a strong tool for small and medium enterprises in strengthening their brand recognition.  Restaurants, fashion stores, gadget shops, and lifestyle pages increasingly use digital marketing.
                                Content development and digital media marketing are the most popular services digital agencies currently offer.  Online advertising is also slowly expanding as video platforms mature.  Digital analytics is still in the development stages in Bangladesh and not yet widely used by businesses.


                            </p>
                            <p className='mb-4' data-aos="fade-up"
                                data-aos-duration="1200">
                                Major Buying Holidays
                                The main buying holidays in Bangladesh include the major Muslim holidays of Ramadan, Eid ul-Fitr, and Eid-ul-Adha.  Hindu, Buddhist, and Christian Holidays, including Buddhist New Year, Durga Puja, and Christmas, respectively, are also observed by segments of the population.  Other major Bangladeshi holidays include Bengali New Year (April 14), Independence Day (March 26), and Victory Day (December 16).  Some of these holidays are based on a religious calendar and specific dates depend on lunar sightings.


                            </p>
                            <p className='mb-4' data-aos="fade-up"
                                data-aos-duration="1200">
                                Social Media
                                Social media is widely used in Bangladesh.  Facebook is the most prevalent of social media platforms with more than 30 million users.  Facebook is used to engage consumers and is also a major eCommerce platform.  There are over 50,000 eCommerce Facebook pages in Bangladesh, many of which are small businesses using Facebook alone to advertise and sell products, ranging from clothes, to beauty products, to food.  With faster internet connections, Google cache servers, and better streaming, YouTube is also gaining popularity in Bangladesh.


                            </p>

                            {/* ========= share section start ======= */}
                            <div className='share' data-aos="fade-up"
                                data-aos-duration="1200">
                                <p className='pe-4'>Shere</p>
                                <div className=''>
                                    <Link to="/" target="_blank" className='link-style'> <img className='img-fluid mx-2' src={f} alt="" /> </Link>
                                    <Link to="/" target="_blank" className='link-style'>   <img className='img-fluid mx-2' src={t} alt="" /> </Link>
                                    <Link to="/" target="_blank" className='link-style'> <img className='img-fluid mx-2' src={i} alt="" /> </Link>
                                    <Link to="/" target="_blank" className='link-style'> <img className='img-fluid mx-2' src={youtube} alt="" /> </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ========= under sahre section start ======= */}
                    <div className='review-section d-lg-flex   pe-5 ps-4 py-4 mb-5' data-aos="fade-up"
                        data-aos-duration="1200">
                        <div className='col-12 col-md-12 col-lg-2'>
                            <img className='w-100' src={john} alt="" />
                        </div>
                        <div className='text-start ms-lg-4 col-12 col-md-12 col-lg-10'>
                            <h3 className=''>Hukkar Hunkey</h3>
                            <p>
                                Search for E Commerce Companies In Usa. Instant and personalized results. E Commerce Companies In Usa information. 100% Privacy Protected and 99% Match. Unlimited Access. Results & Answers. Always Facts. The Best Resources. Privacy Friendly. Types: Best Results, Explore Now.

                            </p>
                            <Link className='view-all' to='*'>View All Post <img className='ms-2' src={red} alt="" /></Link>
                        </div>
                    </div>

                    {/* ======== comments ======== */}
                    <div className='comment'>
                        <h5 className='text-start my-4'>Comments</h5>
                        <div className='review-section mb-5'>
                            <div className=' d-lg-flex pe-5 ps-4 py-4 ' data-aos="fade-up"
                                data-aos-duration="1200">
                                <div className='col-12 col-md-12 col-lg-2'>
                                    <img className='img-fluid w-100' src={comment} alt="" />
                                </div>
                                <div className='text-start ms-lg-4 col-12 col-md-12 col-lg-10'>
                                    <h3 className=''>Simen Bulli</h3>
                                    <p>
                                        Find E Commerce France. Search Faster, Better & Smarter Now! Get Results for E Commerce France. Find Results from Multiple Sources. All the Answers. Easy Acces To Information. Multiple sources combined. Discover us now! Simple in use. Fast and trusted. Types: Information, Combined Web Results, Easy & Fast, 99% Match.
                                    </p>
                                    <div className="d-flex" role="search">
                                        <input className="form-control me-2" type="search" placeholder="Write your comment..." aria-label="Search" />
                                        <button className="reply" type="submit">Reply</button>
                                    </div>
                                </div>
                            </div>
                            <div className=' d-lg-flex   pe-5 ps-4 py-4  ' data-aos="fade-up"
                                data-aos-duration="1200">
                                <div className='col-12 col-md-12 col-lg-2'>
                                    <img className='img-fluid w-100 ' src={comment2} alt="" />
                                </div>
                                <div className='text-start ms-lg-4 col-12 col-md-12 col-lg-10'>
                                    <h3 className=''>Angle Bizzar</h3>
                                    <p>
                                        BigCommerce eCommerce Platform - Grow Your Business 2x Faster
                                        More Built-In Tools Than Any Other eCommerce Platform. Reduce Cost And Grow Your Business! Get Instant Access To 100's Of Features, Secure Hosting, And Much More.
                                    </p>
                                    <div className="d-flex" role="search">
                                        <input className="form-control me-2" type="search" placeholder="Write your comment..." aria-label="Search" />
                                        <button className="reply" type="submit">Reply</button>
                                    </div>
                                </div>
                            </div>
                            <div className=' d-lg-flex   pe-5 ps-4 py-4 ' data-aos="fade-up"
                                data-aos-duration="1200">
                                <div className='col-12 col-md-12 col-lg-2'>
                                    <img className='img-fluid w-100 ' src={comment3} alt="" />
                                </div>
                                <div className='text-start  ms-lg-4 col-12 col-md-12 col-lg-10'>
                                    <h3 className=''>Jane Cooper</h3>
                                    <p>
                                        E Commerce Sites In Usa - Search E Commerce Sites In Usa
                                        Discover E Commerce Sites In Usa From Across The Web. Search and Find Now. Search Quality Answers Now. Get The Best Result With ZapMeta About Quality Answers Now. Web,
                                    </p>
                                    <div className="d-flex" role="search">
                                        <input className="form-control me-2" type="search" placeholder="Write your comment..." aria-label="Search" />
                                        <button className="reply" type="submit">Reply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* ====== comment section ======= */}
                    <div className='comment' data-aos="fade-up"
                        data-aos-duration="1200">
                        <h5 className='text-start my-4'>Add a comment</h5>
                        <div className=' mb-5'>
                            <div className="contact-custom row g-4">
                                <div className="col-md-6">
                                    <input type="email" className="form-control" placeholder='Your Full Name..' id="inputEmail4" />
                                </div>
                                <div className="col-md-6">
                                    <input type="email" className="form-control" placeholder='Email..' id="inputEmail4" />
                                </div>
                                <div className="col-12">
                                    <textarea className='w-100' name="" placeholder='write your message here...' id="" cols="30" rows="7"></textarea>
                                </div>
                                <div className="col-12 my-4 contact-button">
                                    <button type="submit" className="last-child">Submit Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* =======left star ======== */}
                <div className="col-12 col-md-12 col-lg-5 py-4 ms-lg-4">
                    <Aside></Aside>
                </div>
            </section>

        </>
    );
};

export default BlogFull;