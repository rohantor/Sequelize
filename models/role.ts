import { DataTypes, Model } from "sequelize";
import { db } from "../config";
import { User } from "./user";
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
        validate:{isIn:[['super admin','admin','user','guest']]}

    },
    createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
    updatedBy: {
        type: DataTypes.INTEGER,
        allowNull: false, validate: {
            notEmpty: true,
        }
    },
    deletedBy: {
        type: DataTypes.INTEGER,
        defaultValue: null, validate: {
            notEmpty: true,
        }
    },
    deletedAt: {
        type: DataTypes.DATE,
        defaultValue: null, validate: {
            notEmpty: true,
        }
    }
}, {
    tableName: 'role'
});

// Role.hasMany(User)