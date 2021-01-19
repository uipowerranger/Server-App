exports.createUser = async (req) => {
  let data = {};

  if (req.body.first_name == "") {
    data.status = false;
    data.reason = "Please Enter First Name";
    return data;
  }
  if (req.body.last_name == "") {
    data.status = false;
    data.reason = "Please Enter Last Name";
    return data;
  }
  if (req.body.email_id == "") {
    data.status = false;
    data.reason = "Please Enter Email Id";
    return data;
  }
  if (req.body.phone_number == "") {
    data.status = false;
    data.reason = "Please Enter Phone Number";
    return data;
  }
  if (req.body.dob == "") {
    data.status = false;
    data.reason = "Please Enter DOB";
    return data;
  }
  if (req.body.gender == "") {
    data.status = false;
    data.reason = "Please Select Gender";
    return data;
  }
  if (req.body.address == "") {
    data.status = false;
    data.reason = "Please Enter Address";
    return data;
  }
  // if(req.body.image == ''){
  //     data.status=false;
  //     data.reason="Please Upload Image"
  //     return data
  // }
  else {
    data.status = true;
    return data;
  }
};

//Login Otp Generation
exports.loginOtpGen = async (req) => {
  let data = {};

  if (req.body.phone_number == "") {
    data.status = false;
    data.reason = "Please Enter Phone Number";
    return data;
  } else {
    data.status = true;
    return data;
  }
};
