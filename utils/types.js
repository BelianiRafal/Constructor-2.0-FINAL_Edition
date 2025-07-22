import { standard_nsltr } from "../utils/css/standard_nsltr.js";
import { standard_lp } from "../utils/css/standard_lp.js";

const nsltr_standard = standard_nsltr()
const lp_standard = standard_lp()

export default {
  NEWSLETTER: "newsletter",
  LANDINGPAGE: "landing",
  CSS: {
   NS: nsltr_standard,
 
    
    NS_BLACK_WEEK: `
      /* Prevent WebKit and Windows mobile changing default text sizes */
      table, td {
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }

      /* Remove spacing between tables in Outlook 2007 and up */
      img {
        -ms-interpolation-mode: bicubic;
      }
    
    .title-advantages {
      text-align: center;
      font-size: 11px;
      color: #8c8278;
      padding-bottom: 10px;
      padding-top: 10px;
      margin: 0;
    }
    
    .title-advantages-item {
      margin-left: 4px;
    }
    
    .newsletterRecommendationHeader {
      text-align: center;
      font-size: 11px;
      color: #8c8278;
      margin-bottom: 10px;
      margin-top: 10px;
    }
    
    /* NEWSLETTER START */
    
    .newsletterFreebieContainer {
      padding-left: 10px;
    }
    
    .newsletterBottom80px {
      padding-bottom: 80px;
    }
    
    .newsletterBottom10px {
      padding-bottom: 10px;
    }

    .newsletterContainer {
      padding-left: 20px;
      padding-right: 20px;
    }
    
    .newsletterCode {
      font-size: 30px;
      line-height: 1.20;
      font-family: "Open Sans", sans-serif;
    }

    .newsletterCta {
      font-size: 20px;
      line-height: 1.20;
      font-family: "Open Sans", sans-serif;
    }
    
    .newsletterBottom20px {
      padding-bottom: 20px;
    }
    
    .newsletterBottom35px {
      padding-bottom: 35px;
    }

    .newsletterBottom60px {
      padding-bottom: 60px;
    }
    
    .newsletterParagraph {
      font-size: 18px;
      font-family: "Open Sans", sans-serif;
      line-height: 1.20;
    }
    
    .newsletterTitleOfferPart {
      font-size: 30px;
      font-family: "Open Sans", sans-serif;
      line-height: 1.20;
    }

    .newsletterTitle {
      font-size: 30px;
      font-family: "Open Sans", sans-serif;
      line-height: 1.20;
      font-weight: 600;
    }
    
    .newsletterProductTitle {
      font-size: 20px;
      font-family: "Open Sans", sans-serif;
      line-height: 1.20;
    }
    
    .newsletterProductLowPrice {
      font-size: 18px;
      font-family: "Open Sans", sans-serif;
      line-height: 1.20;
      font-weight: 600;
    }
    
    .newsletterProductHightPrice {
      font-size: 14px;
      font-family: "Open Sans", sans-serif;
      line-height: 1.20;
      text-decoration: line-through;
    }
    
    .newsletterRight10px {
      padding-right: 10px;
    }
    
    .newsletterLeft10px {
      padding-left: 10px;
    }
    
    /* NEWSLETTER END */
    
    .newsletterFooter {
      padding-left: 20px !important;
      padding-right: 20px !important;
    }
    
    .newsletterConditions {
      color: black;
      font-family: "Open Sans", sans-serif;
      font-size: 8px;
    }
    
    .newsletterFooterCompanyDetails {
      vertical-align: middle;
      padding-top: 20px;
      padding-right: 0px;
      padding-bottom: 20px;
      font-size: 11px;
      font-family: "Open Sans", sans-serif !important;
      color: #000000;
      background: #ececec;
      width: 100%;
    }
    
    .newsletterFooterTitle {
      text-align: left;
      color: #000000;
      font-family: "Open Sans", sans-serif;
      font-size: 20px;
    }
    
    .newsletterProductTitleFreebie {
      text-align: center;
      font-family: "Open Sans", sans-serif;
      font-size: 20px;
    }
    
    .newsletterFooterCategoryLEFT {
      padding-bottom: 20px !important;
      padding-right: 10px !important;
    }
    
    .newsletterFooterCategoryRIGHT {
      padding-bottom: 20px !important;
      padding-left: 10px !important;
    }
    
    .newsletterFooterCategoryLEFTBottom {
      padding-right: 10px !important;
    }
    
    .newsletterFooterCategoryRIGHTBottom {
      padding-left: 10px !important;
    }
    
    .newsletterSocialIcon {
      padding-left: 25px !important;
    }
    
    .newsletterTopBottomContainer {
      padding-top: 35px !important;
      padding-bottom: 35px !important;
    }
    
    .newsletterKlarnaBannerContainer {
      padding-top: 35px !important;
      padding-bottom: 35px !important;
    }
    

    
    @media screen and (max-width: 768px) {
      .newsletterFooterCategoryLEFTBottom {
        padding-right: 5px !important;
      }
    
      .newsletterFooterCategoryRIGHTBottom {
        padding-left: 5px !important;
      }
    
      .newsletterFooterCategoryLEFT {
        padding-bottom: 10px !important;
        padding-right: 5px !important;
      }
    
      .newsletterFooterCategoryRIGHT {
        padding-bottom: 10px !important;
        padding-left: 5px !important;
      }
    
      .newsletterSocialIcon {
        padding-left: 13px !important;
      }
    
      .newsletterTopBottomContainer {
        padding-top: 20px !important;
        padding-bottom: 20px !important;
      }
    
      .newsletterFooterTitle {
        font-size: 18px;
      }
    
      .newsletterProductTitleFreebie {
        font-size: 18px;
      }
    
      .newsletterProductTitle {
        font-size: 18px;
      }
    
      .newsletterProductLowPrice {
        font-size: 16px;
      }
    
      .newsletterProductHightPrice {
        display: block;
      }
    
      .newsletterProductTitleContainer {
        padding-top: 10px;
      }
    
      .newsletterTitle {
        font-size: 25px;
      }
    
      .newsletterTitleOfferPart {
        font-size: 25px;
      }
    
      .newsletterContainer {
        padding-left: 10px;
        padding-right: 10px;
      }
    
      .newsletterFreebieContainer {
        padding-left: 10px;
        padding-right: 0px !important;
      }
    
      .newsletterBottom35px {
        padding-bottom: 20px;
      }

      .newsletterBottom60px {
        padding-bottom: 40px;
      }
    
      .newsletterParagraph {
        font-size: 16px;
      }
    
      .newsletterLeft10px {
        padding-left: 5px;
      }
    
      .newsletterRight10px {
        padding-right: 5px;
      }
    
      .newsletterBottom20px {
        padding-bottom: 10px;
      }
    
      .newsletterBottom80px {
        padding-bottom: 50px;
      }
    }
    
    @media screen and (max-width: 570px) {
      .newsletterProductTitleFreebie {
        font-size: 16px;
      }

      .newsletterCode {
        font-size: 20px;
        font-weight: 600;
      }
    }
    
    @media screen and (max-width: 460px) {
      .newsletterProductTitleFreebie {
        font-size: 14px;
      }
    }
    
    @media screen and (max-width: 370px) {
      .newsletterProductTitleFreebie {
        font-size: 12px;
      }
    }
    `,
    NS_MATTRESS: `
    /* Prevent WebKit and Windows mobile changing default text sizes */
    table, td {
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }

    /* Remove spacing between tables in Outlook 2007 and up */
    img {
      -ms-interpolation-mode: bicubic;
    }
  
  .title-advantages {
    text-align: center;
    font-size: 11px;
    color: #8c8278;
    padding-bottom: 10px;
    padding-top: 10px;
    margin: 0;
  }
  
  .title-advantages-item {
    margin-left: 4px;
  }
  
  .newsletterRecommendationHeader {
    text-align: center;
    font-size: 11px;
    color: #8c8278;
    margin-bottom: 10px;
    margin-top: 10px;
  }
  
  /* NEWSLETTER START */
  
  .newsletterFreebieContainer {
    padding-left: 10px;
  }
  
  .newsletterBottom80px {
    padding-bottom: 80px;
  }
  
  .newsletterBottom10px {
    padding-bottom: 10px;
  }

  .newsletterContainer {
    padding-left: 20px;
    padding-right: 20px;
  }
  
  .newsletterCode {
    font-size: 30px;
    line-height: 1.20;
    font-family: "Open Sans", sans-serif;
  }

  .newsletterCta {
    font-size: 20px;
    line-height: 1.20;
    font-family: "Open Sans", sans-serif;
  }
  
  .newsletterBottom20px {
    padding-bottom: 20px;
  }
  
  .newsletterBottom35px {
    padding-bottom: 35px;
  }

  .newsletterBottom60px {
    padding-bottom: 60px;
  }
  
  .newsletterParagraph {
    font-size: 18px;
    font-family: "Open Sans", sans-serif;
    line-height: 1.20;
  }
  
  .newsletterTitleOfferPart {
    font-size: 30px;
    font-family: "Open Sans", sans-serif;
    line-height: 1.60;
  }
  
  .newsletterTitle {
    font-size: 30px;
    font-family: "Open Sans", sans-serif;
    line-height: 1.20;
  }
  
  .newsletterProductTitle {
    font-size: 20px;
    font-family: "Open Sans", sans-serif;
    line-height: 1.20;
  }
  
  .newsletterProductLowPrice {
    font-size: 18px;
    font-family: "Open Sans", sans-serif;
    line-height: 1.20;
    font-weight: 600;
  }
  
  .newsletterProductHightPrice {
    font-size: 14px;
    font-family: "Open Sans", sans-serif;
    line-height: 1.20;
    text-decoration: line-through;
  }
  
  .newsletterRight10px {
    padding-right: 10px;
  }
  
  .newsletterLeft10px {
    padding-left: 10px;
  }
  
  /* NEWSLETTER END */
  
  .newsletterFooter {
    padding-left: 20px !important;
    padding-right: 20px !important;
  }
  
  .newsletterConditions {
    color: black;
    font-family: "Open Sans", sans-serif;
    font-size: 8px;
  }
  
  .newsletterFooterCompanyDetails {
    vertical-align: middle;
    padding-top: 20px;
    padding-right: 0px;
    padding-bottom: 20px;
    font-size: 11px;
    font-family: "Open Sans", sans-serif !important;
    color: #000000;
    background: #ececec;
    width: 100%;
  }
  
  .newsletterFooterTitle {
    text-align: left;
    color: #000000;
    font-family: "Open Sans", sans-serif;
    font-size: 20px;
  }
  
  .newsletterProductTitleFreebie {
    text-align: center;
    font-family: "Open Sans", sans-serif;
    font-size: 20px;
  }
  
  .newsletterFooterCategoryLEFT {
    padding-bottom: 20px !important;
    padding-right: 10px !important;
  }
  
  .newsletterFooterCategoryRIGHT {
    padding-bottom: 20px !important;
    padding-left: 10px !important;
  }
  
  .newsletterFooterCategoryLEFTBottom {
    padding-right: 10px !important;
  }
  
  .newsletterFooterCategoryRIGHTBottom {
    padding-left: 10px !important;
  }
  
  .newsletterSocialIcon {
    padding-left: 25px !important;
  }
  
  .newsletterTopBottomContainer {
    padding-top: 35px !important;
    padding-bottom: 35px !important;
  }
  
  .newsletterKlarnaBannerContainer {
    padding-top: 35px !important;
    padding-bottom: 35px !important;
  }
  

  
  @media screen and (max-width: 768px) {
    .newsletterFooterCategoryLEFTBottom {
      padding-right: 5px !important;
    }
  
    .newsletterFooterCategoryRIGHTBottom {
      padding-left: 5px !important;
    }
  
    .newsletterFooterCategoryLEFT {
      padding-bottom: 10px !important;
      padding-right: 5px !important;
    }
  
    .newsletterFooterCategoryRIGHT {
      padding-bottom: 10px !important;
      padding-left: 5px !important;
    }
  
    .newsletterSocialIcon {
      padding-left: 13px !important;
    }
  
    .newsletterTopBottomContainer {
      padding-top: 20px !important;
      padding-bottom: 20px !important;
    }
  
    .newsletterFooterTitle {
      font-size: 18px;
    }
  
    .newsletterProductTitleFreebie {
      font-size: 18px;
    }
  
    .newsletterProductTitle {
      font-size: 18px;
    }
  
    .newsletterProductLowPrice {
      font-size: 16px;
    }
  
    .newsletterProductHightPrice {
      display: block;
    }
  
    .newsletterProductTitleContainer {
      padding-top: 10px;
    }
  
    .newsletterTitle {
      font-size: 25px;
    }
  
    .newsletterTitleOfferPart {
      font-size: 25px;
    }
  
    .newsletterContainer {
      padding-left: 10px;
      padding-right: 10px;
    }
  
    .newsletterFreebieContainer {
      padding-left: 10px;
      padding-right: 0px !important;
    }
  
    .newsletterBottom35px {
      padding-bottom: 20px;
    }

    .newsletterBottom60px {
      padding-bottom: 40px;
    }
  
    .newsletterParagraph {
      font-size: 16px;
    }
  
    .newsletterLeft10px {
      padding-left: 5px;
    }
  
    .newsletterRight10px {
      padding-right: 5px;
    }
  
    .newsletterBottom20px {
      padding-bottom: 10px;
    }
  
    .newsletterBottom80px {
      padding-bottom: 50px;
    }
  }
  
  @media screen and (max-width: 570px) {
    .newsletterProductTitleFreebie {
      font-size: 16px;
    }

    .newsletterCode {
      font-size: 20px;
    }
  }
  
  @media screen and (max-width: 460px) {
    .newsletterProductTitleFreebie {
      font-size: 14px;
    }
  }
  
  @media screen and (max-width: 370px) {
    .newsletterProductTitleFreebie {
      font-size: 12px;
    }

    .newsletterCta {
      font-size: 14px;
    }

    .newsletterTitle {
      font-size: 20px;
    }

    .newsletterTitleOfferPart {
      font-size: 20px;
    }
  }
  `,
  LP: lp_standard,
  LP_BLACK_WEEK: `
    #newsletter .title-advantages {
      text-align: center;
      font-size: 11px;
      color: #8c8278;
      padding-bottom: 10px;
      padding-top: 10px;
      margin: 0;
    }
    
    table {
      table-collapse: unset;
    }
    
    #newsletter .title-advantages-item {
      margin-left: 4px;
    }
    
    #newsletter .newsletterRecommendationHeader {
      text-align: center;
      font-size: 11px;
      color: #8c8278;
      margin-bottom: 10px;
      margin-top: 10px;
    }
    
    /* NEWSLETTER START */
    
    #newsletter .newsletterFreebieContainer {
      padding-left: 10px;
    }
    
    #newsletter .newsletterBottom80px {
      padding-bottom: 80px;
    }
    
    #newsletter .newsletterContainer {
      padding-left: 20px;
      padding-right: 20px;
    }
    
    #newsletter.newsletterContainer {
      padding-left: 20px;
      padding-right: 20px;
    }
    
    #newsletter .newsletterCta {
      font-size: 20px;
      line-height: 1.20;
      font-weight: 600;
    }

    #newsletter .newsletterCode {
      font-size: 30px;
      font-weight: 600;
      line-height: 1.20;
    }
    
    #newsletter .newsletterBottom20px {
      padding-bottom: 20px;
    }

    #newsletter .newsletterBottom10px {
      padding-bottom: 10px;
    }
    
    #newsletter .newsletterBottom35px {
      padding-bottom: 35px;
    }

    #newsletter .newsletterBottom60px {
      padding-bottom: 60px;
    }
    
    #newsletter .newsletterParagraph {
      font-size: 18px;
      line-height: 1.20;
    }
    
    #newsletter .newsletterTitle {
      font-size: 30px;
      line-height: 1.20;
    }

    #newsletter .newsletterTitleOfferPart {
      font-size: 30px;
      line-height: 1.20;
    }
    
    #newsletter .newsletterProductTitle {
      font-size: 20px;
      line-height: 1.20;
    }
    
    #newsletter .newsletterProductLowPrice {
      font-size: 18px;
      line-height: 1.20;
      font-weight: 600;
    }
    
    #newsletter .newsletterProductHightPrice {
      font-size: 14px;
      line-height: 1.20;
      text-decoration: line-through;
    }
    
    #newsletter .newsletterRight10px {
      padding-right: 10px;
    }
    
    #newsletter .newsletterLeft10px {
      padding-left: 10px;
    }
    
    /* NEWSLETTER END */
    
    #newsletter .newsletterFooter {
      padding-left: 20px !important;
      padding-right: 20px !important;
    }
    
    #newsletter .newsletterConditions {
      color: black;
      font-size: 8px;
    }
    
    #newsletter .newsletterFooterCompanyDetails {
      vertical-align: middle;
      padding-top: 20px;
      padding-right: 0px;
      padding-bottom: 20px;
      font-size: 11px;
      color: #000000;
      background: #ececec;
      width: 100%;
    }
    
    #newsletter .newsletterFooterTitle {
      text-align: left;
      color: #000000;
      font-size: 20px;
    }
    
    #newsletter .newsletterProductTitleFreebie {
      text-align: center;
      font-size: 20px;
    }
    
    #newsletter .newsletterFooterCategoryLEFT {
      padding-bottom: 20px !important;
      padding-right: 10px !important;
    }
    
    #newsletter .newsletterFooterCategoryRIGHT {
      padding-bottom: 20px !important;
      padding-left: 10px !important;
    }
    
    #newsletter .newsletterFooterCategoryLEFTBottom {
      padding-right: 10px !important;
    }
    
    #newsletter .newsletterFooterCategoryRIGHTBottom {
      padding-left: 10px !important;
    }
    
    #newsletter .newsletterSocialIcon {
      padding-left: 25px !important;
    }
    
    #newsletter .newsletterTopBottomContainer {
      padding-top: 35px !important;
      padding-bottom: 35px !important;
    }
    
    #newsletter .newsletterKlarnaBannerContainer {
      padding-top: 35px !important;
      padding-bottom: 35px !important;
    }
    
    #newsletter .newsletterFooterTitle {
      color: #000000;
      font-size: 20px;
    }
    
    @media screen and (max-width: 768px) {
      #newsletter .newsletterFooterCategoryLEFTBottom {
        padding-right: 5px !important;
      }
    
      #newsletter .newsletterFooterCategoryRIGHTBottom {
        padding-left: 5px !important;
      }
    
      #newsletter .newsletterFooterCategoryLEFT {
        padding-bottom: 10px !important;
        padding-right: 5px !important;
      }
    
      #newsletter .newsletterFooterCategoryRIGHT {
        padding-bottom: 10px !important;
        padding-left: 5px !important;
      }
    
      #newsletter .newsletterSocialIcon {
        padding-left: 13px !important;
      }
    
      #newsletter .newsletterTopBottomContainer {
        padding-top: 20px !important;
        padding-bottom: 20px !important;
      }
    
      #newsletter .newsletterFooterTitle {
        font-size: 18px;
      }
    
      #newsletter .newsletterProductTitleFreebie {
        font-size: 18px;
      }
    
      #newsletter .newsletterProductTitle {
        font-size: 18px;
      }
    
      #newsletter .newsletterProductLowPrice {
        font-size: 16px;
      }
    
      #newsletter .newsletterProductHightPrice {
        display: block;
      }
    
      #newsletter .newsletterProductTitleContainer {
        padding-top: 10px;
      }
    
      #newsletter .newsletterTitle {
        font-size: 25px;
      }

      #newsletter .newsletterTitleOfferPart {
        font-size: 25px;
      }
    
      #newsletter .newsletterContainer {
        padding-left: 10px;
        padding-right: 10px;
      }
      
      #newsletter.newsletterContainer {
        padding-left: 10px;
        padding-right: 10px;
      }
    
      #newsletter .newsletterFreebieContainer {
        padding-left: 10px;
        padding-right: 0px !important;
      }
    
      #newsletter .newsletterBottom35px {
        padding-bottom: 20px;
      }

      #newsletter .newsletterBottom60px {
        padding-bottom: 40px;
      }
    
      #newsletter .newsletterParagraph {
        font-size: 16px;
      }
    
      #newsletter .newsletterLeft10px {
        padding-left: 5px;
      }
    
      #newsletter .newsletterRight10px {
        padding-right: 5px;
      }
    
      #newsletter .newsletterBottom20px {
        padding-bottom: 10px;
      }
    
      #newsletter .newsletterBottom80px {
        padding-bottom: 50px;
      }
    }
    
    @media screen and (max-width: 570px) {
      #newsletter .newsletterProductTitleFreebie {
        font-size: 16px;
      }

      .newsletterCode {
        font-size: 20px;
      }
    }
    
     @media screen and (max-width: 460px) {
      #newsletter .newsletterProductTitleFreebie {
        font-size: 14px;
      }
    }
    
    @media screen and (max-width: 370px) {
      #newsletter .newsletterProductTitleFreebie {
        font-size: 12px;
      }
    }`,
    LP_MATTRESS: `
    #newsletter .title-advantages {
      text-align: center;
      font-size: 11px;
      color: #8c8278;
      padding-bottom: 10px;
      padding-top: 10px;
      margin: 0;
    }
    
    table {
      table-collapse: unset;
    }
    
    #newsletter .title-advantages-item {
      margin-left: 4px;
    }
    
    #newsletter .newsletterRecommendationHeader {
      text-align: center;
      font-size: 11px;
      color: #8c8278;
      margin-bottom: 10px;
      margin-top: 10px;
    }
    
    /* NEWSLETTER START */
    
    #newsletter .newsletterFreebieContainer {
      padding-left: 10px;
    }
    
    #newsletter .newsletterBottom80px {
      padding-bottom: 80px;
    }
    
    #newsletter .newsletterContainer {
      padding-left: 20px;
      padding-right: 20px;
    }
    
    #newsletter.newsletterContainer {
      padding-left: 20px;
      padding-right: 20px;
    }
    
    #newsletter .newsletterCta {
      font-size: 20px;
      line-height: 1.20;
    }

    #newsletter .newsletterCode {
      font-size: 30px;
      line-height: 1.20;
    }
    
    #newsletter .newsletterBottom20px {
      padding-bottom: 20px;
    }

    #newsletter .newsletterBottom10px {
      padding-bottom: 10px;
    }
    
    #newsletter .newsletterBottom35px {
      padding-bottom: 35px;
    }

    #newsletter .newsletterBottom60px {
      padding-bottom: 60px;
    }
    
    #newsletter .newsletterParagraph {
      font-size: 18px;
      line-height: 1.20;
    }
    
    #newsletter .newsletterTitle {
      font-size: 30px;
      line-height: 1.20;
    }

    #newsletter .newsletterTitleOfferPart {
      font-size: 30px;
      line-height: 1.20;
    }
    
    #newsletter .newsletterProductTitle {
      font-size: 20px;
      line-height: 1.20;
    }
    
    #newsletter .newsletterProductLowPrice {
      font-size: 18px;
      line-height: 1.20;
      font-weight: 600;
    }
    
    #newsletter .newsletterProductHightPrice {
      font-size: 14px;
      line-height: 1.20;
      text-decoration: line-through;
    }
    
    #newsletter .newsletterRight10px {
      padding-right: 10px;
    }
    
    #newsletter .newsletterLeft10px {
      padding-left: 10px;
    }
    
    /* NEWSLETTER END */
    
    #newsletter .newsletterFooter {
      padding-left: 20px !important;
      padding-right: 20px !important;
    }
    
    #newsletter .newsletterConditions {
      color: black;
      font-size: 8px;
    }
    
    #newsletter .newsletterFooterCompanyDetails {
      vertical-align: middle;
      padding-top: 20px;
      padding-right: 0px;
      padding-bottom: 20px;
      font-size: 11px;
      color: #000000;
      background: #ececec;
      width: 100%;
    }
    
    #newsletter .newsletterFooterTitle {
      text-align: left;
      color: #000000;
      font-size: 20px;
    }
    
    #newsletter .newsletterProductTitleFreebie {
      text-align: center;
      font-size: 20px;
    }
    
    #newsletter .newsletterFooterCategoryLEFT {
      padding-bottom: 20px !important;
      padding-right: 10px !important;
    }
    
    #newsletter .newsletterFooterCategoryRIGHT {
      padding-bottom: 20px !important;
      padding-left: 10px !important;
    }
    
    #newsletter .newsletterFooterCategoryLEFTBottom {
      padding-right: 10px !important;
    }
    
    #newsletter .newsletterFooterCategoryRIGHTBottom {
      padding-left: 10px !important;
    }
    
    #newsletter .newsletterSocialIcon {
      padding-left: 25px !important;
    }
    
    #newsletter .newsletterTopBottomContainer {
      padding-top: 35px !important;
      padding-bottom: 35px !important;
    }
    
    #newsletter .newsletterKlarnaBannerContainer {
      padding-top: 35px !important;
      padding-bottom: 35px !important;
    }
    
    #newsletter .newsletterFooterTitle {
      color: #000000;
      font-size: 20px;
    }
    
    @media screen and (max-width: 768px) {
      #newsletter .newsletterFooterCategoryLEFTBottom {
        padding-right: 5px !important;
      }
    
      #newsletter .newsletterFooterCategoryRIGHTBottom {
        padding-left: 5px !important;
      }
    
      #newsletter .newsletterFooterCategoryLEFT {
        padding-bottom: 10px !important;
        padding-right: 5px !important;
      }
    
      #newsletter .newsletterFooterCategoryRIGHT {
        padding-bottom: 10px !important;
        padding-left: 5px !important;
      }
    
      #newsletter .newsletterSocialIcon {
        padding-left: 13px !important;
      }
    
      #newsletter .newsletterTopBottomContainer {
        padding-top: 20px !important;
        padding-bottom: 20px !important;
      }
    
      #newsletter .newsletterFooterTitle {
        font-size: 18px;
      }
    
      #newsletter .newsletterProductTitleFreebie {
        font-size: 18px;
      }
    
      #newsletter .newsletterProductTitle {
        font-size: 18px;
      }
    
      #newsletter .newsletterProductLowPrice {
        font-size: 16px;
      }
    
      #newsletter .newsletterProductHightPrice {
        display: block;
      }
    
      #newsletter .newsletterProductTitleContainer {
        padding-top: 10px;
      }
    
      #newsletter .newsletterTitle {
        font-size: 25px;
      }

      #newsletter .newsletterTitleOfferPart {
        font-size: 25px;
      }
    
      #newsletter .newsletterContainer {
        padding-left: 10px;
        padding-right: 10px;
      }
      
      #newsletter.newsletterContainer {
        padding-left: 10px;
        padding-right: 10px;
      }
    
      #newsletter .newsletterFreebieContainer {
        padding-left: 10px;
        padding-right: 0px !important;
      }
    
      #newsletter .newsletterBottom35px {
        padding-bottom: 20px;
      }

      #newsletter .newsletterBottom60px {
        padding-bottom: 40px;
      }
    
      #newsletter .newsletterParagraph {
        font-size: 16px;
      }
    
      #newsletter .newsletterLeft10px {
        padding-left: 5px;
      }
    
      #newsletter .newsletterRight10px {
        padding-right: 5px;
      }
    
      #newsletter .newsletterBottom20px {
        padding-bottom: 10px;
      }
    
      #newsletter .newsletterBottom80px {
        padding-bottom: 50px;
      }
    }
    
    @media screen and (max-width: 570px) {
      #newsletter .newsletterProductTitleFreebie {
        font-size: 16px;
      }

      .newsletterCode {
        font-size: 20px;
      }
    }
    
     @media screen and (max-width: 460px) {
      #newsletter .newsletterProductTitleFreebie {
        font-size: 14px;
      }
    }
    
    @media screen and (max-width: 370px) {
      #newsletter .newsletterProductTitleFreebie {
        font-size: 12px;
      }
    }`,
    CGB: {
      DESKTOP: `.cgbContainer{
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .cgbContainer a {
            color: #000000;
          }

          .xyCTA{
            text-decoration: none;
            text-decoration: underline;
            text-underline-position: under;
            text-decoration-thickness: 1px;
            font-weight: 500;
            font-size: 20px;
          }
          .xyHeader1{
            font-size: 45px;
            line-height: 1.20;
          }
          .xyHeader3{
            font-size: 20px;
          }
        
          .textContainer1 {
            padding-left: min(24px, 2vw);
            min-width: 35%;
            flex: 0 1 35%;
          }
          
          @media screen and (max-width: 1200px){
            .xyHeader1{
              font-size: 32px;
            }
            .xyHeader3{
              font-size: 18px;
            }
            .xyCTA{
              font-size: 18px;
            }
          }
          @media screen and (max-width: 800px){
            .xyHeader1{
              font-size: 30px;
            }
            .xyHeader3{
              font-size: 14px;
            }
            .xyCTA{
              font-size: 14px;
            }
          }
          @media screen and (max-width: 650px){
            .xyHeader1{
              font-size: 20px;
            }
    }`,
      MOBILE: `
          .xyzGridContainer {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
            align-content: center;
            align-items: center;
            padding-left: 20px;
          }

          .cgbContainer a {
            color: #000000;
          }
        
          .xyCTA {
            text-decoration: underline;
            text-underline-position: under;
            text-decoration-thickness: 1px;
            font-weight: 500;
            font-size: 12px;
          }
        
          .xyHeader1 {
            font-size: 26px;
            line-height: 36px;
          }
          .xyHeader3 {
            font-size: 12px;
          }
          `,
    },
  },
  WRAPPER: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
          <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
              <head>
                  <title>Beliani</title>
                  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                  <meta name="x-apple-disable-message-reformatting">
                  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes">
                  <meta name="color-scheme" content="light only">
                  <meta name="supported-color-schemes" content="light only">
                  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&subset=cyrillic-ext,latin-ext" rel="stylesheet">
                  <!--[if gte mso 7]>
                    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                        <v:fill type="tile" color="#ececec">
                    </v:background>
                  <![endif]-->
                  <!--[if gte mso 7]>
                    <style type="text/css">
                      table {
                        border-collapse: collapse;
                        border-spacing: 0;
                      }
                    </style>
                  <![endif]-->
                  <!--[if gte mso 7]>
                    <xml>
                        <o:OfficeDocumentSettings>
                        <o:AllowPNG/>
                        <o:PixelsPerInch>96</o:PixelsPerInch>
                        </o:OfficeDocumentSettings>
                    </xml>
                  <![endif]-->
              </head>
          
              <body class="body" width="100%" style="width:100% !important; padding:0 !important; margin:0 auto !important; font-family: 'Open Sans', sans-serif!important; font-size:13px; color:#000000; text-align:left; background-color:#ececec;">
              </body>
          </html>`,
};
