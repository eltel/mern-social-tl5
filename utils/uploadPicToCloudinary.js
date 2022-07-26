import axios from "axios";

const uploadPic = async (media) => {
  const instance = axios.create();
  try {
    const form = new FormData();
    form.append("file", media);
    form.append("upload_preset", "timeline-5");
    form.append("cloud_name", "setstate");

    const res = await instance.post(process.env.CLOUDINARY_URL, form);
    return res.data.url;
  } catch (error) {
    return;
  }
};

export default uploadPic;
