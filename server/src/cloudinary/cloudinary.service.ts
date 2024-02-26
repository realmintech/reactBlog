// cloudinary.service.ts
import { Injectable } from '@nestjs/common';
import * as cloudinary from 'cloudinary';

@Injectable()
export class CloudinaryService {
  constructor() {
    cloudinary.v2.config({
      cloud_name: 'your-cloud-name',
      api_key: 'your-api-key',
      api_secret: 'your-api-secret',
    });
  }

  async uploadFile(file: any, folder: string): Promise<any> {
    return new Promise((resolve, reject) => {
      cloudinary.v2.uploader.upload_stream(
        { folder, resource_type: 'auto' },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        },
      ).end(file.buffer);
    });
  }
}
