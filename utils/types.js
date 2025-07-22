export default {
  NEWSLETTER: "newsletter",
  LANDINGPAGE: "landing",
  CSS: {
    NS: `
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
<<<<<<< HEAD
=======

          .newsletterContainerFree {
            padding-left: 124px;
            padding-right: 124px;
          }
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
          
          .newsletterCta {
            font-size: 20px;
            line-height: 1.20;
            font-family: "Open Sans", sans-serif;
          }

          .newsletterCode {
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

<<<<<<< HEAD
          .newsletterBottom60px {
            padding-bottom: 60px;
          }
=======
          .newsletterBottom40px {
            padding-bottom: 40px;
          }

          .newsletterBottom60px {
            padding-bottom: 60px;
          }

          .newsletterBottom70px {
            padding-bottom: 70px;
          }
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
          
          .newsletterParagraph {
            font-size: 18px;
            font-family: "Open Sans", sans-serif;
            line-height: 1.20;
          }
<<<<<<< HEAD
=======

          .timerParagraph {
            font-size: 30px;
            font-family: "Open Sans", sans-serif;
            line-height: 1.20;
          }
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
          
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

<<<<<<< HEAD
=======
          .newsletterTitleAdditional{
            font-size: 27px;
            font-family: "Open Sans", sans-serif;
            line-height: 1.25;
            text-decoration: underline;
          }

>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
          .newsletterIntroTitle {
            font-size: 35px;
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
<<<<<<< HEAD
            padding-right: 10px;
          }
          
          .newsletterLeft10px {
            padding-left: 10px;
=======
            padding-right: 10px !important;
          }

          .newsletterRight02px {
            padding-right: 20px;
          }

          .newsletterLeft02px {
            padding-left: 20px;
          }

          .newsletterRight5px {
            padding-right: 5px;
          }
          
          .newsletterLeft10px {
            padding-left: 10px !important;
          }

          .newsletterLeft5px {
            padding-left: 5px;
          }

          .newsletterLeft20px {
            padding-left: 20px;
          }
          
          .newsletterRight20px {
            padding-left: 20px;
            padding-right: 20px;
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
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
<<<<<<< HEAD
          
          .br {
              display: block; 
          }
          
          @media screen and (max-width: 768px) {
=======

          .newsletterProductContainer {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }

          .newsletterProductContainerLast {
            padding-left: 10px !important;
            padding-right: 10px !important;
          }

          .newsletterProductContainer70px {
            width: 50% !important;
            vertical-align: top;
            padding-right: 10px;
            padding-left: 10px;
            padding-bottom: 70px;
          }

          .newsletterProductTitleLast {
            font-size: 27px;
            font-family: "Open Sans", sans-serif;
            line-height: 1.25;
            color: #000000;
            text-decoration: underline;
          }

          .newsletterAditionalTitle {
            font-size: 30px;
            font-family: "Open Sans", sans-serif;
            line-height: 1.20;
            font-weight: 400;
          }

          .newsletterSubtitleTimer {
            font-size: 30px; 
            line-height: 1.25;
          }

          .newsletterProductTitleContainer {
            padding-top: 35px;
          }

          .backgroundOne {
            background-color: #ffffff !important;
          }
          
          .br {
            display: block; 
        }
          
          @media screen and (max-width: 768px) {
            .stack-column {
              display: block !important;
              width: 100% !important;
              max-width: 100% !important;
            }
            .product-img {
              width: 100% !important;
              height: auto !important;
            }

            .br {
    
              display: contents;
          }

>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
            .newsletterFooterCategoryLEFTBottom {
              padding-right: 5px !important;
            }

<<<<<<< HEAD
            .br {
               display: contents;
=======
            .newsletterAditionalTitle {
              font-size: 25px;
            }

            .newsletterSubtitleTimer {
              font-size: 20px !important;
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
            }
          
            .newsletterFooterCategoryRIGHTBottom {
              padding-left: 5px !important;
            }
<<<<<<< HEAD
=======

            .newsletterProductContainer {
              padding-left: 10px !important;
              padding-right: 10px !important;
            }

            .newsletterProductContainerLast {
              padding-left: 5px !important;
              padding-right: 5px !important;
            }

            .newsletterProductContainer70px {
              width: 50% !important;
              vertical-align: top;
              padding-right: 5px !important;
              padding-bottom: 50px !important;
            }

            .newsletterProductTitleLast {
              font-size: 16px !important;
              text-decoration: underline;
            }

            .newsletterProductTitleContainer {
              padding-top: 15px;
            }
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
          
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
          
<<<<<<< HEAD
            .newsletterProductTitleContainer {
              padding-top: 10px;
            }
          
=======
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
            .newsletterTitle {
              font-size: 25px;
            }

<<<<<<< HEAD
=======
            .newsletterTitleAdditional {
              font-size: 16px !important;
            }

>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
            .newsletterIntroTitle {
              font-size: 28px;
            }
          
            .newsletterTitleOfferPart {
              font-size: 25px;
            }
          
            .newsletterContainer {
              padding-left: 10px;
              padding-right: 10px;
            }
<<<<<<< HEAD
=======

            .newsletterContainerFree {
              padding-left: 62px;
              padding-right: 62px;
            }
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
          
            .newsletterFreebieContainer {
              padding-left: 10px;
              padding-right: 0px !important;
            }
          
            .newsletterBottom35px {
              padding-bottom: 20px;
            }

<<<<<<< HEAD
            .newsletterBottom60px {
              padding-bottom: 40px;
            }
=======
            .newsletterBottom40px {
              padding-bottom: 25px;
            }

            .newsletterBottom60px {
              padding-bottom: 40px;
            }

            .newsletterBottom70px {
              padding-bottom: 50px;
            }
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
          
            .newsletterParagraph {
              font-size: 16px;
            }
<<<<<<< HEAD
          
            .newsletterLeft10px {
              padding-left: 5px;
            }
          
            .newsletterRight10px {
              padding-right: 5px;
=======

            .timerParagraph {
              font-size: 27px;
            }
          
            .newsletterLeft10px {
              padding-left: 5px !important;
            }

            .newsletterLeft20px {
              padding-left: 10px;
            }

            .newsletterRight20px {
              padding-left: 10px;
              padding-right: 10px;
            }
          
            .newsletterRight10px {
              padding-right: 5px !important;
            }

            .newsletterRight02px {
              padding-right: 10px;
            }

            .newsletterLeft02px {
              padding-left: 10px;
            }

            .newsletterRight5px {
              padding-right: 2px;
            }

            .newsletterLeft5px {
              padding-left: 2px;
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
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
    
<<<<<<< HEAD
=======
    .backgroundOne {
      background-color: #ffffff !important;
    }

    .backgroundTwo {
      background-color: #ffffff !important;
    }

>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
    .newsletterFreebieContainer {
      padding-left: 10px;
    }
    
    .newsletterBottom80px {
      padding-bottom: 80px;
    }
    
    .newsletterBottom10px {
      padding-bottom: 10px;
    }

<<<<<<< HEAD
=======
    .WhiteSpace {
      background-color: #ffffff !important;
    }

>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
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
<<<<<<< HEAD
=======

    .newsletterCtaTwo {
      font-size: 20px;
      line-height: 1.20;
      font-family: "Open Sans", sans-serif;
      color: #ffffff !important;
    }
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
    
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
<<<<<<< HEAD
=======

    .newsletterParagraphTwo {
      font-size: 18px;
      font-family: "Open Sans", sans-serif;
      line-height: 1.20;
      color: #ffffff !important;
    }

    .newsletterProductTitleContainer {
      padding-top: 35px;
    }
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
    
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
<<<<<<< HEAD
=======

    .newsletterTitleTwo {
      font-size: 30px;
      font-family: "Open Sans", sans-serif;
      line-height: 1.20;
      font-weight: 600;
      color: #ffffff !important;
    }

    .newsletterBottomCollor25px {
      padding-bottom: 25px;
      background-color: #F6E7E6 !important;
    }

    .newsletterBottomCollor35px {
      padding-bottom: 35px;
      background-color: #F6E7E6 !important;
    }

    .newsletterBottomCollor80px {
      padding-bottom: 80px;
      background-color: #F6E7E6 !important;
    }

    .newsletterBottomCollorTwo25px {
      padding-bottom: 25px;
      background-color: #750000 !important;
    }

    .newsletterBottomCollorTwo35px {
      padding-bottom: 35px;
      background-color: #750000 !important;
    }

    .newsletterBottomCollorTwo80px {
      padding-bottom: 80px;
      background-color: #750000 !important;
    }

    .newsletterProductTitleLast {
      font-size: 27px;
      font-family: "Open Sans", sans-serif;
      line-height: 1.25;
      color: #000000;
      text-decoration: underline;
    }
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
    
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
<<<<<<< HEAD
=======

    .newsletterProductContainer {
      padding-left: 20px !important;
      padding-right: 20px !important;
    }

    .newsletterProductContainerLEFT70px {
      width: 50% !important;
      vertical-align: top;
      padding-right: 10px;
      padding-bottom: 70px;
    }
    
    .newsletterProductContainerRIGHT70px {
      width: 50% !important;
      vertical-align: top;
      padding-left: 10px;
      padding-bottom: 70px;
    }
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
    
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
<<<<<<< HEAD
=======

      .newsletterProductContainer {
        padding-left: 10px !important;
        padding-right: 10px !important;
      }

      .newsletterProductContainerLEFT70px {
        width: 50% !important;
        vertical-align: top;
        padding-right: 5px !important;
        padding-bottom: 50px !important;
      }

      .newsletterProductContainerRIGHT70px {
        width: 50% !important;
        vertical-align: top;
        padding-left: 5px !important;
        padding-bottom: 50px !important;
      }
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
    
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
<<<<<<< HEAD
        padding-top: 10px;
=======
        padding-top: 15px;
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
      }
    
      .newsletterTitle {
        font-size: 25px;
      }
<<<<<<< HEAD
=======

      .newsletterTitleTwo {
        font-size: 25px;
        color: #ffffff !important;
      }

      .newsletterProductTitleLast {
        font-size: 16px !important;
        text-decoration: underline;
      }
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
    
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
<<<<<<< HEAD
=======

      .newsletterBottomCollor25px {
        padding-bottom: 15px;
        background-color: #F6E7E6 !important;
      }

      .newsletterBottomCollor35px {
        padding-bottom: 20px;
        background-color: #F6E7E6 !important;
      }

      .newsletterBottomCollor80px {
        padding-bottom: 50px;
        background-color: #F6E7E6 !important;
      }

      .newsletterBottomCollorTwo25px {
        padding-bottom: 15px;
        background-color: #750000 !important;
      }

      .newsletterBottomCollorTwo35px {
        padding-bottom: 20px;
        background-color: #750000 !important;
      }

      .newsletterBottomCollorTwo80px {
        padding-bottom: 50px;
        background-color: #750000 !important;
      }
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
    
      .newsletterParagraph {
        font-size: 16px;
      }
<<<<<<< HEAD
=======

      .newsletterParagraphTwo {
        font-size: 16px;
        color: #ffffff !important;
      }
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
    
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
    LP: `
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
<<<<<<< HEAD
            border-collapse: separate;
          }
          
=======
          }
          
          #newsletter .newsletterTitleH1 {
            font-size: 45px;
            line-height: 53px;
            font-weight: 400;
            margin:0;
            }

          #newsletter .newsletterTitleH1Bold {
              font-size: 45px;
              line-height: 53px;
              font-weight: 600;
              margin:0;
            }

            #newsletter .newsletterTitleH1Bigger {
              font-size: 67px;
              line-height: 73px;
              font-weight: 600;
              margin:0;
            }
            
            #newsletter .newsletterTitleH2 {
            font-size: 30px;
            line-height: 45px;
            font-weight: 400;
            margin:0;
            }

            	
            #newsletter .newsletterHrefTit {
              text-decoration:none;
              text-align:center;
              }

