exports.successWrapper = (res, status, data, message) => {
  let response = { status: status, data: { message: message, data: data } };
  res.send(response);
  return;
};
exports.errorWrapper = (res, status, message) => {
  let response = { status: status, data: { message: message } };
  res.send(response);
  return;
};
