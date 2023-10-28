import db from '../db/connection';
import { DataTypes } from 'sequelize';

const item = db.define('item', {
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.DOUBLE
    },
    stock: {
        type: DataTypes.NUMBER
    }

},{
    createdAt: false,
    updatedAt: false
});

export default item;