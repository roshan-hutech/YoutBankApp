import React, { useState } from "react";
import styles from "./index.module.scss";
import ImageAssets from "../asset/images/imageasset";
import {  Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Homepage = () => {
  const [activetab, setActivetab] = useState(1);
  console.log(ImageAssets);
  const tabchange = (e) => {
    setActivetab(e);
  };

  const products = [
    {
      img: ImageAssets?.productacount?.default,
      title: "Checking Accounts",
      describe:
        "Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.",
    },
    {
      img: ImageAssets?.saving?.default,
      title: "Savings Accounts",
      describe:
        "Build your savings with our competitive interest rates and flexible savings account options. Whether youre saving for a specific goal or want to grow your wealth over time, we have the right account for you.",
    },
    {
      img: ImageAssets?.loan?.default,
      title: "Loans and Mortgages",
      describe:
        "Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.",
    },
  ];

  const usecase = [
    {
      img: ImageAssets?.grid1?.default,
      title: "Checking Accounts",
      describe:
        "Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.",
    },
    {
      img: ImageAssets?.grid2?.default,
      title: "Savings Accounts",
      describe:
        "Build your savings with our competitive interest rates and flexible savings account options. Whether youre saving for a specific goal or want to grow your wealth over time, we have the right account for you.",
    },
    {
      img: ImageAssets?.grid3?.default,
      title: "Loans and Mortgages",
      describe:
        "Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.",
    },
    {
      img: ImageAssets?.grid4?.default,
      title: "Loans and Mortgages",
      describe:
        "Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.",
    },
  ];
  const usecase2 = [
   {
     img: ImageAssets?.grid5?.default,
     title: "Checking Accounts",
     describe:
       "Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.",
   },
   {
     img: ImageAssets?.grid6?.default,
     title: "Savings Accounts",
     describe:
       "Build your savings with our competitive interest rates and flexible savings account options. Whether youre saving for a specific goal or want to grow your wealth over time, we have the right account for you.",
   },
   {
     img: ImageAssets?.grid7?.default,
     title: "Loans and Mortgages",
     describe:
       "Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.",
   },
   {
     img: ImageAssets?.grid8?.default,
     title: "Loans and Mortgages",
     describe:
       "Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.",
   },
 ];

  const questions=[{
   que:'How do I open an account with YourBank?',
   ans:'Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.',
  },
  {
   que:'What documents do I need to provide to apply for a loan?',
   ans:'The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or drivers license, proof of income such as pay stubs or tax returns, and information about the collateral if applicable. Our loan officers will guide you through the specific requirements during the application process.'},
  {
   que:'How do I open an account with YourBank?',
   ans:'Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.',
  },
  {
   que:'How do I open an account with YourBank?',
   ans:'Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.',
  },]
  console.log(activetab);
  return (
    <section className={styles.main}>
      <img
        className={styles.grain}
        src={ImageAssets?.grainbackground?.default}
        alt=""
      />
      <section className="">
        <section className={styles.header}>
          <div>
            <img src={ImageAssets.logo?.default} alt="" />
            Your Bank
          </div>
          <div className={styles.linkcontainer}>
            <Link
              to="/"
              className={activetab === 1 ? styles.activetab : null}
              onClick={() => {
                tabchange(1);
              }}
            >
              Home
            </Link>
            <Link
              className={activetab === 2 ? styles.activetab : null}
              to="/careers"
              onClick={() => {
                tabchange(2);
              }}
            >
              Careers
            </Link>

            <NavLink
              to="/about"
              className={activetab === 3 ? styles.activetab : null}
              onClick={() => {
                tabchange(3);
              }}
            >
              About
            </NavLink>
            <Link
              to="/security"
              className={activetab === 4 ? styles.activetab : null}
              onClick={() => {
                tabchange(4);
              }}
            >
              Security
            </Link>
          </div>
          
          <div>
            <button type="button" className={styles.signup}>
              Sign Up
            </button>
            <button type="button" className={styles.login}>
              Login
            </button>
          </div>
        </section>
        <section className={styles.Welcomewrap}>
          <section className={styles.welcome}>
            <div className={styles.badge}>
              {" "}
              <img src={ImageAssets?.checkIcon?.default} alt="" /> No LLC
              Required, No Credit Check.
            </div>
            <div className={styles.welcometext}>
              <p>
                Welcome to YourBank Empowering Your{" "}
                <span>Financial Journey</span>
              </p>
            </div>
            <p className={styles.welcomepara}>
              At YourBank, our mission is to provide comprehensive banking
              solutions that empower individuals and businesses to achieve their
              financial goals. We are committed to delivering personalized and
              innovative services that prioritize our customers' needs.
            </p>
            <div>
              {" "}
              <button>Open Account</button>
            </div>
          </section>
          <section className={styles.transactionwrap}>
            <img className={styles.arrowbg} src={ImageAssets?.arrowbg?.default} alt="" />
            <h4>Your Transactions</h4>
            <div style={{ position: "relative", zIndex: "4", height: "10rem" }}>
              <div
                className={styles.transcard}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "20px 0px",
                  zIndex: "4",
                  position: "relative",
                }}
              >
                <div style={{ display: "flex", gap: "10px" }}>
                  <img src={ImageAssets.transactionicn.default} alt="" />
                  <div>
                    Transactions <p style={{ margin: "1px" }}>Joel Kenley</p>
                  </div>
                </div>
                <div> -$68.00</div>
              </div>
              <div
                className={`${styles.transcard} ${styles.transcard1}`}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "20px 0px",
                }}
              >
                <div style={{ display: "flex", gap: "10px" }}>
                  <img src={ImageAssets.transactionicn.default} alt="" />
                  <div>
                    Transactions <p style={{ margin: "1px" }}>Joel Kenley</p>
                  </div>
                </div>
                <div> -$68.00</div>
              </div>
              <div
                className={`${styles.transcard} ${styles.transcard2}`}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "20px 0px",
                }}
              >
                <div style={{ display: "flex", gap: "10px" }}>
                  <img src={ImageAssets.transactionicn.default} alt="" />
                  <div>
                    Transactions <p style={{ margin: "1px" }}>Joel Kenley</p>
                  </div>
                </div>
                <div> -$68.00</div>
              </div>
            </div>
            <div className={styles.moneyexchangewrap}>
              Money Exchange
              <div>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            marginBottom: "10px",
                          }}
                        >
                          <img src={ImageAssets.indicon.default} alt="" />
                          <span>INR</span>
                        </div>{" "}
                        <p>Indian Rupees</p>
                      </td>
                      <td>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            marginBottom: "10px",
                          }}
                        >
                          <img src={ImageAssets.usaicn.default} alt="" />
                          <span>USD</span>
                        </div>{" "}
                        <p>United States Dollar</p>
                      </td>
                    </tr>
                    <tr>
                      <td>5,000</td>
                      <td>12.0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button type="button">Exchange</button>
            </div>
          </section>
        </section>
        <div className={styles.butncontainer}>
          <div className={styles.badgebtm} style={{ display: "flex" }}>
            <div>Supported Currency</div>
            <div className={styles.iconcontainer}>
              <div>
                {" "}
                <img src={ImageAssets?.dollar?.default} alt="" />
              </div>
              <div>
                <img src={ImageAssets?.dollar?.default} alt="" />
              </div>
              <div>
                <img src={ImageAssets?.dollar?.default} alt="" />
              </div>
              <div>
                <img src={ImageAssets?.dollar?.default} alt="" />
              </div>
            </div>
          </div>
        </div>
        <section className={styles.productsection}>
          <div className={styles.producttitle}>
            Our <span>Products</span>
          </div>
          <div className={styles.productdiscont}>
            <p>
              Discover a range of comprehensive and customizable banking
              products at YourBank, designed to suit your unique financial needs
              and aspirations
            </p>
            <div className={styles.prodbtnctn}>
              <button className={styles.prodbtn1} type="button">
                For Individuals
              </button>
              <button className={styles.prodbtn} type="button">
                For Businesses
              </button>
            </div>
          </div>
          <div className={styles.productdetails}>
            {products?.map((i) => (
              <div>
                <img src={i.img} alt="" />
                <p >{i.title}</p>
                <p style={{color:'#B3B3B3'}}>{i.describe}</p>
              </div>
            ))}
          </div>
        </section>
        <section className={styles.usecasewrap}>
          <p className={styles.usecasetitle}>Use case</p>
          <div className={styles.usecasegrid}>
            <img
              className={styles.usecasebg}
              src={ImageAssets.usecasebg?.default}
              alt=""
            />
            <div className={styles.usecasegridfour}>
              {usecase?.map((i) => (
                <div>
                  <img src={i.img} alt="" />
                  <p>{i.title}</p>
                </div>
              ))}
            </div>
            <div className={styles.forinduvisualcont}>
              <h2>For Individuals</h2>
              <p>
                For individuals, our mortgage services pave the way to
                homeownership, and our flexible personal loans provide vital
                support during various life milestones. We also prioritize
                retirement planning, ensuring a financially secure future for
                our customers
              </p>
              <div className={styles.forinduvisual}>
                <div>
                  <div>78%</div>
                  <p>Secure Retirement Planning</p>
                </div>
                <div>
                  <div>63%</div>
                  <p>Manageable Debt Consolidation</p>
                </div>
                <div>
                  <div>91%</div>
                  <p>Reducing financial burdens</p>
                </div>
              </div>
              <div>
                <button className={styles.indvidualbtn} type="button">
                  Learn More
                </button>
              </div>
            </div>
            <div className={styles.forinduvisualcont}>
              <h2>For Individuals</h2>
              <p>
                For individuals, our mortgage services pave the way to
                homeownership, and our flexible personal loans provide vital
                support during various life milestones. We also prioritize
                retirement planning, ensuring a financially secure future for
                our customers
              </p>
              <div className={styles.forinduvisual}>
                <div>
                  <div>78%</div>
                  <p>Secure Retirement Planning</p>
                </div>
                <div>
                  <div>63%</div>
                  <p>Manageable Debt Consolidation</p>
                </div>
                <div>
                  <div>91%</div>
                  <p>Reducing financial burdens</p>
                </div>
              </div>
              <div>
                <button className={styles.indvidualbtn} type="button">
                  Learn More
                </button>
              </div>
            </div>
            <div
              className={styles.usecasegridfour}
              style={{ position: "relative" }}
            >
              <img
                className={styles.usecasebg2}
                src={ImageAssets.usecasebg?.default}
                alt=""
              />
              {usecase2?.map((i) => (
                <div>
                  <img src={i.img} alt="" />
                  <p>{i.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className={styles.ourfeature}>
          <h3>
            Our <span>Features</span>
          </h3>
          <p>
            Experience a host of powerful features at YourBank, including
            seamless online banking, secure transactions, and personalized
            financial insights, all designed to enhance your banking experience
          </p>
          <div className={styles.featurecardcont}>
            <div className={styles.row1}>
              <p>Online Banking</p>
              <p>Financial Tools</p>
              <p>Customer Support</p>
            </div>
            <div className={styles.row2}>
              <div>
                <h4>24/7 Account Access <img style={{ width:'16px', float:'right'}} src={ImageAssets?.diagonalarrow?.default} alt="" /></h4>
                <p>
                  Enjoy the convenience of accessing your accounts anytime,
                  anywhere through our secure online banking platform. Check
                  balances, transfer funds, and pay bills with ease.
                </p>
              </div>
              <div>
                <h4>Mobile Banking App <img style={{ width:'16px', float:'right'}} src={ImageAssets?.diagonalarrow?.default} alt="" /></h4>
                <p>
                  Enjoy the convenience of accessing your accounts anytime,
                  anywhere through our secure online banking platform. Check
                  balances, transfer funds, and pay bills with ease.
                </p>
              </div>
              <div>
                <h4>Secure Transactions <img style={{ width:'16px', float:'right'}} src={ImageAssets?.diagonalarrow?.default} alt="" /></h4>
                <p>
                  Enjoy the convenience of accessing your accounts anytime,
                  anywhere through our secure online banking platform. Check
                  balances, transfer funds, and pay bills with ease.
                </p>
              </div>
              <div>
                <h4>Bill Pay and Transfers <img style={{ width:'16px', float:'right'}} src={ImageAssets?.diagonalarrow?.default} alt="" /></h4>
                <p>
                  Enjoy the convenience of accessing your accounts anytime,
                  anywhere through our secure online banking platform. Check
                  balances, transfer funds, and pay bills with ease.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.Question} >
        <h3>
        Frequently<span> Asked Questions
           </span>
          </h3>
          <p>Still you have any questions? Contact our Team via support@yourbank.com</p>
          
          <div className={styles.questioncont}>
            {questions?.map((i)=>(
            <div>
               <h4>{i.que}</h4>
               <p>{i.ans}</p>
            </div>))}
          </div>
          

        </section>
        <section className={styles.lastcard}>
<img src={ImageAssets?.gridbg?.default} alt="" />
<div  className={styles.textcont}>
   <div style={{width:'75%'}} >
      <h3>Start your financial journey with YourBank today!</h3>
      <p style={{color:'#B3B3B3', fontSize:'12px'}}>Ready to take control of your finances? Join YourBank now, and let us help you achieve your financial goals with our tailored solutions and exceptional customer service</p>
   </div>
   <div><button type="button">Open Account</button></div>
</div>
        </section>
        <footer className={styles.footer}>
         <div style={{display:'flex' , alignItems:'center', justifyContent:'center'}} >
            <img src={ImageAssets?.logo?.default} alt="" />
            <span>Your Bank</span>
         </div>
         <div className={styles.navcont} style={{display:'flex' , gap: '20px', justifyContent:'center', margin:'30px 0px'}}>
         <Link
              to="/"
              className={activetab === 1 ? styles.activetab : null}
              onClick={() => {
                tabchange(1);
              }}
            >
              Home
            </Link>
            <Link
              className={activetab === 2 ? styles.activetab : null}
              to="/careers"
              onClick={() => {
                tabchange(2);
              }}
            >
              Careers
            </Link>

            <Link
              to="/about"
              className={activetab === 3 ? styles.activetab : null}
              onClick={() => {
                tabchange(3);
              }}
            >
              About
            </Link>
            <Link
              to="/security"
              className={activetab === 4 ? styles.activetab : null}
              onClick={() => {
                tabchange(4);
              }}
            >
              Security
            </Link>
         </div>
         <div style={{height:'1px', background:'#262626', width:'76%' , margin:'0px auto' }} />
         <div className={styles.ancorcont}>
            
            <a href={`mailto:`}><img src={ImageAssets?.mail?.default} alt="" /> hello@skillbirdge.com</a><a href="tel:+91 91813 23 2309"><img src={ImageAssets?.phone?.default} alt="" />+91 91813 23 2309 </a><a href="www.google.com"><img src={ImageAssets?.location?.default} alt="" />Somewhere in the World</a>
            

         </div>
         <div style={{height:'1px', background:'#262626', width:'76%' , margin:'0px auto'}} />


         <div className={styles.partner}>
            <div style={{display:'flex',gap:'10px'}}>
               <img src={ImageAssets?.facebook?.default} alt="" /><img src={ImageAssets?.skype?.default} alt="" /><img src={ImageAssets?.linked?.default} alt="" />
            </div>
            <div>YourBank All Rights Reserved</div>
            <div>Privacy Policy | Terms of Service</div>
         </div>

        </footer>
      </section>
    </section>
  );
};

export default Homepage;
