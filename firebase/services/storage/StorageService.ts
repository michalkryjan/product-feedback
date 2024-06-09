import { FirebaseStorage, ref as storageRef } from 'firebase/storage'
import { useStorageFile } from 'vuefire'

interface IFirebaseStorageService {
  getImage: (path: string) => Ref<string | undefined | null>
}

class FirebaseStorageService implements IFirebaseStorageService {
  private readonly storage: FirebaseStorage

  constructor (firebaseStorage: FirebaseStorage) {
    this.storage = firebaseStorage
  }

  public getImage (path: string) {
    const imageRef = storageRef(this.storage, path)
    const { url } = useStorageFile(imageRef)
    return url
  }
}

export { FirebaseStorageService }
