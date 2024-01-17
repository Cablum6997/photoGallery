import { useState, useEffect } from 'react';
import { isPlatform } from '@ionic/react';

import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Capacitor } from '@capacitor/core';

const [photos, setPhotos] = useState<UserPhoto[]>([]);

export interface UserPhoto {
    filepath: string;
    webviewPath?: string;
  }

  


export function usePhotoGallery() {
    const takePhoto = async () => {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 100,
      });
    };

    


  
    return {
      takePhoto,
    };
  }