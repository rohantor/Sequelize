import { DataTypes, Model } from "sequelize";
import { db } from "../config";
export const Role = db.define('Role', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,

    },
    createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    updatedBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    deletedBy: {
        type: DataTypes.INTEGER,
        defaultValue: null,
    },
    deletedAt: {
        type: DataTypes.DATE,
        defaultValue: null,
    }
}, {
    tableName: 'role'
});
