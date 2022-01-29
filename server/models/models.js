const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "USER" },

})

const Basket = sequelize.define('basket', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

})

const BasketProduct = sequelize.define('basketproduct', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

})

const Product = sequelize.define('product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    rating: { type: DataTypes.INTEGER, defaultValue: 0 },
    img: { type: DataTypes.STRING, allowNull: false },
    typeId: { type: DataTypes.INTEGER, allowNull: true },
    brandId: { type: DataTypes.INTEGER, allowNull: true },
    spId: { type: DataTypes.INTEGER, allowNull: true },
})

const Type = sequelize.define('type', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false }
})

const Brand = sequelize.define('brand', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false }
})

const Sp = sequelize.define('sp', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false }
})

const Rating = sequelize.define('raiting', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.INTEGER, allowNull: false }
})

const ProductInfo = sequelize.define('product_info', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    tittle: { type: DataTypes.STRING, unique: true, allowNull: false },
    description: { type: DataTypes.STRING, unique: true, allowNull: false }
})

const SpTypeBrand = sequelize.define('sp_type_brand', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketProduct)
BasketProduct.belongsTo(Basket)

Type.hasMany(Product)
Product.belongsTo(Type)

Brand.hasMany(Product)
Product.belongsTo(Brand)

Sp.hasMany(Product)
Product.belongsTo(Sp)

Product.hasMany(ProductInfo, { as: 'info' });
ProductInfo.belongsTo(Product)

Product.hasMany(BasketProduct)
BasketProduct.belongsTo(Product)

Product.hasMany(Rating)
Rating.belongsTo(Product)

Type.belongsToMany(Brand, { through: SpTypeBrand })
Type.belongsToMany(Sp, { through: SpTypeBrand })
Brand.belongsToMany(Type, { through: SpTypeBrand })
Brand.belongsToMany(Sp, { through: SpTypeBrand })
Sp.belongsToMany(Brand,  { through: SpTypeBrand })
Sp.belongsToMany(Type, { through: SpTypeBrand })

module.exports = {
    User,
    Basket,
    BasketProduct,
    Product,
    Type,
    Brand,
    Sp,
    Rating,
    SpTypeBrand,
    ProductInfo
}