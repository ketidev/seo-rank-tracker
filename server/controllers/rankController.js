// Add a keyword to track
export const addKeyword = async (req, res) => {
  try {
    const { keyword, url } = req.body;
    if (!keyword || !url)
      return res
        .status(400)
        .json({ success: false, message: "Keyword and URL are required" });

    let domain;
    try {
      const urlObj = new URL(url.startsWith("http") ? url : `https://${url}`);
      domain = urlObj.hostname.replace("www.", "");
    } catch (error) {}
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid URL format" });
  }
};

// Get all keywords for user
export const getKeywords = async (req, res) => {};

// Get single keyword with full history
export const getKeyword = async (req, res) => {};

// Manually refresh a keyword ranking
export const refreshKeyword = async (req, res) => {};

//Delete keyword
export const deleteKeyword = async (req, res) => {};

// Toggle tracking active/inactive
export const toggleTracking = async (req, res) => {};