>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
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
<<<<<<< HEAD
=======

          #newsletter .newsletterAditionalTitle {
            font-size: 30px;
            line-height: 1.20;
            font-weight: 400;
          }

          #newsletter .newsletterTitleAdditional{
            font-size: 27px;
            line-height: 1.25;
            text-decoration: underline;
          }

          #newsletter .newsletterBottom70px {
            padding-bottom: 70px;
          }
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
          
          /* NEWSLETTER START */
          
          #newsletter .newsletterFreebieContainer {
            padding-left: 10px;
          }
          
          #newsletter .newsletterBottom80px {
            padding-bottom: 80px;
          }
<<<<<<< HEAD
=======

          #newsletter .newsletterContainerFree {
            padding-left: 124px;
            padding-right: 124px;
          }
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
          
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
            font-size: 20px;
            line-height: 1.20;
          }
<<<<<<< HEAD
=======

          #newsletter .newsletterLeft5px {
            padding-left: 5px;
          }

          #newsletter .newsletterRight5px {
            padding-right: 5px;
          }
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
          
          #newsletter .newsletterBottom20px {
            padding-bottom: 20px;
          }

          #newsletter .newsletterBottom10px {
            padding-bottom: 10px;
          }
          
          #newsletter .newsletterBottom35px {
            padding-bottom: 35px;
          }

