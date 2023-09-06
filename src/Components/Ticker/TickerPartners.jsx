import React from "react";
import { TickerStyle } from "./TickerPartners.styled";
import { useMediaQuery } from "@mui/material";

const Partners = () => {
  const isLargeDesktop = useMediaQuery((theme) => theme.breakpoints.up("xl"));
  const isDesktop = useMediaQuery((theme) =>
    theme.breakpoints.between("lg", "xl")
  );
  const isNotebook = useMediaQuery((theme) =>
    theme.breakpoints.between("md", "lg")
  );
  const isTablet = useMediaQuery((theme) =>
    theme.breakpoints.between("sm", "md")
  );
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <TickerStyle
      LargeDesktop={isLargeDesktop}
      Desktop={isDesktop}
      Notebook={isNotebook}
      Tablet={isTablet}
      Mobile={isMobile}
    >
      <div className="ImgCont">
        <img
          className="RosKImg"
          src="https://s3-alpha-sig.figma.com/img/17df/59a0/11082122e14f07f93ec712b26d4d8b10?Expires=1687737600&Signature=AWFTHBZaqRme7AOPT-MhXBrG8B7qGv1SY6lBga5emgBw9NAhfk-~zNNUz9YMqvwUoil2w1iwnnCarJuWtthtSd8stOQATjebw2YApgwNAW-knFW36vgjZJmeUYTItW~ay1nPbdD4dgj9oJiyh1xwySq3cFHTtCZTOZQmcbdIeqrajpaskSMiy~whWdaw-SlR8bQFfmGTuJr1~y4jRC0lWxFfqyjXt0uA4PRQqCLTNVu0ePS2r6PRTb3fo48LXFVA59Voxoa2dADjp0f3MdV3zGvGwHOKNVBrU69y8dpoR1vwexcpgAqRKh1IQJvciRIHrSSJrbeAMo98vUAy4NkzrQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
        <img
          className="BashImg"
          src="https://bashkirialifestyle.ru/st/images/logo.svg"
        />
        <img
          className="ArtImg"
          src="https://s3-alpha-sig.figma.com/img/6861/7e82/0a476a6bccc22c60f19d45ec5ef1da23?Expires=1687737600&Signature=ELXySZ5Jlkc6aWtsDDETXnMWdYgjfnTs-0bMLueU38KPDCZkHhySxi6q2xRiQJcH9BuaeGtyYNRDmdQnPkovMQPx41xeL3dK7hqSBNnFuuRipRdgvst639IS~i7R1Oia4FDpTj8H5XW7pQuxCX3DAZUqd9SRzyzqXhWV-ONjhoFbkp04um9auI678GDl1HXlWAz6fSkeLkT8wc~7aJIsSAT68PzJ0~BTqsRTcR-TquPuzuKMT2tGAEXrhdqv50kc6HPInqAzxur1EbE5Uywmolqi4u9qgp56N95eX3tw19iMqhGW1m6pII3YgZVoIvtydyUkHRkFfHQoDsN3sEM1Eg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
      </div>
      <div className="ImgCont">
        <img
          className="RosKImg"
          src="https://s3-alpha-sig.figma.com/img/17df/59a0/11082122e14f07f93ec712b26d4d8b10?Expires=1687737600&Signature=AWFTHBZaqRme7AOPT-MhXBrG8B7qGv1SY6lBga5emgBw9NAhfk-~zNNUz9YMqvwUoil2w1iwnnCarJuWtthtSd8stOQATjebw2YApgwNAW-knFW36vgjZJmeUYTItW~ay1nPbdD4dgj9oJiyh1xwySq3cFHTtCZTOZQmcbdIeqrajpaskSMiy~whWdaw-SlR8bQFfmGTuJr1~y4jRC0lWxFfqyjXt0uA4PRQqCLTNVu0ePS2r6PRTb3fo48LXFVA59Voxoa2dADjp0f3MdV3zGvGwHOKNVBrU69y8dpoR1vwexcpgAqRKh1IQJvciRIHrSSJrbeAMo98vUAy4NkzrQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
        <img
          className="BashImg"
          src="https://bashkirialifestyle.ru/st/images/logo.svg"
        />
        <img
          className="ArtImg"
          src="https://s3-alpha-sig.figma.com/img/6861/7e82/0a476a6bccc22c60f19d45ec5ef1da23?Expires=1687737600&Signature=ELXySZ5Jlkc6aWtsDDETXnMWdYgjfnTs-0bMLueU38KPDCZkHhySxi6q2xRiQJcH9BuaeGtyYNRDmdQnPkovMQPx41xeL3dK7hqSBNnFuuRipRdgvst639IS~i7R1Oia4FDpTj8H5XW7pQuxCX3DAZUqd9SRzyzqXhWV-ONjhoFbkp04um9auI678GDl1HXlWAz6fSkeLkT8wc~7aJIsSAT68PzJ0~BTqsRTcR-TquPuzuKMT2tGAEXrhdqv50kc6HPInqAzxur1EbE5Uywmolqi4u9qgp56N95eX3tw19iMqhGW1m6pII3YgZVoIvtydyUkHRkFfHQoDsN3sEM1Eg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
      </div>
    </TickerStyle>
  );
};
export default Partners;
