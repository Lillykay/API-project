export const normalizeData = (data) => {
  if (!data) {
    return {};
  }
  return data.reduce((normalized, obj) => {
    normalized[obj.id] = obj;
    return normalized;
  }, {});
};
