import { FirebaseStorage, ref as storageRef } from 'firebase/storage'
import { useStorageFile } from 'vuefire'

interface IStorageService {
  getImage: (path: string) => Ref<string | undefined | null>
}

class StorageService implements IStorageService {
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

export { StorageService }
