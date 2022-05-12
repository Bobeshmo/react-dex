import HTTP from "../../axios/instanceAxios";

export class ImageService {
    static async saveImage(formData: any) {
        return HTTP.post("/api/Image/SaveImage", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }).then((response) => {
            return response.data;
        }).catch((error) => {
            console.log(error);
        })
    }
}