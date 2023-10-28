import { Router } from 'express';
import { deleteItem, getItem, getItems, postItem, updateItem } from '../controllers/items';

const router = Router();

router.get('/', getItems);
router.get('/:id', getItem);
router.delete('/:id', deleteItem);
router.post('/', postItem);
router.put('/:id', updateItem);

export default router;