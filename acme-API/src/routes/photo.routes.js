import { Router } from 'express'
const router = Router()

import * as photoController from '../controllers/photo.controller'
import multer from '../libs/multer'

/* "/acme/api/photos" */
router.post('/', multer.single('image'), photoController.createPhoto)
router.get('/', photoController.getPhotos)
router.get('/:id', photoController.getPhotosByAlbumId)

export default router