import bcrypt from 'bcrypt'
import { DataTypes, Model } from "sequelize";
import { db } from "../config";
import { Role } from './role'
export const User = db.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isLowercase: true,
            notEmpty: true
        },
        get() {
            return this.getDataValue('username').toUpperCase();
        }

    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true,
        },
        set(value: string) {
            this.setDataValue('password', bcrypt.hashSync(value, 10));
        }
    },
    roleid: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
    tableName: 'user'
});


User.belongsTo(Role, {
    foreignKey: 'roleid'
});
