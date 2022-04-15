import HTTP from "../../axios/instanceAxios";

export class ImageService {
    static async saveImage(formData: any) {
        return HTTP.post<string>("/api/Image/SaveImage", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }).then(r => {
            return r
        }).catch(e => {
            console.log(e);
        });
    }
}