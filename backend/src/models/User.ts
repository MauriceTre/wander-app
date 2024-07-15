import { DataTypes, Model, Optional } from 'sequelize';
import db from '../config/db';

interface UserAttributes {
  id: number;
  email: string;
  password: string;
  totalDistance: number;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'totalDistance'> {}

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public email!: string;
  public password!: string;
  public totalDistance!: number;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    totalDistance: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize: db,
    tableName: 'users',
  }
);

export default User;
