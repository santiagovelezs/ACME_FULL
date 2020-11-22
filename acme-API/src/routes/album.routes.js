import { Router } from 'express'
import { auth } from '../middlewares'
const router = Router()

import * as albumController from '../controllers/album.controller'

/* "/acme/api/albums" */
router.post('/', albumController.createAlbum)
router.get('/', albumController.getAlbumsByUserId)
router.get('/:id', albumController.getAlbumById)

export default router