<<<<<<< HEAD
=======
          #newsletter .newsletterBottom40px {
            padding-bottom: 40px;
          }

>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
          #newsletter .newsletterBottom60px {
            padding-bottom: 60px;
          }
          
          #newsletter .newsletterParagraph {
            font-size: 18px;
            line-height: 1.20;
          }
<<<<<<< HEAD
=======

          #newsletter .timerParagraph {
            font-size: 30px;
            font-family: "Open Sans", sans-serif;
            line-height: 1.20;
          }

          #newsletter .newsletterCodeParagraph {
            font-size: 20px;
            line-height: 1.20;
            font-weight: 600;
          }
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
          
          #newsletter .newsletterTitle {
            font-size: 30px;
            line-height: 1.20;
            font-weight: 600;
          }

<<<<<<< HEAD
          #newsletter .newsletterHrefTit {
            text-decoration:none;
            text-align:center;
            padding:0 25px;
            display:block;
          }

          #newsletter .newsletterTitleH1 {
            font-size: 45px;
            line-height: 53px;
            font-weight: 400;
            margin:0;
          }
            
          #newsletter .newsletterTitleH2 {
            font-size: 30px;
            line-height: 45px;
            font-weight: 400;
            margin:0;
=======
          #newsletter .newsletterTitleAditional {
            font-size: 30px;
            line-height: 1.20;
            font-weight: 400;
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
          }

          #newsletter .newsletterIntroTitle {
            font-size: 35px;
            line-height: 1.20;
            font-weight: 600;
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
<<<<<<< HEAD
            padding-right: 10px;
          }
          
          #newsletter .newsletterLeft10px {
            padding-left: 10px;
