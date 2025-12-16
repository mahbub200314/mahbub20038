// cloudinary.js (নতুন ফাইল তৈরি করুন src/ ফোল্ডারে)
export const uploadToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'experience_uploads'); // আপনার প্রিসেট নাম
  
  const response = await fetch(
    'https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload',
    {
      method: 'POST',
      body: formData
    }
  );
  
  if (!response.ok) {
    throw new Error('Cloudinary upload failed');
  }
  
  const data = await response.json();
  return data.secure_url; // এই URL টা Firestore-এ সেভ করবেন
};