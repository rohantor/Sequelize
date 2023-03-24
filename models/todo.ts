import { DataTypes, Model } from "sequelize";
import { db } from "../config";

interface Todo {

    id: string,
    title: string,
    complete: boolean
}


export class TodoInstance extends Model<Todo>{

}

TodoInstance.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    }, title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    complete: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    }

},{
    sequelize:db,
    tableName:'todo'
})