=======
            padding-right: 10px !important;
          }
          
          #newsletter .newsletterLeft10px {
            padding-left: 10px !important;
          }

          #newsletter .newsletterRight02px {
            padding-right: 20px;
          }

          #newsletter .newsletterLeft02px {
            padding-left: 20px;
          }

          #newsletter .newsletterLeft20px {
            padding-left: 20px;
          }

          #newsletter .newsletterRight20px {
            padding-left: 20px;
            padding-right: 20px;
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
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

<<<<<<< HEAD
          .br {
            display: block;
          }
          
          @media screen and (max-width: 768px) {
=======
          #newsletter .newsletterSubtitleTimer {
            font-size: 30px; 
            line-height: 1.25;
          }

          .newsletterProductContainer {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }

          .newsletterProductContainerLast {
            padding-left: 10px !important;
            padding-right: 10px !important;
          }

          .newsletterProductContainer70px {
            width: 50% !important;
            vertical-align: top;
            padding-right: 10px;
            padding-bottom: 70px;
          }

          .newsletterProductTitleLast {
            font-size: 27px;
            line-height: 1.25;
            color: #000000;
            text-decoration: underline;
          }

          .newsletterProductTitleContainer {
            padding-top: 35px;
          }

          .backgroundOne {
            background-color: #ffffff !important;
          }

          .br {
            display: block; 
        }
          
          @media screen and (max-width: 768px) {
            #newsletter .stack-column {
              display: block !important;
              width: 100% !important;
              max-width: 100% !important;
            }

            #newsletter .product-img {
              width: 100% !important;
              height: auto !important;
            }

            .br {
    
              display: contents;
          }

>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
            #newsletter .newsletterFooterCategoryLEFTBottom {
              padding-right: 5px !important;
            }

