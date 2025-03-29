const analysisService = {
    detectDeepfake: async (imageBase64: string): Promise<boolean> => {
      const formData = new FormData();
      formData.append("image", imageBase64);
  
      try {
        const response = await fetch("YOUR_BACKEND_API_URL/detect", {
          method: "POST",
          body: formData,
        });
  
        const data = await response.json();
        console.log("API Response:", data);
  
        return data.isDeepfake; // Ensure the API returns { isDeepfake: true/false }
      } catch (error) {
        console.error("Error analyzing image:", error);
        return false; // Default to "Authentic" if an error occurs
      }
    },
  };
  
  export default analysisService;
  