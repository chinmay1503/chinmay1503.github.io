import React from "react";

const Reference = ({imgPath, referenceName, designation, companyName, details}) => {
  return (
      <div className="row">
        <div className="col-lg-2 col-md-3 cc-reference-header">
          <img src={imgPath} alt="Profile Pic of Reference" />
          <div className="h5 pt-2">{referenceName}</div>
          <p className="category">{designation} / {companyName}</p>
        </div>
        <div className="col-lg-10 col-md-9">
          <p>
            {details}
          </p>
        </div>
      </div>
  );
};

export default Reference;