<<<<<<< HEAD
            .br {
              display: contents;
=======
            #newsletter .newsletterSubtitleTimer {
              font-size: 20px !important;
            }

            #newsletter .newsletterTitleH1 {
              font-size: 30px;
              line-height: 45px;
            }

            #newsletter .newsletterTitleAdditional {
              font-size: 16px !important;
            }

            #newsletter .newsletterAditionalTitle {
              font-size: 25px;
            }

            #newsletter .newsletterBottom70px {
            padding-bottom: 50px;
          }

            #newsletter .newsletterTitleH1Bold {
              font-size: 30px;
              line-height: 35px;
            }

            #newsletter .newsletterContainerFree {
              padding-left: 62px;
              padding-right: 62px;
            }
              
            #newsletter .newsletterTitleH2 {
              font-size: 22px;
              line-height: 27px;
            }

            #newsletter .newsletterTitleH1Bigger {
              font-size: 45px;
              line-height: 45px;
            }

            .newsletterProductContainer {
              padding-left: 10px !important;
              padding-right: 10px !important;
            }

            .newsletterProductContainerLast {
              padding-left: 5px !important;
              padding-right: 5px !important;
            }
            
            .newsletterProductContainer70px {
              width: 50% !important;
              vertical-align: top;
              padding-right: 5px !important;
              padding-bottom: 50px !important;
            }
  
            .newsletterProductTitleLast {
              font-size: 16px !important;
              text-decoration: underline;
            }
  
            .newsletterProductTitleContainer {
              padding-top: 15px;
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
            }
          
            #newsletter .newsletterFooterCategoryRIGHTBottom {
              padding-left: 5px !important;
            }
          
            #newsletter .newsletterFooterCategoryLEFT {
              padding-bottom: 10px !important;
              padding-right: 5px !important;
            }
<<<<<<< HEAD

            #newsletter .newsletterHrefTit {
              padding:0 15px;
            }
=======
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
          
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
<<<<<<< HEAD

            #newsletter .newsletterTitleH1 {
              font-size: 30px;
              line-height: 35px;
            }
              
            #newsletter .newsletterTitleH2 {
              font-size: 22px;
              line-height: 27px;
            }
=======
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
          
            #newsletter .newsletterFooterTitle {
              font-size: 18px;
            }

            #newsletter .newsletterIntroTitle {
              font-size: 28px;
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

<<<<<<< HEAD
=======
            #newsletter .newsletterTitleAditional{
              font-size: 25px;
            }

>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
            #newsletter .newsletterTitleOfferPart {
              font-size: 20px;
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

<<<<<<< HEAD
=======
            #newsletter .newsletterBottom40px {
              padding-bottom: 25px;
            }

>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
            #newsletter .newsletterBottom60px {
              padding-bottom: 40px;
            }
          
            #newsletter .newsletterParagraph {
              font-size: 16px;
            }
<<<<<<< HEAD
          
            #newsletter .newsletterLeft10px {
              padding-left: 5px;
            }
          
            #newsletter .newsletterRight10px {
              padding-right: 5px;
=======

            #newsletter .timerParagraph {
              font-size: 27px;
            }

            #newsletter .newsletterLeft5px {
              padding-left: 2px;
            }

            #newsletter .newsletterRight5px {
              padding-right: 2px;
            }
          
            #newsletter .newsletterLeft10px {
              padding-left: 5px !important;
            }

            #newsletter .newsletterLeft20px {
              padding-left: 10px;
            }

            #newsletter .newsletterRight20px {
              padding-left: 10px;
              padding-right: 10px;
            }
          
            #newsletter .newsletterRight10px {
              padding-right: 5px !important;
            }

            #newsletter .newsletterRight02px {
              padding-right: 10px;
            }
  
            #newsletter .newsletterLeft02px {
              padding-left: 10px;
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
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
<<<<<<< HEAD
=======

    #newsletter .WhiteSpace {
      background-color: #ffffff !important;
    }

    #newsletter .newsletterProductContainer {
      padding-left: 20px !important;
      padding-right: 20px !important;
    }

    #newsletter .newsletterProductContainerLEFT70px {
      width: 50% !important;
      vertical-align: top;
      padding-right: 10px;
      padding-bottom: 70px;
    }
    
    #newsletter .newsletterProductContainerRIGHT70px {
      width: 50% !important;
      vertical-align: top;
      padding-left: 10px;
      padding-bottom: 70px;
    }
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
    
    #newsletter.newsletterContainer {
      padding-left: 20px;
      padding-right: 20px;
    }
    
    #newsletter .newsletterCta {
      font-size: 20px;
      line-height: 1.20;
<<<<<<< HEAD
      font-weight: 600;
=======
    }

    #newsletter .newsletterCtaTwo {
      font-size: 20px;
      line-height: 1.20;
      color: #ffffff !important;
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
    }

    #newsletter .newsletterCode {
      font-size: 30px;
      font-weight: 600;
      line-height: 1.20;
    }
