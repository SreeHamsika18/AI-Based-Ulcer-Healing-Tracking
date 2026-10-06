function extractFeatures(imageFile) {
  return {
    size: Math.floor(Math.random() * 50) + 50,
    redness: Math.floor(Math.random() * 50) + 50,
    border: Math.floor(Math.random() * 50) + 50
  };
}
