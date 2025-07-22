 export function standard_nsltr(){
    return `
 /*============================================================ Prevent WebKit and Windows mobile changing default text sizes ============================================================*/
          table, td {
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
          }

/*============================================================ Remove spacing between tables in Outlook 2007 and up ============================================================*/
          img {
              -ms-interpolation-mode: bicubic;
          }

          .title-advantages{
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
          
          .newsletterRecommendationHeader{
            text-align: center;
            font-size: 11px;
            color: #8c8278;
            margin-bottom: 10px;
            margin-top: 10px;
          }
          
/* ============================================================ NEWSLETTER START ============================================================*/
        .newsletterMarkTitle{
            font-size: 25px;
            font-family: "Open Sans", sans-serif;
            line-height: 1;
            margin-bottom: 0px;
          }

          .newsletterAditionalTitle {
            font-size: 30px;
            font-family: "Open Sans", sans-serif;
            line-height: 1.20;
            font-weight: 400;
          }
            .newsletterAdditionalCategoryTitle{
            font-size: 27px;
            font-family: "Open Sans", sans-serif;
            line-height: 1.25;
            text-decoration: underline;
          }
          .newsletterMarkTitleSpace {
            padding-bottom: 25px;
          }
          .newsletterFreebieContainer {
            padding-left: 10px;
          }
          .newsletterContainer {
            padding-left: 20px;
            padding-right: 20px;
          }

          .newsletterContainerFree {
            padding-left: 124px;
            padding-right: 124px;
          }
          
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
          
/* ============================ newsletterBottom ================================*/
          .newsletterBottom10px {
            padding-bottom: 10px;
          }
          
          .newsletterBottom20px {
            padding-bottom: 20px;
          }
          
          .newsletterBottom35px {
            padding-bottom: 35px;
          }

          .newsletterBottom40px {
            padding-bottom: 40px;
          }

          .newsletterBottom60px {
            padding-bottom: 60px;
          }
          .newsletterBottom70px {
          padding-bottom: 70px;
          }
           .newsletterBottom80px {
            padding-bottom: 80px;
          }
          
/* ============================ newsletterPadding ================================*/
          .newsletterRight10px {
            padding-right: 10px;
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
            padding-left: 10px;
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
          }
          .newsletterParagraph {
            font-size: 18px;
            font-family: "Open Sans", sans-serif;
            line-height: 1.20;
          }

          .timerParagraph {
            font-size: 30px;
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

          .newsletterTitleAditional{
            font-size: 30px;
            font-family: "Open Sans", sans-serif;
            line-height: 1.20;
            font-weight: 400;
          }

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
/*============================================================ Footer ============================================================*/
          
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
/*============================================================ Media Queries ============================================================*/
@media screen and (max-width: 768px) {
            .stack-column {
              display: block !important;
              width: 100% !important;
              max-width: 100% !important;
            }

            .newsletterAditionalTitle {
              font-size: 25px;
            }

            .newsletterAdditionalCategoryTitle {
              font-size: 16px !important;
            }
           
            .product-img {
              width: 100% !important;
              height: auto !important;
            }

            .br {
    
              display: contents;
          }

            .newsletterFooterCategoryLEFTBottom {
              padding-right: 5px !important;
            }

            .newsletterSubtitleTimer {
              font-size: 20px !important;
            }
          
            .newsletterFooterCategoryRIGHTBottom {
              padding-left: 5px !important;
            }

            .newsletterProductContainer {
              padding-left: 10px !important;
              padding-right: 10px !important;
            }

            .newsletterProductContainerLast {
              padding-left: 5px !important;
              padding-right: 5px !important;
            }

            .newsletterBottom40px {
              padding-bottom: 25px;
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
          
            .newsletterTitle {
              font-size: 25px;
            }

            .newsletterTitleAditional{
              font-size: 25px;
            }

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

            .newsletterContainerFree {
              padding-left: 62px;
              padding-right: 62px;
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

            .newsletterBottom70px {
              padding-bottom: 50px;
            }
          
            .newsletterParagraph {
              font-size: 16px;
            }

            .timerParagraph {
              font-size: 27px;
            }
          
            .newsletterLeft10px {
              padding-left: 5px;
            }

            .newsletterLeft20px {
              padding-left: 10px;
            }

            .newsletterRight20px {
              padding-left: 10px;
              padding-right: 10px;
            }
          
            .newsletterRight10px {
              padding-right: 5px;
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
            }
          
            .newsletterBottom20px {
              padding-bottom: 10px;
            }
          
            .newsletterBottom80px {
              padding-bottom: 50px;
            }
            .newsletterMarkTitle{
              font-size:18px;
            }
            .newsletterMarkTitle{
              font-size:18px;
            }
          
          .newsletterMarkTitleSpace{
            padding-bottom: 18px;
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
          
          
    `}

 