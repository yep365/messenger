export default (attachments) => {
  const file = attachments[0];
  return attachments.length && file.ext === "webm";
};