<<<<<<< HEAD
=======

    #newsletter .backgroundOne {
      background-color: #ffffff !important;
    }

    #newsletter .backgroundTwo {
      background-color: #FFCCB7 !important;
    }

    .newsletterProductTitleContainer {
      padding-top: 35px;
    }
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
    
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
<<<<<<< HEAD
=======

    #newsletter .newsletterBottomCollor25px {
      padding-bottom: 25px;
      background-color: #F6E7E6 !important;
    }

    #newsletter .newsletterBottomCollor35px {
      padding-bottom: 35px;
      background-color: #F6E7E6 !important;
    }

    #newsletter .newsletterBottomCollor80px {
      padding-bottom: 80px;
      background-color: #F6E7E6 !important;
    }

    #newsletter .newsletterBottomCollorTwo25px {
      padding-bottom: 25px;
      background-color: #750000 !important;
    }

    #newsletter .newsletterBottomCollorTwo35px {
      padding-bottom: 35px;
      background-color: #750000 !important;
    }

    #newsletter .newsletterBottomCollorTwo80px {
      padding-bottom: 80px;
      background-color: #750000 !important;
    }

    .newsletterProductTitleLast {
      font-size: 27px;
      line-height: 1.25;
      color: #000000;
      text-decoration: underline;
    }
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
    
    #newsletter .newsletterParagraph {
      font-size: 18px;
      line-height: 1.20;
    }
<<<<<<< HEAD
=======

    #newsletter .newsletterParagraphTwo {
      font-size: 18px;
      line-height: 1.20;
      color: #ffffff !important;
    }
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
    
    #newsletter .newsletterTitle {
      font-size: 30px;
      line-height: 1.20;
<<<<<<< HEAD
=======
      font-weight: 600;
    }

   #newsletter .newsletterTitleTwo {
      font-size: 30px;
      line-height: 1.20;
      font-weight: 600;
      color: #ffffff !important;
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
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
<<<<<<< HEAD
=======

      #newsletter .newsletterProductContainer {
        padding-left: 10px !important;
        padding-right: 10px !important;
      }

      #newsletter .newsletterProductContainerLEFT70px {
        width: 50% !important;
        vertical-align: top;
        padding-right: 5px !important;
        padding-bottom: 50px !important;
      }

      #newsletter .newsletterProductContainerRIGHT70px {
        width: 50% !important;
        vertical-align: top;
        padding-left: 5px !important;
        padding-bottom: 50px !important;
      }
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
    
      #newsletter .newsletterProductTitleFreebie {
        font-size: 18px;
      }
    
      #newsletter .newsletterProductTitle {
        font-size: 18px;
      }
    
      #newsletter .newsletterProductLowPrice {
        font-size: 16px;
      }
<<<<<<< HEAD
=======

      .newsletterProductTitleLast {
        font-size: 16px !important;
        text-decoration: underline;
      }
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
    
      #newsletter .newsletterProductHightPrice {
        display: block;
      }
    
      #newsletter .newsletterProductTitleContainer {
        padding-top: 10px;
      }
    
      #newsletter .newsletterTitle {
        font-size: 25px;
      }

<<<<<<< HEAD
=======
      #newsletter .newsletterTitleTwo {
        font-size: 25px;
        color: #ffffff !important;
      }

>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
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
<<<<<<< HEAD
=======

      #newsletter .newsletterBottomCollor25px {
        padding-bottom: 15px;
        background-color: #F6E7E6 !important;
      }

      #newsletter .newsletterBottomCollor35px {
        padding-bottom: 20px;
        background-color: #F6E7E6 !important;
      }

      #newsletter .newsletterBottomCollor80px {
        padding-bottom: 50px;
        background-color: #F6E7E6 !important;
      }

      #newsletter .newsletterBottomCollorTwo25px {
        padding-bottom: 15px;
        background-color: #750000 !important;
      }

      #newsletter .newsletterBottomCollorTwo35px {
        padding-bottom: 20px;
        background-color: #750000 !important;
      }

      #newsletter .newsletterBottomCollorTwo80px {
        padding-bottom: 50px;
        background-color: #750000 !important;
      }
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
    
      #newsletter .newsletterBottom35px {
        padding-bottom: 20px;
      }

      #newsletter .newsletterBottom60px {
        padding-bottom: 40px;
      }
    
      #newsletter .newsletterParagraph {
        font-size: 16px;
      }
<<<<<<< HEAD
=======

      #newsletter .newsletterParagraphTwo {
        font-size: 16px;
        color: #ffffff !important;
      }
>>>>>>> 93d3bb7f95f6e89994a7636b5934150b26de1692
    
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
